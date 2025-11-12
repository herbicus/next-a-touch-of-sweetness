import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/Preview/DisableDraftMode";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";

import { DialogProvider } from "@/context/DialogContext";
import { ScrollProvider } from "@/context/ScrollContext";

import Header from "@/components/Navigation/Header/Header";
import Footer from "@/components/Navigation/Footer";

interface SitePreviewLayoutProps {
  children: React.ReactNode;
}

export async function SitePreviewLayout({ children }: SitePreviewLayoutProps) {
  // fpo nav items
  const navItems = [
    { name: "Cakes", value: "#cakes" },
    { name: "Gallery", value: "#gallery" },
    { name: "Services", value: "#services" },
    { name: "Contact", value: "#contact" },
  ];

  return (
    <ScrollProvider>
      <DialogProvider>
        <Header navItems={navItems} />

        <main className="relative">
          {children}

          <SanityLive />
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
        </main>

        <Footer navItems={navItems} />
      </DialogProvider>
    </ScrollProvider>
  );
}
