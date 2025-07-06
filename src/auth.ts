import NextAuth, { Session, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userPrisma } from "@/lib/db";
import { compare } from "bcryptjs";

interface CustomUser {
  name: string;
  phone: string;
  email: string;
  role: string;
  id: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        emailOrPhone: { label: "Email or Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const emailOrPhone = credentials.emailOrPhone as string | undefined;
        const password = credentials.password as string | undefined;

        if (!emailOrPhone || !password) {
          throw new Error("Please provide both email & password");
        }

        // Use Prisma to find the user
        const user = await userPrisma.user.findFirst({
          where: {
            OR: [{ email: emailOrPhone }, { phone: emailOrPhone }],
          },
        });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not match");
        }

        // Ensure the returned object matches the CustomUser type
        const userResponse: CustomUser = {
          name: user.name,
          phone: user.phone,
          email: user.email,
          role: user.role,
          id: user.id,
        };

        return userResponse;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: Record<string, unknown> }) {
      // Ensure session.user exists
      if (!session.user) session.user = {} as User;
      if (typeof token.sub === 'string') (session.user as User & { id?: string }).id = token.sub;
      if (typeof token.phone === 'string') (session.user as User & { phone?: string }).phone = token.phone;
      if (typeof token.role === 'string') (session.user as User & { role?: string }).role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as CustomUser;
        token.phone = customUser.phone;
        token.role = customUser.role;
      }
      return token;
    },
  },
});
