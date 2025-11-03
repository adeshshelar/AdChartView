"use client";

import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import ToastContainer from "@/components/ToastContainer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { initOneSignal } from "@/lib/onesignal";

export const metadata: Metadata = {
  title: "AdChartView",
  description: "Premium stock tips and advisory platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initOneSignal(); // 👈 OneSignal initialized on page load
  }, []);

  return (
    <html lang="en" className="dark">
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
          <ToastContainer />
        </SessionWrapper>
      </body>
    </html>
  );
}
