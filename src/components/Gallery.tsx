const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
  'https://images.unsplash.com/photo-1622287162716-f311baa18f2e?w=600&q=80',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80',
  'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80',
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-sand/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal text-center mb-4">
          Look good, feel good
        </h2>
        <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-16">
          A little peek at the looks and good times we create every day.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Salon gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
