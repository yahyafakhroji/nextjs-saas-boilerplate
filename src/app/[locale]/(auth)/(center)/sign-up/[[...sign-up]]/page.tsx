import { use } from "react";
import { SignUp } from "@clerk/nextjs";
import { getTranslations } from "next-intl/server";

import { getI18nPath } from "@/utils/Helpers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "SignUp",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function SignUpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  return <SignUp path={getI18nPath("/sign-up", locale)} />;
}
