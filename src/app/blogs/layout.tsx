// src/app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Roofing Tips for Georgetown & Central Texas Homeowners",
  description: "Practical advice on roof replacement, repair, maintenance, and storm damage restoration for homeowners in Georgetown and Central Texas.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}