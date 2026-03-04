import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center mx-auto gap-4 md:gap-6">
        <div className="flex gap-6 md:gap-10 justify-center items-center mx-auto">
          <Link href="https://facebook.com/kimhaborkofficial">
            <Facebook size={24} className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </Link>
          <Link href="https://instagram.com/kimhabork_official">
            <Instagram size={24} className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </Link>
          <Link href="https://linkedin.com/in/kimhaborkofficial">
            <Linkedin size={24} className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </Link>
          <Link href="https://tiktok.com/@kimhabork_official">
            <Image
              src="/tiktok.png"
              width={24}
              height={24}
              alt="TikTok Logo"
              priority
              className="h-6 w-6 md:h-8 md:w-8 object-cover"
            />
          </Link>
          <Link href="https://www.pinterest.com/kimhabork_official">
            <Image
              src="/pinterest.png"
              width={24}
              height={24}
              alt="Pinterest Logo"
              priority
              className="h-6 w-6 md:h-8 md:w-8 object-cover"
            />
          </Link>
          <Link href="https://www.threads.com/@kimhabork_official">
            <Image
              src="/threads.png"
              width={24}
              height={24}
              alt="Threads Logo"
              priority
              className="h-6 w-6 md:h-8 md:w-8 object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-4 pt-4 md:mt-6 pt-4 text-center text-gray-400 text-xs md:text-md">
        <p>© {new Date().getFullYear()} Kimhab Ork. All rights reserved.</p>
      </div>
    </footer>
  );
}
