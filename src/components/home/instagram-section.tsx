import Image from 'next/image';

// Replace with actual Instagram photos when available
const photos = [
  { src: '/images/yellow_grass.jpg', alt: 'Instagram foto 1' },
  { src: '/images/green_hand_with_leaves.jpg', alt: 'Instagram foto 2' },
  { src: '/images/yellow_grass.jpg', alt: 'Instagram foto 3' },
];

export function InstagramSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/yellow_grass.jpg")', minHeight: '727px' }}
    >
      {/* Overlay */}
      <div className="bg-primary absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center py-14 text-white">
        {/* Heading */}
        <div className="mb-12 flex items-center gap-4">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <div>
            <p className="text-[40px] leading-13.5 font-semibold">Sledujte nás</p>
            <p className="text-base leading-6.5">@vedome.cz</p>
          </div>
        </div>

        {/* Photos */}
        <div className="mb-12 flex flex-wrap justify-center gap-25">
          {photos.map((photo) => (
            <div
              key={photo.alt}
              className="relative h-80 w-80 shrink-0 overflow-hidden rounded-[40px]"
            >
              {/* TODO - change this when actual Instagram photos are available */}
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="https://instagram.com/vedome.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border-2 border-white px-8 py-2 text-base leading-6.5 font-bold text-white transition-colors hover:bg-white/10"
        >
          Přejít na
        </a>
      </div>
    </section>
  );
}
