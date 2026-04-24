import finalCtaImg from "@/assets/cta-final.png";

const WHATSAPP_URL = "https://wa.me/556135670042";

export function FinalCTA() {
  return (
    <section className="bg-[#fdf6f7] py-12 md:py-20 rounded-[32px] overflow-hidden mt-12">
      <div className="w-full max-w-7xl mx-auto flex justify-center px-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="w-full block"
        >
          <img
            src={finalCtaImg}
            alt="Fale com a Lívia agora mesmo no WhatsApp"
            className="w-full object-cover rounded-[32px] float-soft-slow transition-transform duration-200 hover:scale-[1.02]"
          />
        </a>
      </div>
    </section>
  );
}
