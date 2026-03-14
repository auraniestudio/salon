import { SALON_NAME, OPENING_HOURS, FRESHA_BOOKING_URL } from '../config';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">{SALON_NAME}</h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Your happy place for hair & beauty. Book your spot and come play.
            </p>
            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-2.5 rounded-full bg-coral text-white text-sm font-medium hover:bg-rose transition-colors"
            >
              Book now
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Opening hours</h3>
            <ul className="space-y-2 text-sm text-cream/80">
              {OPENING_HOURS.map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-cream/80 hover:text-cream transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-cream/80 hover:text-cream transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="text-cream/80 hover:text-cream transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-cream/80 hover:text-cream transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/20 text-center text-sm text-cream/60">
          © {new Date().getFullYear()} {SALON_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
