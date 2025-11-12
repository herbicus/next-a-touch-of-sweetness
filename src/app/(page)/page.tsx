// src/app/(page)/page.tsx

import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

import { Homepage } from "@/templates/Homepage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "A Touch of Sweetness",
  description: "Handmade cakes and desserts for your special occasions",
  openGraph: {
    title: "A Touch of Sweetness",
    description: "Handmade cakes and desserts for your special occasions",
    images: ["/images/meta/social-share-1200x628.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Touch of Sweetness",
    description: "Handmade cakes and desserts for your special occasions",
    images: ["/images/meta/social-share-1200x628.png"],
  },
};

export default async function Page() {
  const { data: homepage } = await sanityFetch({
    query: HOMEPAGE_QUERY,
  });

  return <Homepage sections={homepage?.sections} />;
}
