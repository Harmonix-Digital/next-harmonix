"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 200,
    });
    AOS.refresh(); // 👈 ensures recalculation
  }, []);

  return null; // nothing to render
}
