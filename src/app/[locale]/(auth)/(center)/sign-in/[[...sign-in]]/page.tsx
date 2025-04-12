import { use } from "react";
import { SignIn } from "@clerk/nextjs";
import { getTranslations } from "next-intl/server";

import { getI18nPath } from "@/utils/Helpers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "SignIn",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function SignInPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}
