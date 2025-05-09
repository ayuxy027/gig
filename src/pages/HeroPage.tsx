"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import type { NavItem, ChainOption } from "../types"
import {
    CircleDot,
    Diamond,
    Hexagon,
    TriangleAlert,
    Sparkles,
    CircleEllipsis
} from "lucide-react"

const HeroPage: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Initial check
        checkIfMobile()

        // Add event listener for window resize
        window.addEventListener("resize", checkIfMobile)

        // Cleanup
        return () => {
            window.removeEventListener("resize", checkIfMobile)
        }
    }, [])

    return (
        <div className="overflow-hidden relative min-h-screen">
            {/* Main background image */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('/src/assets/hero/hero-bg.png')",
                    zIndex: 0
                }}
            />

            {/* Dots pattern overlay */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('/src/assets/hero/dots.jpg')",
                    opacity: 0.4,
                    zIndex: 1
                }}
            />

            {/* Subtle noise texture */}
            <div className="absolute inset-0 bg-[url('/src/assets/hero/noise-texture.png')] opacity-12 mix-blend-overlay pointer-events-none z-2" />

            {/* Subtle vignette effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-65 z-3"
                style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)' }}
            />

            {/* Subtle gradient overlay for better text readability */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.3)] z-4 pointer-events-none"
            />

            <div className="relative z-10">
                {isMobile ? (
                    <div className="min-h-screen">
                        <Navbar isMobile={true} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        <HeroSection isMobile={true} />
                    </div>
                ) : (
                    <div className="min-h-screen">
                        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        <HeroSection />
                    </div>
                )}
            </div>
        </div>
    )
}

