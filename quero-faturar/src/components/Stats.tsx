import videoImg from "@/assets/capa-video.png";
import statsImg from "@/assets/numeros.png";
import buttonImg from "@/assets/btn-contato.png";

const WHATSAPP_URL = "https://wa.me/556135670042";

export function Stats() {
  return (
    <section id="demonstracao" className="scroll-mt-32 py-12 md:py-16 lg:py-20 mt-12">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="panel-mint rounded-[32px] p-6 md:p-10 lg:p-14 flex flex-col items-center gap-10 border border-[#d3ecd9] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
            <button
              type="button"
              aria-label="Assistir demonstração"
              className="w-full block hover:opacity-95 transition-opacity"
            >
              <img
                src={videoImg}
                alt="Vídeo de demonstração"
                className="w-full max-w-[600px] mx-auto rounded-3xl object-contain float-soft drop-shadow-xl"
              />
            </button>

            <img
              src={statsImg}
              alt="Números do Quero Faturar"
              className="w-full max-w-[600px] mx-auto rounded-3xl object-contain float-soft-2"
            />
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-block transition-transform duration-200 hover:scale-[1.05]"
          >
            <img
              src={buttonImg}
              alt="Entre em contato"
              className="max-h-[80px] float-soft-3 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
