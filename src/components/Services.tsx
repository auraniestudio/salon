const services = [
  {
    title: 'Hair Styling',
    description: 'Cuts, blowouts & the works — we’ve got you.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Hair Coloring',
    description: 'Color that turns heads. Highlights, balayage & more.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Manicure & Pedicure',
    description: 'Nails done, mood up. Premium care & polish.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Facial Treatments',
    description: 'Glow-up facials & skincare that actually relaxes you.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal text-center mb-4">
         our services
        </h2>
        <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-16">
          Hair styling, coloring, manicure, pedicure, and facial treatments.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-sand/30 hover:shadow-xl hover:border-coral/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-coral mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
