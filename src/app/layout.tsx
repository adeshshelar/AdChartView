import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import ToastContainer from "@/components/ToastContainer";
import Navbar from "@/components/Navbar";
import ClientOneSignal from "@/components/ClientOneSignal"; // 👈 new client component

export const metadata: Metadata = {
  title: "AdChartView",
  description: "Premium stock tips and advisory platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
          <ClientOneSignal /> {/* 👈 client component handles OneSignal init */}
          <ToastContainer />
        </SessionWrapper>
      </body>
    </html>
  );
}
