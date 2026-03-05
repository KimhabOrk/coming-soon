"use client";

import { useEffect, useRef } from "react";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Animations } from "@/components/animations";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play video with error handling
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.log("Video autoplay failed:", error);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Animations />
      <div className="relative w-screen h-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover md:hidden lg:hidden opacity-60"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://ik.imagekit.io/kimhabork/assets/vid-port.mp4"
              type="video/mp4"
            />
          </video>
          <video
            ref={videoRef}
            className="w-full h-full object-cover hidden md:block lg:block opacity-60"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://ik.imagekit.io/kimhabork/assets/vid-land.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0" />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
