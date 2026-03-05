import { Newsletter } from "@/components/newsletter";
import Image from "next/image";
import { AuroraText } from "@/components/aurora";

export function Hero() {
  return (
    <>
      <style>{`
        @keyframes aurora {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        /* The animation duration is now set via inline styles, so we don't need the --duration variable here. */
        .animate-aurora {
          animation-name: aurora;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-aurora { animation: none; }
        }
      `}</style>
      
    <main className="relative z-10 min-h-screen h-screen px-4 md:px-20 lg:px-24 pt-18 md:pt-16">
      {/* Logo/Brand section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center my-8 md:my-16">
        <div className="relative flex items-center justify-center mx-auto hidden md:block lg:block">
          <div className="flex items-center justify-center w-full aspect-[4/5]">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/coming-soon.jpg"
              alt="hero image"
              width={198}
              height={2348}
              priority
              className="object-cever w-full h-auto"
            />
          </div>
        </div>
        <div className="relatuive flex flex-col items-center justify-center mx-auto">
          <div className="flex justify-center items-center mx-auto w-full h-auto">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
              width={800}
              height={194}
              alt="Logo image"
              priority
              className="h-auto w-full object-cover mb-3 md:mb-6"
            />
          </div>
            {/* Main heading */}
            <div className="w-full mx-auto justify-center items-center text-center space-y-4">
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight"
                style={{
                  animation: "fadeInUp 1s ease-out",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                <AuroraText speed={1} colors={["#38BDF8", "#1A1EED", "#EE1A4E"]}>
                  Coming Soon
                </AuroraText>
              </h2>

              <p
                className="text-sm md:text-lg text-gray-300 font-light leading-tight mx-auto pt-2 md:pt-4 uppercase"
                style={{
                  animation: "fadeInUp 1.2s ease-out",
                }}
              >
                Affordable Luxury Womenswear
              </p>
          </div>
          <div className="flex justify-center items-center mx-auto hidden md:block lg:block mt-6 pt-6">
            <Newsletter />
          </div>
        </div>
      </div>
      {/* Newsletter form */}
      <div className="flex justify-center items-center mx-auto md:hidden lg:hidden">
        <Newsletter />
      </div>
    </main>
    </>
  );
}
