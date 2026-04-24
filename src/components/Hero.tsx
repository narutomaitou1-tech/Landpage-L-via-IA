import heroImg from "../assets/hero-livia.png";

export function Hero() {
  return (
    <section className="bg-[#fdf6f7] py-12 md:py-20 rounded-[32px] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex justify-center">
        <img
          src={heroImg}
          alt="A Lívia entende seu áudio no WhatsApp e gera a nota fiscal no mesmo instante"
          className="w-full object-cover rounded-[32px] float-soft-slow"
        />
      </div>
    </section>
  );
}
