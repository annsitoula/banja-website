// Hero.jsx

import heroImage from "../assets/hero.webp";
import logoWhite from "../assets/logo-white.svg"; // ← Verificá que este archivo exista en src/assets

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Logo blanco */}
      <div className="absolute top-6 left-6 z-10">
        <img
          src={logoWhite}
          alt="Logo Banja blanco"
          className="h-16 w-auto"
        />
      </div>

      {/* Frase central */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold font-[Poppins] leading-tight">
          Hacemos magia.<br />Pero con brief.
        </h1>
      </div>
    </section>
  );
}
