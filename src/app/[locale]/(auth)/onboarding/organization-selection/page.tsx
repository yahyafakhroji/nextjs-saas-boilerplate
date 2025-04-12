import { OrganizationList } from "@clerk/nextjs";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Dashboard",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const OrganizationSelectionPage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <OrganizationList
      afterSelectOrganizationUrl="/dashboard"
      afterCreateOrganizationUrl="/dashboard"
      hidePersonal
      skipInvitationScreen
    />
  </div>
);

export const dynamic = "force-dynamic";

export default OrganizationSelectionPage;
