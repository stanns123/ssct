import { NextResponse } from 'next/server';
import { userPrisma } from '@/lib/db';
import { z } from 'zod';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { sendEmail } from '@/lib/email';
import { getPasswordUpdatedTemplate } from '@/lib/email-templates/password-updated';

const resetSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { token, password } = resetSchema.parse(data);

    // Hash the token to compare with stored hash
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // Find user with valid reset token
    const user = await userPrisma.user.findFirst({
      where: {
        resetToken: hashedToken,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Update password and clear reset token
    await userPrisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    // Send email notification
    const emailHtml = getPasswordUpdatedTemplate(user.name || user.email.split('@')[0]);

    await sendEmail(
      user.email,
      'Your Password Has Been Updated',
      emailHtml
    );

    return NextResponse.json({
      success: true,
      message: 'Password reset successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Error in reset password:', error);
    return NextResponse.json(
      { error: 'Failed to reset password' },
      { status: 500 }
    );
  }
}