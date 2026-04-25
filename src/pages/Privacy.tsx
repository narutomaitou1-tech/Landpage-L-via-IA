import { Link } from "wouter";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
        >
          ← Voltar para o início
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Última atualização: 25 de abril de 2026
        </p>

        <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Quem somos
            </h2>
            <p>
              A Quero Faturar é uma plataforma brasileira de emissão de notas
              fiscais eletrônicas. Esta política descreve como coletamos,
              usamos e protegemos seus dados ao acessar nosso site e utilizar
              nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Dados que coletamos
            </h2>
            <p>
              Podemos coletar dados de contato (nome, e-mail, telefone), dados
              fiscais necessários para emissão de notas e informações de
              navegação anônimas (cookies de sessão e analytics) para melhorar
              a experiência no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Como usamos seus dados
            </h2>
            <p>
              Usamos seus dados exclusivamente para prestar o serviço
              contratado, enviar comunicações sobre o lançamento da Lívia e
              cumprir obrigações legais e fiscais. Nunca vendemos ou cedemos
              seus dados a terceiros para fins comerciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Seus direitos (LGPD)
            </h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018),
              você pode a qualquer momento solicitar acesso, correção ou
              exclusão dos seus dados, bem como revogar consentimentos
              concedidos. Basta entrar em contato pelos canais abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Contato
            </h2>
            <p>
              E-mail:{" "}
              <a
                href="mailto:contato@querofaturar.com.br"
                className="text-emerald-600 hover:text-emerald-700"
              >
                contato@querofaturar.com.br
              </a>
              <br />
              Telefone: (61) 3567-0042
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
