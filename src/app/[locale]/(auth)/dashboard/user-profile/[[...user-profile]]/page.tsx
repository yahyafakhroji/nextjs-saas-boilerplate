import { use } from "react";
import { UserProfile } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

import { TitleBar } from "@/features/dashboard/TitleBar";
import { getI18nPath } from "@/utils/Helpers";

export default function UserProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations("UserProfile");

  return (
    <>
      <TitleBar title={t("title_bar")} description={t("title_bar_description")} />

      <UserProfile
        routing="path"
        path={getI18nPath("/dashboard/user-profile", locale)}
        appearance={{
          elements: {
            rootBox: "mx-auto",
          },
        }}
      />
    </>
  );
}
