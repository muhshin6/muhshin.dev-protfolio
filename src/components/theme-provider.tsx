"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "@teispace/next-themes";

export function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      storageKey="portfolio-theme"
    >
      {children}
    </NextThemesProvider>
  );
}