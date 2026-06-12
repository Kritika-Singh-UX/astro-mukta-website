import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  name: string;
  title: string;
}

export default function ProfileImage({ src, alt, name, title }: ProfileImageProps) {
  return (
    <div className="relative group">
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 rounded-[2.5rem] blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-90"
        style={{ background: 'var(--hero-glow)' }}
      />

      {/* Offset hairline frame */}
      <div
        className="absolute -inset-3 rounded-3xl border transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
        style={{ borderColor: 'var(--hairline)' }}
        aria-hidden="true"
      />

      {/* Image */}
      <figure
        className="relative w-64 h-72 sm:w-80 sm:h-96 xl:w-96 xl:h-[28rem] rounded-2xl overflow-hidden transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
        style={{
          backgroundColor: 'var(--bg-3)',
          boxShadow: 'var(--portrait-shadow)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 384px, (min-width: 640px) 320px, 256px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Caption */}
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pt-12 pb-4 text-center">
          <p className="font-display text-lg" style={{ color: '#e6dfd0' }}>{name}</p>
          <p className="text-[0.65rem] uppercase tracking-[0.25em] mt-1" style={{ color: '#b5aea1' }}>
            {title}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
