import { Sparkles } from 'lucide-react'

export function Collections() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <h3
          className="text-4xl md:text-5xl font-light text-center mb-16"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          What{"'"}s Coming
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Couture Collections',
              description: 'Hand-selected pieces that define modern elegance',
            },
            {
              title: 'Sustainable Luxury',
              description: 'Ethical craftsmanship meets timeless design',
            },
            {
              title: 'Signature Styles',
              description: 'Express your unique aesthetic with our curated range',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{
                animation: `slideUp ${0.8 + idx * 0.1}s ease-out`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />

              {/* Placeholder for image */}
              <div className="h-72 bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-sm overflow-hidden group-hover:border-primary/50 transition-colors duration-300 flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-primary/30 group-hover:border-primary transition-all duration-300 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <h4 className="text-xl font-light text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
