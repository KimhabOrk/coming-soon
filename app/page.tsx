'use client'

import { Background } from '@/components/background'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { Animations } from '@/components/animations'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Background />
      <Animations />
      <Hero />
      <Footer />
    </div>
  )
}
