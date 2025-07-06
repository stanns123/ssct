import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authantication | AOAC Admin Panel",
  description: "This is the AOAC Admin Panel Authantication section",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
