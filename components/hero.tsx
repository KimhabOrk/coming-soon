import { Newsletter } from "@/components/newsletter";
import Image from "next/image";

export function Hero() {
  return (
    <main className="relative z-10 min-h-screen px-4 py-8">
      {/* Logo/Brand section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 mb-16">
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="flex justify-center items-center mx-auto h-full">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
              width={1200}
              height={276}
              alt="Logo image"
              priority
              className="h-full w-full object-cover mb-3 md:mb-8"
            />
          </div>
            {/* Main heading */}
            <div className="max-w-6xl mx-auto text-center space-y-4">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white"
                style={{
                  animation: "fadeInUp 1s ease-out",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                <span className="block">Something</span>
                <span className="block">
                  <span className="text-primary inline-block animate-shimmer">
                    Exquisite
                  </span>
                </span>
                <span className="block">is Coming</span>
              </h2>

              <p
                className="text-sm md:text-md text-gray-300 font-light leading-relaxed max-w-4xl mx-auto uppercase tracking-[0.15em]"
                style={{
                  animation: "fadeInUp 1.2s ease-out",
                }}
              >
                Affordable Luxury Fashion
              </p>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto md:p-3 lg:p-6 w-full hidden md:block lg:block">
          <div className="flex items-center justify-center w-full aspect-[4/5] rounded-xl">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/coming-cover.jpg"
              alt="hero image"
              fill
              priority
              className="object-cever w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* Newsletter form */}
      <div className="flex justify-center items-center mx-auto">
        <Newsletter />
      </div>
    </main>
  );
}
