import phoneImg from "@/assets/conversa-exemplo.png";
import buttonImg from "@/assets/btn-teste-agora.png";

const WHATSAPP_URL = "https://wa.me/556135670042";

export function Solution() {
  return (
    <section id="livia" className="scroll-mt-32 py-12 md:py-16 lg:py-20 mt-12">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="panel-mint rounded-[32px] p-6 md:p-10 lg:p-14 border border-[#d3ecd9] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <img
                src={phoneImg}
                alt="Exemplo de conversa no WhatsApp com a Lívia"
                className="w-full max-w-[360px] md:max-w-[420px] object-contain float-soft drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-col items-start gap-6 order-1 lg:order-2 lg:pl-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-[#1a1a1a] leading-[1.05]">
                Agora imagine fazer tudo isso no <span className="text-[#7CC242]">WhatsApp</span>.
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-medium max-w-xl leading-relaxed">
                Você manda um áudio. A Lívia entende, gera a nota fiscal, envia o PDF e o link de pagamento — tudo em segundos, sem sair do WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-block transition-transform duration-200 hover:scale-[1.05] mt-2"
              >
                <img
                  src={buttonImg}
                  alt="Teste agora mesmo"
                  className="max-h-[80px] float-soft-2 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
