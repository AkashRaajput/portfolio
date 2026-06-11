"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrolls to top on route change.
 * Avoid AnimatePresence on root layout children — it causes blank pages with the App Router.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return <>{children}</>;
}
