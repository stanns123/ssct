
import { NextRequest, NextResponse } from 'next/server';
import { userPrisma } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  const params = await context.params;
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: 'User id is required' }, { status: 400 });
  }
  try {
    const user = await userPrisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  const params = await context.params;
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: 'User id is required' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { name, email, phone, role, password } = body;

    // Validate required fields (password is optional for updates)
    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { error: 'Name, email, phone, and role are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate role
    const validRoles = ['Admin', 'Staff', 'Volunteer', 'Employer'];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role selected' },
        { status: 400 }
      );
    }

    // Prepare update data
    const updateData: {
      name: string;
      email: string;
      phone: string;
      role: string;
      password?: string;
    } = {
      name,
      email,
      phone,
      role,
    };

    // Hash password if provided
    if (password && password.trim() !== '') {
      updateData.password = await hashPassword(password);
    }

    // Update user
    const user = await userPrisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error updating user:', error);
    // Handle unique constraint violations
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2002'
    ) {
      const field = (error as { meta?: { target?: string[] } }).meta?.target?.[0];
      return NextResponse.json(
        { error: `${field} already exists` },
        { status: 409 }
      );
    }
    // Handle user not found
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2025'
    ) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const params = await context.params;
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: 'User id is required' }, { status: 400 });
  }
  try {
    await userPrisma.user.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    // Handle user not found
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2025'
    ) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}