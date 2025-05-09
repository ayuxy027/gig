"use client"

import type React from "react"

import { useEffect, useState } from "react"
import ChainSelector from "./ChainSelector"

interface HeroSectionProps {
  isMobile?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMobile = false }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Automatically determine if we should show mobile view
  const shouldShowMobile = isMobile || windowWidth < 768

  if (shouldShowMobile) {
    return (
      <div className="flex flex-col items-center py-8 px-4 min-h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex justify-center mb-4">
            <img src="/src/assets/hero/chainhub-logo.png" alt="ChainHub Logo" className="w-20 h-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-2">CHAINHUB</h1>
          <p className="text-sm opacity-80 max-w-[250px] mx-auto tracking-wider">GAMIFIED GLANCE ON YOUR ACTIVITY</p>

          <ChainSelector isMobile={true} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-between items-center min-h-[calc(100vh-100px)] p-8 relative">
      <div className="flex flex-col justify-between h-full flex-1">
        <div className="relative h-[300px]">
          <img
            src="/src/assets/hero/img-hero-left-top/action-figure.png"
            alt="Character"
            className="absolute w-[200px] left-[50px] top-[50px] z-10"
          />
          <img
            src="/src/assets/hero/img-hero-left-top/cloud.png"
            alt="Cloud"
            className="absolute w-[300px] left-0 top-[150px] z-0"
          />
        </div>
        <div className="relative h-[300px]">
          <img
            src="/src/assets/hero/img-hero-left-bottom.png"
            alt="Character"
            className="absolute w-[250px] left-[20px] bottom-0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-2 z-10">
        <ChainSelector />
      </div>

      <div className="flex flex-col justify-between h-full flex-1">
        <div className="relative h-[300px]">
          <img
            src="/src/assets/hero/img-hero-right-top/action-figure.png"
            alt="Character"
            className="absolute w-[200px] right-[50px] top-[50px] z-10"
          />
          <img
            src="/src/assets/hero/img-hero-right-top/cloud.png"
            alt="Cloud"
            className="absolute w-[300px] right-0 top-[150px] z-0"
          />
        </div>
        <div className="relative h-[300px]">
          <img
            src="/src/assets/hero/img-hero-bottom.png"
            alt="Character"
            className="absolute w-[250px] right-[20px] bottom-0"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
