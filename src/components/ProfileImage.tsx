interface ProfileImageProps {
  src: string;
  alt: string;
  name: string;
  title: string;
}

export default function ProfileImage({ src, alt, name, title }: ProfileImageProps) {
  return (
    <div className="relative group">
      {/* Subtle shadow backdrop */}
      <div className="absolute -inset-2 bg-gradient-to-br from-purple-100/20 to-purple-200/10 rounded-2xl blur-sm opacity-60"></div>
      
      {/* Main image container */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-2 glass-card shadow-lg transition-transform duration-300 group-hover:scale-105" style={{borderColor: 'var(--primary)', backgroundColor: 'var(--surface)'}}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.parentElement;
            if (fallback) {
              fallback.innerHTML = `
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background-color: var(--secondary-light)">
                      <span class="text-2xl">👨‍🏫</span>
                    </div>
                    <p class="text-sm font-medium" style="color: var(--on-secondary)">${name}</p>
                  </div>
                </div>
              `;
            }
          }}
        />
        
        {/* Image caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-sm font-medium text-center">
            {name}
          </p>
          <p className="text-white/80 text-xs text-center mt-1">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}