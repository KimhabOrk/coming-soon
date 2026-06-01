"use client";

import { Hero } from "@/components/hero";
import { Animations } from "@/components/animations";
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex-1 bg-black text-white overflow-hidden">
      <Animations />
      <div className="relative w-screen h-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://ik.imagekit.io/kimhabork/assets/portrait-bg.png"
            className="w-full h-full object-cover md:hidden lg:hidden opacity-60"
            height={1920}
            width={1080}
            alt="background image"
            priority
          />
          <Image
            src="https://ik.imagekit.io/kimhabork/assets/landscape-bg.png"
            className="w-full h-full object-cover hidden md:block lg:block opacity-60"
            height={1080}
            width={1920}
            alt="background image"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <Hero />
      </div>
    </div>
  );
}
