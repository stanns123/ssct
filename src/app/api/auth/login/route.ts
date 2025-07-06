import { NextResponse } from "next/server";
import { signIn } from "@/auth";
import { userPrisma } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { compare } from "bcryptjs";
import { detectDevice } from "@/lib/device-detector";
import { getLocationFromIP } from "@/lib/geo-location";
import { getLoginAlertTemplate } from "@/lib/email-templates/login-alert";

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const { emailOrPhone, password } = formData;
    const userAgent = req.headers.get("user-agent") || "";
    const ip = req.headers.get("x-forwarded-for") || 
               req.headers.get("x-real-ip") || 
               "0.0.0.0";

    if (!emailOrPhone || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Find user first
    const user = await userPrisma.user.findFirst({
      where: {
        OR: [
          { email: emailOrPhone },
          { phone: emailOrPhone }
        ]
      },
      select: {
        name: true,
        id: true,
        role: true,
        phone: true,
        email: true,
        password: true,
        createdBy: true,
        resetToken: true,
        resetTokenExpiry: true,
        createdAt: true,
        updatedAt: true,
        // suspended field removed because it does not exist in schema
      }
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or phone number" },
        { status: 401 }
      );
    }

    // Check account status
    // If you add a suspended field to your schema, uncomment below:
    // if (user.suspended) {
    //   return NextResponse.json(
    //     { message: "Your account has been suspended" },
    //     { status: 403 }
    //   );
    // }

    if (user.role === "terminated") {
      return NextResponse.json(
        { message: "Your account has been terminated" },
        { status: 403 }
      );
    }

    // Verify password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // Get device and location information
    const deviceInfo = detectDevice(userAgent);
    const locationInfo = await getLocationFromIP(ip);
    
    // Generate email template
    const emailTemplate = getLoginAlertTemplate({
      userName: user.name || user.email.split('@')[0],
      deviceType: `${deviceInfo.type} - ${deviceInfo.browser}`,
      location: `${locationInfo.city}, ${locationInfo.country}`,
      ipAddress: ip,
      loginTime: new Date(),
      logoUrl: `https://admin.aoac.in/api/upload/logo.png`, // Make sure this URL is correct
    });

    // Send login notification email
    await sendEmail(
      user.email,
      "Security Alert: New Login Detected",
      emailTemplate
    );

    // Sign in user
    const signInResult = await signIn("credentials", {
      emailOrPhone,
      password,
      redirect: false,
    });

    if (signInResult?.error) {
      throw new Error(signInResult.error);
    }

    return NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing login:", error);
    return NextResponse.json(
      { message: "Login failed" }, 
      { status: 500 }
    );
  }
}