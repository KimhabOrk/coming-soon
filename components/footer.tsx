import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center mx-auto gap-4 md:gap-8">
        <div className="flex gap-6 md:gap-10 justify-center items-center mx-auto mb-4">
          <Link href="https://facebook.com/kimhab.ork.kh">
            <Facebook size={24} className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </Link>
          <Link href="https://instagram.com/kimhab_ork">
            <Instagram size={24} className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </Link>
          <Link href="https://linkedin.com/in/kimhab-ork">
            <Linkedin size={24} className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </Link>
          <Link href="https://tiktok.com/@">
            <Image
              src="/tiktok.png"
              width={24}
              height={24}
              alt="TikTok Logo"
              priority
              className="h-6 w-6 md:h-8 md:w-8 object-cover"
            />
          </Link>
          <Link href="https://www.pinterest.com/kimhab_ork">
            <Image
              src="/pinterest.png"
              width={24}
              height={24}
              alt="Pinterest Logo"
              priority
              className="h-6 w-6 md:h-8 md:w-8 object-cover"
            />
          </Link>
          <Link href="https://www.threads.com/@kimhab_ork">
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
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-gray-700 text-xs">
        <p>© {new Date().getFullYear()} Kimhab Ork. All rights reserved.</p>
      </div>
    </footer>
  );
}
