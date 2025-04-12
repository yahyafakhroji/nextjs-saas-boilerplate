"use client";

import { use } from "react";
import { enUS, frFR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import { AppConfig } from "@/utils/AppConfig";

export default function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  let clerkLocale = enUS;
  let signInUrl = "/sign-in";
  let signUpUrl = "/sign-up";
  let dashboardUrl = "/dashboard";
  let afterSignOutUrl = "/";

  if (locale === "fr") {
    clerkLocale = frFR;
  }

  if (locale !== AppConfig.defaultLocale) {
    signInUrl = `/${locale}${signInUrl}`;
    signUpUrl = `/${locale}${signUpUrl}`;
    dashboardUrl = `/${locale}${dashboardUrl}`;
    afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
  }

  return (
    <ClerkProvider
      // PRO: Dark mode support for Clerk
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      {children}
    </ClerkProvider>
  );
}
