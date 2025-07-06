import { NextResponse } from 'next/server';
import { userPrisma } from '@/lib/db';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';
import { getResetPasswordTemplate } from '@/lib/email-templates/reset-password';
import crypto from 'crypto';

const requestSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email } = requestSchema.parse(data);

    // Check if user exists
    const user = await userPrisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // For security reasons, we still return success even if the email doesn't exist
      return NextResponse.json({
        success: true,
        message: "If an account exists with this email, you will receive a password reset link.",
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const tokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Store hashed token in database
    const hashedToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    await userPrisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: hashedToken,
        resetTokenExpiry: tokenExpiry,
      },
    });

    // Create reset URL
    const resetUrl = `${process.env.BASE_URL}/auth/reset-password?token=${resetToken}`;

    // Send email
    const emailHtml = getResetPasswordTemplate(user.name || user.email.split('@')[0], resetUrl);

    await sendEmail(
      user.email,
      "Reset Your AOAC Backend Password",
      emailHtml
    );

    return NextResponse.json({
      success: true,
      message: "If an account exists with this email, you will receive a password reset link.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Error in forgot password:', error);
    return NextResponse.json(
      { error: "Failed to process password reset request" },
      { status: 500 }
    );
  }
}