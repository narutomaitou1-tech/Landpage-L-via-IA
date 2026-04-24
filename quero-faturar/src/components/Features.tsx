import { FileText, Search, Eye, CreditCard, Plug, Gift, Mic } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Emissão completa de notas",
    desc: "Emite NF-e, NFS-e e NFC-e direto pelo WhatsApp, sem precisar acessar o sistema.",
  },
  {
    icon: Search,
    title: "Consulta automática de produtos",
    desc: "A Lívia consulta os produtos já cadastrados no seu sistema Quero Faturar e usa essas informações para emitir a nota corretamente.",
  },
  {
    icon: Eye,
    title: "Revisão antes de emitir",
    desc: "Permite visualizar a nota antes da emissão e cancelar caso seja necessário.",
  },
  {
    icon: CreditCard,
    title: "Cobrança integrada",
    desc: "Para clientes com integração ativa, a Lívia envia link de pagamento por Pix ou boleto junto com a nota.",
  },
  {
    icon: Plug,
    title: "Conectada ao seu sistema",
    desc: "Basta cadastrar seu número do WhatsApp na Quero Faturar para começar a usar.",
  },
  {
    icon: Gift,
    title: "Teste disponível",
    desc: "Durante o período inicial, o uso da Lívia é liberado sem custo. Após isso, é necessário contratar o módulo.",
  },
  {
    icon: Mic,
    title: "Comando de voz",
    desc: "Você pode emitir notas fiscais apenas enviando um áudio no WhatsApp. A Lívia entende e gera a nota automaticamente.",
  },
];

export function Features() {
  return (
    <section className="scroll-mt-32 py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">
            Tudo o que você precisa para emitir notas pelo WhatsApp
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Lívia conecta sua operação ao sistema da Quero Faturar e cuida de todo o processo de emissão, de forma simples e segura.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#5b8def] to-[#7b6cf6] p-5 flex flex-col items-center text-center">
                <div className="text-white mb-3 bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white text-xs font-bold uppercase tracking-widest leading-tight">
                  {title}
                </h3>
              </div>
              <div className="p-5 flex-grow bg-white flex flex-col justify-start">
                <p className="text-xs text-gray-600 font-medium leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
