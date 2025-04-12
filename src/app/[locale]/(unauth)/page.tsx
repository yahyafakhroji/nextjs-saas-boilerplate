import { getTranslations } from "next-intl/server";

import { CTA } from "@/templates/CTA";
import { FAQ } from "@/templates/FAQ";
import { Features } from "@/templates/Features";
import { Footer } from "@/templates/Footer";
import { Hero } from "@/templates/Hero";
import { Navbar } from "@/templates/Navbar";
import { Pricing } from "@/templates/Pricing";
import { Sponsors } from "@/templates/Sponsors";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const IndexPage = async () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default IndexPage;
