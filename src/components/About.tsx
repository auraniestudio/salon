const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[600px] shadow-lg">
            <img
              src={ABOUT_IMAGE}
              alt="Salon atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              Your happy place for hair & beauty
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We’re not your average salon — we’re the spot where you come to play with your look
              and leave feeling amazing. Our team lives for this stuff: premium products, good vibes,
              and a relaxing atmosphere that actually lets you unwind.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              We take the time to listen and tailor every visit to you. Whether it’s a quick trim,
              a bold new color, or a full glow-up, we’re here for it. Come as you are; we’ll take
              care of the rest.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Your best hair day (and nail day, and skin day) is waiting. Let’s make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