// === Navbar Component ===
interface NavbarProps {
    isMobile?: boolean
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({ isMobile = false, isMenuOpen, setIsMenuOpen }) => {
    const navItems: NavItem[] = [
        { id: "chain-hub", label: "Chain Hub", path: "/" },
        { id: "dApp-hub", label: "dApp hub", path: "/dapp-hub" },
        { id: "leaderboard", label: "Leaderboard", path: "/leaderboard" },
    ]

    if (isMobile) {
        return (
            <div className="w-full px-6 py-4 my-3 mx-auto max-w-[95%] rounded-[30px] bg-[rgba(41,33,25,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] shadow-[0_8px_25px_rgba(0,0,0,0.25)]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-2xl tracking-wider font-pixel rainbow-text drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]">rekt.id</div>
                    </div>
                    <button
                        className="text-white bg-transparent border-none p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu size={24} color="#fff" />
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="flex flex-col gap-4 mt-5 backdrop-blur-xl bg-[rgba(35,28,20,0.65)] p-5 rounded-xl border border-[rgba(255,255,255,0.15)] shadow-lg animate-fadeIn">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.path}
                                className="text-white no-underline font-game text-sm py-2.5 px-4 hover:text-[#FF6B00] transition-all duration-300 hover:translate-x-1 rounded-md hover:bg-[rgba(255,255,255,0.05)]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <nav className="navbar flex justify-between items-center px-8 py-4 rounded-[50px] mx-auto my-5 max-w-[90%] border border-[rgba(255,255,255,0.18)] bg-[rgba(41,33,25,0.55)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            <div className="flex items-center">
                <div className="text-4xl tracking-wider font-pixel rainbow-text drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]">rekt.id</div>
            </div>
            <div className="flex gap-10">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.path}
                        className="text-white no-underline font-game text-base transition-all duration-300 hover:text-[#FF6B00] py-2 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}

// === HeroSection Component ===
interface HeroSectionProps {
    isMobile?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMobile = false }) => {
    if (isMobile) {
        return (
            <div className="flex flex-col items-center py-10 px-5 min-h-[calc(100vh-80px)]">
                <div className="flex flex-col gap-7 items-center text-center">
                    <div className="flex justify-center mb-2">
                        <img
                            src="/src/assets/hero/chainhub-logo.png"
                            alt="ChainHub Logo"
                            className="w-28 h-auto drop-shadow-lg animate-pulse-gentle"
                        />
                    </div>
                    <h1 className="mb-3 text-5xl text-white font-game drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">CHAINHUB</h1>
                    <p className="font-retro text-lg opacity-95 max-w-[300px] mx-auto tracking-wider text-white drop-shadow-md leading-relaxed">GAMIFIED GLANCE ON YOUR ACTIVITY</p>

                    <ChainSelector isMobile={true} />
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-between items-center min-h-[calc(100vh-120px)] p-8 relative">
            <div className="flex flex-col flex-1 justify-between h-full">
                <div className="relative h-[300px]">
                    <img
                        src="/src/assets/hero/img-hero-left-top/action-figure.png"
                        alt="Character"
                        className="absolute w-[200px] left-[50px] top-[50px] z-10 drop-shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                    <img
                        src="/src/assets/hero/img-hero-left-top/cloud.png"
                        alt="Cloud"
                        className="absolute w-[300px] left-0 top-[150px] z-0 animate-float-slow"
                    />
                </div>
                <div className="relative h-[300px]">
                    <img
                        src="/src/assets/hero/img-hero-left-bottom.png"
                        alt="Character"
                        className="absolute w-[250px] left-[20px] bottom-0 drop-shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            <div className="flex z-10 flex-col justify-center items-center flex-2">
                <div className="mb-10 text-center">
                    <img
                        src="/src/assets/hero/chainhub-logo.png"
                        alt="ChainHub Logo"
                        className="mx-auto mb-6 w-32 h-auto drop-shadow-lg animate-pulse-gentle"
                    />
                    <h1 className="mb-5 text-5xl text-white font-game drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">CHAINHUB</h1>
                    <p className="font-retro text-xl opacity-95 max-w-[350px] mx-auto tracking-wider text-white leading-relaxed drop-shadow-md">GAMIFIED GLANCE ON YOUR ACTIVITY</p>
                </div>
                <ChainSelector />
            </div>

            <div className="flex flex-col flex-1 justify-between h-full">
                <div className="relative h-[300px]">
                    <img
                        src="/src/assets/hero/img-hero-right-top/action-figure.png"
                        alt="Character"
                        className="absolute w-[200px] right-[50px] top-[50px] z-10 drop-shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                    <img
                        src="/src/assets/hero/img-hero-right-top/cloud.png"
                        alt="Cloud"
                        className="absolute w-[300px] right-0 top-[150px] z-0 animate-float-slow"
                    />
                </div>
                <div className="relative h-[300px]">
                    <img
                        src="/src/assets/hero/img-hero-bottom.png"
                        alt="Character"
                        className="absolute w-[250px] right-[20px] bottom-0 drop-shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    )
}

// === ChainSelector Component ===
interface ChainSelectorProps {
    isMobile?: boolean
}

const ChainSelector: React.FC<ChainSelectorProps> = ({ isMobile = false }) => {
    const chains: ChainOption[] = [
        {
            id: "ethereum",
            name: "Ethereum",
            icon: "eth",
            color: "#FF6B00",
            iconColor: "#627EEA",
            symbol: "Ξ",
        },
        {
            id: "base",
            name: "Base",
            icon: "base",
            color: "#0052FF",
            iconColor: "#0052FF",
            symbol: "B",
        },
        {
            id: "binance",
            name: "Binance Smart Chain",
            icon: "bnb",
            color: "#F0B90B",
            iconColor: "#F0B90B",
            symbol: "BNB",
        },
        {
            id: "arbitrum",
            name: "Arbitrum",
            icon: "arb",
            color: "#28A0F0",
            iconColor: "#28A0F0",
            symbol: "A",
        },
        {
            id: "polygon",
            name: "Polygon",
            icon: "poly",
            color: "#8247E5",
            iconColor: "#8247E5",
            symbol: "P",
        },
        {
            id: "optimism",
            name: "Optimism",
            icon: "opt",
            color: "#FF0420",
            iconColor: "#FF0420",
            symbol: "O",
        },
    ]

    return (
        <div className={`flex flex-col items-center ${isMobile ? "gap-7 px-4 w-full" : "gap-8 w-full max-w-[650px]"}`}>
            <h2 className="font-game text-xl tracking-[0.25em] text-center text-white mb-5 drop-shadow-md">SELECT YOUR CHAIN</h2>
            <div className={`grid grid-cols-2 ${isMobile ? "gap-4 w-full" : "gap-5 w-full"}`}>
                {chains.map((chain) => (
                    <button
                        key={chain.id}
                        className={`chain-btn flex items-center gap-4 py-4 px-6 text-white font-medium backdrop-blur-lg 
                        ${chain.id === "ethereum" ? `chain-btn-${chain.id}` : `chain-btn-${chain.id}`} 
                        border border-[rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.03] 
                        hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-lg active:scale-[0.98]`}
                        style={{
                            backgroundColor: `${chain.color}35`,
                            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.25)`,
                        }}
                    >
                        <ChainIcon chain={chain} size={36} />
                        <span className="text-lg tracking-wide font-retro md:text-xl">{chain.name}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

// === ChainIcon Component ===
interface ChainIconProps {
    chain: ChainOption
    size?: number
}

const ChainIcon: React.FC<ChainIconProps> = ({ chain, size = 24 }) => {
    // Use Lucide React icons based on chain ID
    const renderIcon = () => {
        switch (chain.id) {
            case "ethereum":
                return <Diamond size={size * 0.6} strokeWidth={2.5} color="#fff" />
            case "base":
                return <CircleDot size={size * 0.6} strokeWidth={2.5} color="#fff" />
            case "binance":
                return <Hexagon size={size * 0.6} strokeWidth={2.5} color="#fff" />
            case "arbitrum":
                return <Sparkles size={size * 0.6} strokeWidth={2.5} color="#fff" />
            case "polygon":
                return <Diamond size={size * 0.6} strokeWidth={2.5} color="#fff" />
            case "optimism":
                return <TriangleAlert size={size * 0.6} strokeWidth={2.5} color="#fff" />
            default:
                return <CircleEllipsis size={size * 0.6} strokeWidth={2.5} color="#fff" />
        }
    }

    return (
        <div
            className="flex justify-center items-center rounded-full chain-icon"
            style={{
                backgroundColor: chain.iconColor,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: `0 0 18px ${chain.iconColor}90`,
                transition: 'all 0.3s ease',
            }}
        >
            {renderIcon()}
        </div>
    )
}

export default HeroPage 