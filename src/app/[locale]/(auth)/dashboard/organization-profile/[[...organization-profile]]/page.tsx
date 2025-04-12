import { use } from "react";
import { OrganizationProfile } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

import { TitleBar } from "@/features/dashboard/TitleBar";
import { getI18nPath } from "@/utils/Helpers";

export default function OrganizationProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("OrganizationProfile");

  return (
    <>
      <TitleBar title={t("title_bar")} description={t("title_bar_description")} />

      <OrganizationProfile
        routing="path"
        path={getI18nPath("/dashboard/organization-profile", locale)}
        afterLeaveOrganizationUrl="/onboarding/organization-selection"
        appearance={{
          elements: {
            rootBox: "mx-auto",
          },
        }}
      />
    </>
  );
}
