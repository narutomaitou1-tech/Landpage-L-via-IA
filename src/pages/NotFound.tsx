import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-emerald-50 px-6 text-center">
      <p className="text-emerald-600 font-semibold mb-2">404</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Página não encontrada
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        A página que você procura não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-white font-medium hover:bg-emerald-600 transition-colors"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
