import painImg from "../assets/tempo-emissao.png";
import buttonImg from "../assets/btn-teste-agora.png";

const WHATSAPP_URL = "https://wa.me/556135670042";

export function Pain() {
  return (
    <section id="como-funciona" className="scroll-mt-32 py-12 md:py-16 lg:py-20 mt-12">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="panel-mint rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col items-center gap-10 border border-[#d3ecd9] shadow-sm">
          <img
            src={painImg}
            alt="Emitir nota fiscal ainda leva tempo demais?"
            className="w-full max-w-[1200px] rounded-2xl float-soft object-contain shadow-sm"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-block transition-transform duration-200 hover:scale-[1.05]"
          >
            <img
              src={buttonImg}
              alt="Teste agora mesmo"
              className="max-h-[80px] float-soft-2 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
