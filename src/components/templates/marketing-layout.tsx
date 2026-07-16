import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ScrollToTop } from "@/components/molecules/scroll-to-top";
import { SkipToContent } from "@/components/atoms/skip-to-content";
import { Toaster } from "@/components/ui/sonner";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="relative z-10 flex-1 pt-16" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}
