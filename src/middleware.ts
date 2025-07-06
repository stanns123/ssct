// src/middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Extend the User type to include 'role'
declare module "next-auth" {
  interface User {
    role?: string;
  }
}

// Define public routes
const publicRoutes = [
  "/auth",
  "/api/auth"
];

// Define authentication routes
const authRoutes = [
  "/auth/login",
  "/auth/register",
];

// Define role-based route permissions
const roleBasedRoutes: Record<string, string[]> = {
  "/dashboard/users": ["admin"],
  "/dashboard/users/add": ["admin"],
  "/dashboard/products/category": ["admin" , "manager"],
  "/dashboard/products/add": ["admin" , "manager"],
  "/dashboard/products/edit": ["admin" , "manager"],
  "/dashboard/products/discounts": ["admin" , "manager"],
  "/dashboard/customer": ["admin" , "manager"],
};

export async function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  // Skip middleware for public assets and Next.js internals
  if (
    pathname.includes('.') ||
    pathname.startsWith('/_next')
  ) {
    return;
  }

  // Skip middleware for /api/auth routes
  if (pathname.startsWith('/api')) {
    return;
  }

  const session = await auth();
  const isAuthenticated = !!session;
  const userRole = session?.user?.role;

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  // Handle authentication logic
  if (isAuthenticated) {
    // Check role-based access for protected routes
    const requiredRoles = roleBasedRoutes[pathname] as string[];
    if (requiredRoles && (!userRole || !requiredRoles.includes(userRole))) {
      return NextResponse.redirect(new URL('/dashboard/unauthorized', request.url));
    }

    // If authenticated user tries to access auth routes, redirect to dashboard
    if (authRoutes.some(route => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
  } else {
    // If unauthenticated user tries to access private routes, redirect to login
    if (!isPublicRoute) {
      const redirectUrl = new URL('/auth/login', request.url);
      redirectUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/api/:path*'
  ],
};