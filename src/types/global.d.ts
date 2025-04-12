import type { OrgPermission, OrgRole } from "@/types/Auth";

// Use type safe message keys with `next-intl`
type Messages = typeof import("../locales/en.json");

declare type IntlMessages = Messages;

declare global {
  interface ClerkAuthorization {
    permission: OrgPermission;
    role: OrgRole;
  }
}
