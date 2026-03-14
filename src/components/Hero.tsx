import { SALON_NAME, FRESHA_BOOKING_URL } from '../config';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury beauty salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-4 animate-fade-in">
          {SALON_NAME}
        </h1>
        <p className="font-sans text-lg sm:text-xl text-white/95 font-light tracking-wide mb-10 animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
        Self-care looks good on you
        </p>
        <a
          href={FRESHA_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full bg-white text-charcoal font-medium text-sm tracking-wide hover:bg-peach hover:scale-105 active:scale-100 transition-all duration-300 animate-fade-in [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]"
        >
          Let's book! ✨
        </a>
      </div>

    
    </section>
  );
}
