// app/api/session/route.ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const runtime = "edge";

export async function GET() {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    // Return only necessary user data
    return NextResponse.json({
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role
        // phone: session.user.phone // Removed because 'phone' does not exist on type 'User'
      }
    });
  } catch (error) {
    console.error("Session API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Types for type safety
// If you want to extend the User type to include 'phone', do so in your auth module's type definitions.