import s1 from "@/assets/lp/01.jpg";
import s2 from "@/assets/lp/02.jpg";
import s3 from "@/assets/lp/03.jpg";
import s4 from "@/assets/lp/04.jpg";
import s5 from "@/assets/lp/05.jpg";
import s6 from "@/assets/lp/06.jpg";
import s7 from "@/assets/lp/07.jpg";
import s8 from "@/assets/lp/08.jpg";

const WHATSAPP_URL = "https://wa.me/556135670042";
const RECLAME_AQUI_URL = "https://www.reclameaqui.com.br/empresa/quero-faturar/";
const DIATECH_URL = "https://www.diatech.com.br/";
const EMAIL = "contato@querofaturar.com.br";
const PHONE_TEL = "+556135670042";

type Hotspot = {
  top: number;
  left: number;
  width: number;
  height: number;
  href: string;
  ariaLabel: string;
  newTab?: boolean;
};

type NavLink = {
  targetId: string;
  left: number;
  width: number;
  ariaLabel: string;
};

type Section = {
  id: string;
  src: string;
  alt: string;
  background: string;
  hotspots: Hotspot[];
  navLinks?: NavLink[];
  hasLogo?: boolean;
};

const sections: Section[] = [
  {
    id: "topo",
    src: s1,
    alt: "Você pode emitir notas fiscais apenas enviando um áudio no WhatsApp. A Lívia entende e gera no mesmo instante.",
    background: "rgb(243, 244, 243)",
    hasLogo: true,
    navLinks: [
      { targetId: "como-funciona", left: 22.86, width: 16.43, ariaLabel: "Como Funciona" },
      { targetId: "a-livia", left: 41.43, width: 10, ariaLabel: "A Lívia" },
      { targetId: "para-quem-e", left: 53.57, width: 14.29, ariaLabel: "Para quem é" },
      { targetId: "demonstracao", left: 69.29, width: 15, ariaLabel: "Demonstração" },
      { targetId: "pre-lancamento", left: 85.71, width: 12.86, ariaLabel: "Pré Lançamento" },
    ],
    hotspots: [
      {
        top: 84.76,
        left: 20,
        width: 24.3,
        height: 9.52,
        href: WHATSAPP_URL,
        newTab: true,
        ariaLabel: "Entrar no grupo VIP",
      },
    ],
  },
  {
    id: "como-funciona",
    src: s2,
    alt: "Para você, emitir nota fiscal ainda leva tempo demais? Abrir sistema, preencher dados, gerar nota, enviar para o cliente.",
    background: "rgb(234, 233, 234)",
    hotspots: [
      {
        top: 23.33,
        left: 2.14,
        width: 37.86,
        height: 16.67,
        href: WHATSAPP_URL,
        newTab: true,
        ariaLabel: "Entrar no grupo VIP",
      },
    ],
  },
  {
    id: "a-livia",
    src: s3,
    alt: "Agora imagine fazer tudo isso no WhatsApp.",
    background: "rgb(206, 204, 206)",
    hotspots: [
      {
        top: 60.66,
        left: 65.71,
        width: 31.43,
        height: 16.39,
        href: WHATSAPP_URL,
        newTab: true,
        ariaLabel: "Entrar no grupo VIP",
      },
    ],
  },
  {
    id: "para-quem-e",
    src: s4,
    alt: "Tudo o que você precisa para emitir notas pelo WhatsApp. A Lívia conecta sua operação ao sistema da Quero Faturar.",
    background: "rgb(206, 209, 185)",
    hotspots: [],
  },
  {
    id: "tecnologia",
    src: s5,
    alt: "A tecnologia da Quero Faturar já ajuda milhares de empresas. Mais de 12 milhões de notas, 55 mil empresas, R$75 bilhões emitidos.",
    background: "rgb(240, 242, 242)",
    hotspots: [
      {
        top: 4.84,
        left: 62.86,
        width: 34.29,
        height: 16.13,
        href: WHATSAPP_URL,
        newTab: true,
        ariaLabel: "Entrar no grupo VIP",
      },
    ],
  },
  {
    id: "demonstracao",
    src: s6,
    alt: "A Lívia será lançada em breve. Conteúdos exclusivos liberados até o dia do lançamento.",
    background: "rgb(209, 231, 222)",
    hotspots: [
      {
        top: 63.38,
        left: 2.14,
        width: 37.86,
        height: 14.08,
        href: WHATSAPP_URL,
        newTab: true,
        ariaLabel: "Entrar no grupo VIP",
      },
    ],
  },
  {
    id: "pre-lancamento",
    src: s7,
    alt: "Entre no grupo VIP. Veja a Lívia funcionando antes de todo mundo.",
    background: "rgb(210, 227, 214)",
    hotspots: [
      {
        top: 64.86,
        left: 27.86,
        width: 42.14,
        height: 13.51,
        href: WHATSAPP_URL,
        newTab: true,
        ariaLabel: "Entrar no grupo VIP",
      },
    ],
  },
  {
    id: "rodape",
    src: s8,
    alt: "Quero Faturar. Excelente, 1.934 avaliações, verificada por Reclame Aqui. Contato: contato@querofaturar.com.br, (61) 3567-0042.",
    background: "rgb(255, 255, 255)",
    hotspots: [
      {
        top: 7.04,
        left: 27.14,
        width: 27.14,
        height: 32.86,
        href: RECLAME_AQUI_URL,
        newTab: true,
        ariaLabel: "Verificada por Reclame Aqui",
      },
      {
        top: 21.13,
        left: 61.43,
        width: 35.71,
        height: 11.74,
        href: `mailto:${EMAIL}`,
        ariaLabel: `Enviar e-mail para ${EMAIL}`,
      },
      {
        top: 37.56,
        left: 65.71,
        width: 23.57,
        height: 11.74,
        href: `tel:${PHONE_TEL}`,
        ariaLabel: "Telefone (61) 3567-0042",
      },
      {
        top: 56.34,
        left: 65.71,
        width: 23.57,
        height: 11.74,
        href: WHATSAPP_URL,
        newTab: true,
        ariaLabel: "WhatsApp (61) 3567-0042",
      },
      {
        top: 75.12,
        left: 45,
        width: 17.86,
        height: 9.39,
        href: "/politica-de-privacidade",
        ariaLabel: "Política de Privacidade",
      },
      {
        top: 72.77,
        left: 84.29,
        width: 12.86,
        height: 14.08,
        href: DIATECH_URL,
        newTab: true,
        ariaLabel: "Site da Diatech Sistemas",
      },
    ],
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function HotspotLink({ hotspot }: { hotspot: Hotspot }) {
  return (
    <a
      href={hotspot.href}
      target={hotspot.newTab ? "_blank" : undefined}
      rel={hotspot.newTab ? "noopener noreferrer" : undefined}
      aria-label={hotspot.ariaLabel}
      className="absolute rounded-md transition-colors hover:bg-white/10 active:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      style={{
        top: `${hotspot.top}%`,
        left: `${hotspot.left}%`,
        width: `${hotspot.width}%`,
        height: `${hotspot.height}%`,
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="relative w-full"
          style={{ backgroundColor: section.background }}
        >
          <img
            src={section.src}
            alt={section.alt}
            className="block w-full h-auto select-none"
            draggable={false}
            loading={section.id === "topo" ? "eager" : "lazy"}
            style={{ pointerEvents: "none" }}
          />

          {section.hasLogo && (
            <a
              href="#topo"
              aria-label="Quero Faturar — Início"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="absolute transition-opacity hover:opacity-70"
              style={{
                top: "1.9%",
                left: "1.43%",
                width: "20%",
                height: "6.67%",
              }}
            />
          )}

          {section.navLinks?.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.targetId);
              }}
              aria-label={link.ariaLabel}
              className="absolute transition-opacity hover:opacity-70"
              style={{
                top: "2.86%",
                left: `${link.left}%`,
                width: `${link.width}%`,
                height: "5.71%",
              }}
            />
          ))}

          {section.hotspots.map((hotspot, i) => (
            <HotspotLink key={i} hotspot={hotspot} />
          ))}
        </section>
      ))}
    </div>
  );
}
