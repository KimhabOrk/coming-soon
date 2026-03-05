"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const videoRef = useRef < HTMLVideoElement > (null);
  
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
    <div className="fixed inset-0 bg-black">
      <div className="relative w-screen h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover md:hidden lg:hidden"
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
          className="w-full h-full object-cover hidden md:block lg:block"
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
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
    </div>
  )
}