import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Ironclad Roofing Co.",
  description: "How we collect, use, and protect your information at Ironclad Roofing Co. in Georgetown, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}