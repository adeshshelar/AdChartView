"use client";

import { useEffect } from "react";
import { initOneSignal } from "@/lib/onesignal";

export default function ClientOneSignal() {
  useEffect(() => {
    initOneSignal();
  }, []);

  return null;
}
