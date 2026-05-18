"use client";

import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Animations } from "@/components/animations";
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Animations />
      <div className="relative w-screen h-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://ik.imagekit.io/kimhabork/assets/portrait-bg.png"
            className="w-full h-full object-fit md:hidden lg:hidden opacity-60"
            fill
            alt="background image"
            priority
          />
          <Image
            src="https://ik.imagekit.io/kimhabork/assets/landscape-bg.png"
            className="w-full h-full object-fit hidden md:block lg:block opacity-60"
            fill
            alt="background image"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
