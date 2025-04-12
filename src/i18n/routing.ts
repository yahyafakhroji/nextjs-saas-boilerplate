import { defineRouting } from "next-intl/routing";

import { AllLocales, AppConfig } from "@/utils/AppConfig";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: AllLocales,

  // Used when no locale matches
  defaultLocale: AppConfig.defaultLocale,
});
