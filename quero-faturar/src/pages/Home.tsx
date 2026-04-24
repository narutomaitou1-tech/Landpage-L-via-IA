import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { Pain } from "@/components/Pain";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#livia", label: "A Lívia" },
  { href: "#demonstracao", label: "Demonstração" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#fdf6f7] overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf6f7]/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-[1400px]">
          <div className="flex items-center gap-2">
            <div className="text-[#1a1a1a] font-extrabold text-2xl tracking-tight flex items-center gap-1">
              Quero<span className="text-[#7CC242] italic">Faturar!</span>
            </div>
            <div className="text-[10px] font-bold text-gray-500 tracking-widest mt-1 ml-2 hidden sm:block">
              NOTA FISCAL ELETRÔNICA
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 space-y-4">
                {NAV_LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-gray-800 pb-2 border-b border-gray-50"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-28 pb-10 px-4 md:px-6 lg:px-8 container mx-auto max-w-[1400px]">
        <Hero />
        <Pain />
        <Solution />
        <Features />
        <Stats />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
