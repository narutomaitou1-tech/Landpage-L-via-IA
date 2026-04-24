import badgeGoogle from "../assets/selo-google.png";
import badgeReclame from "../assets/selo-reclame-aqui.png";
import iconEmail from "../assets/icon-email.png";
import iconWhatsapp from "../assets/icon-whatsapp.png";
import iconPhone from "../assets/icon-telefone.png";
import rodapeFinal from "../assets/rodape.png";

const PHONE_DISPLAY = "(61) 3567-0042";
const PHONE_TEL = "+556135670042";
const WHATSAPP_URL = "https://wa.me/556135670042";

export function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-gray-200 mt-16 bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          <div className="flex justify-center md:justify-start">
            <img
              src={badgeGoogle}
              alt="Excelente no Google"
              className="w-full max-w-[200px] object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

          <div className="flex justify-center">
            <img
              src={badgeReclame}
              alt="Verificado ReclameAQUI"
              className="w-full max-w-[280px] object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3 w-full max-w-[280px]">
              <img src={iconEmail} alt="" className="w-9 h-9 object-contain" />
              <span className="font-semibold text-[#1a1a1a] text-sm">contato@querofaturar.com.br</span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 w-full max-w-[280px] hover:opacity-80 transition-opacity"
            >
              <img src={iconWhatsapp} alt="" className="w-9 h-9 object-contain" />
              <span className="font-semibold text-[#1a1a1a] text-sm">{PHONE_DISPLAY}</span>
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 w-full max-w-[280px] hover:opacity-80 transition-opacity"
            >
              <img src={iconPhone} alt="" className="w-9 h-9 object-contain" />
              <span className="font-semibold text-[#1a1a1a] text-sm">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center border-t border-gray-100 pt-8">
          <img
            src={rodapeFinal}
            alt="Quero Faturar"
            className="w-full max-w-[1000px] h-auto max-h-[80px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
