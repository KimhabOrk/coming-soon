import { useEffect, useState } from 'react'

export function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #EE1A4E 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #EE1A4E 0%, transparent 70%)',
            bottom: '20%',
            left: '5%',
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #EE1A4E 0%, transparent 70%)',
            top: '40%',
            right: '30%',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #EE1A4E 0%, transparent 70%)',
            bottom: '60%',
            left: '1.5%',
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(238, 26, 78, 0.05) 25%, rgba(238, 26, 78, 0.05) 26%, transparent 27%, transparent 74%, rgba(238, 26, 78, 0.05) 75%, rgba(238, 26, 78, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(238, 26, 78, 0.05) 25%, rgba(238, 26, 78, 0.05) 26%, transparent 27%, transparent 74%, rgba(238, 26, 78, 0.05) 75%, rgba(238, 26, 78, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Cursor follower */}
      <div
        className="fixed w-32 h-32 rounded-full border-2 border-primary opacity-20 pointer-events-none hidden lg:block"
        style={{
          left: `${mousePos.x - 64}px`,
          top: `${mousePos.y - 64}px`,
          transition: 'all 0.3s ease-out',
        }}
      />
    </>
  )
}
