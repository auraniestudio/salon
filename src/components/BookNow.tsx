import { FRESHA_BOOKING_URL } from '../config';

export function BookNow() {
  return (
    <section id="book" className="py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg border border-sand/30 p-10 md:p-14 text-center hover:shadow-xl hover:border-coral/20 transition-all duration-300">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            Your chair is waiting!
          </h2>
          <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
            Book in a few clicks — we can’t wait to see you.
          </p>
          <a
            href={FRESHA_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-coral text-white font-medium hover:bg-rose transition-colors duration-300 hover:scale-105"
          >
            Book via Fresha
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
