import type { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "West Papua Media Watch - Analytics Report",
  description:
    "Comprehensive media and AI sentiment analysis for PILFM 54th, Benny Wenda, ULMWP, PIF Summit, FreeWestPapua, and West Papua Crisis — powered by BrandMentions data.",
  keywords:
    "PILFM 54th, Benny Wenda, ULMWP, PIF Summit, FreeWestPapua, Rise of the Morning Star Flag, Forum communique PIF, West Papua, West Papua Crisis, West Papua and Kanaky, PNG's 50th Independence Day, Indonesia's Vice President visit, Free West Papua",
  openGraph: {
    title: "West Papua Media Watch - Analytics Report",
    description:
      "Comprehensive media and AI sentiment analysis for PILFM 54th, Benny Wenda, ULMWP, PIF Summit, FreeWestPapua, and West Papua Crisis — powered by BrandMentions data.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Papua Media Watch - Analytics Report",
    description:
      "Comprehensive media and AI sentiment analysis for PILFM 54th, Benny Wenda, ULMWP, PIF Summit, FreeWestPapua, and West Papua Crisis — powered by BrandMentions data.",
  },
}

export default function Home() {
  return <ClientPage />
}
