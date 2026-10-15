import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanvir Farhad | Security Engineer",
  description:
    "Security engineer building cloud posture, detection engineering, and AI threat tools. #2 contributor on OpenShield (OWASP). Founder of RetailShield.",
  openGraph: {
    title: "Tanvir Farhad | Security Engineer",
    description: "Cloud security, detection engineering, AI threat tools. London, UK.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
