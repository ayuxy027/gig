"use client"

import { useState } from "react"
import "../styles/hero.css"
// Import all images as modules
import bgImg from "../assets/hero-page/bg-img.png"
import rektIdLogo from "../assets/hero-page/rekt-id-logo.png"
import chainhubLogo from "../assets/hero-page/chainhub-logo.png"
import avatarImg from "../assets/hero-page/avatar.png"
import rectangleGradientBox from "../assets/hero-page/rectangle gradient box.png"
import lightingImg from "../assets/hero-page/lighting-img.png"
import yellowDot from "../assets/hero-page/lines effect/Container-1.svg"
import linesVector from "../assets/hero-page/lines effect/Vector 2.svg"
import ethLogo from "../assets/hero-page/logo/eth-logo.png"
import binanceLogo from "../assets/hero-page/logo/binance-logo.png"
import polygonLogo from "../assets/hero-page/logo/polygon-logo.png"
import baseLogo from "../assets/hero-page/logo/base-logo.png"
import arbitrumLogo from "../assets/hero-page/logo/arbitrum-logo.png"
import optimismLogo from "../assets/hero-page/logo/optimism-logo.png"

// Define types for chain data
interface Chain {
    id: string
    name: string
    logo: string
    isSelected?: boolean
}

const HeroPage = () => {
    // State for selected chain
    const [selectedChain, setSelectedChain] = useState<string>("ethereum")

    // Chain data
    const chains: Chain[] = [
        { id: "ethereum", name: "Ethereum", logo: ethLogo, isSelected: true },
        { id: "binance", name: "Binance Smart Chain", logo: binanceLogo },
        { id: "polygon", name: "Polygon", logo: polygonLogo },
        { id: "base", name: "Base", logo: baseLogo },
        { id: "arbitrum", name: "Arbitrum", logo: arbitrumLogo },
        { id: "optimism", name: "Optimism", logo: optimismLogo },
    ]

    // Handle chain selection
    const handleChainSelect = (chainId: string) => {
        setSelectedChain(chainId)
    }

    return (
        <div className="overflow-hidden relative w-full min-h-screen font-mono text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={bgImg} alt="Background" className="object-cover w-full h-full" />
            </div>

            {/* Main Content Container */}
            <div className="flex relative z-10 flex-col min-h-screen">
                {/* Header */}
                <header className="px-6 py-4">
                    <div className="flex justify-between items-center px-6 py-3 mx-auto max-w-7xl rounded-full border backdrop-blur-sm bg-black/30 border-gray-800/30">
                        <div className="flex items-center">
                            <img src={rektIdLogo} alt="rekt.id" className="w-auto h-8" />
                        </div>
                        <nav className="hidden items-center space-x-8 md:flex">
                            <a href="#" className="text-white transition hover:text-orange-400">
                                Chain Hub
                            </a>
                            <a href="#" className="text-white transition hover:text-orange-400">
                                dApp hub
                            </a>
                            <a href="#" className="text-white transition hover:text-orange-400">
                                Leaderboard
                            </a>
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 px-6 py-8">
                    <div className="mx-auto max-w-7xl">
                        {/* Hero Section */}
                        <div className="flex flex-col justify-between items-start mb-12 md:flex-row md:items-center">
                            <div className="flex items-center">
                                <img
                                    src={chainhubLogo}
                                    alt="ChainHub Logo"
                                    className="mr-4 w-20 h-20"
                                    style={{ transform: 'rotate(180deg)' }}
                                />
                                <div>
                                    <h1 className="text-4xl font-bold tracking-wider md:text-5xl">CHAINHUB</h1>
                                    <p className="text-sm tracking-wide text-gray-400 md:text-base">GAMIFIED GLANCE ON YOUR ACTIVITY</p>
                                </div>
                            </div>

                            {/* User Profile */}
                            <div className="flex items-center px-4 py-2 mt-6 rounded-full border backdrop-blur-sm md:mt-0 bg-black/40 border-gray-800/30">
                                <img src={avatarImg} alt="User Avatar" className="mr-3 w-10 h-10 rounded-full" />
                                <div>
                                    <div className="flex items-center">
                                        <span className="font-medium">Sahil Gupta</span>
                                        <svg className="ml-1 w-4 h-4 text-blue-400 fill-blue-400" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400">@realSahilTrikon</span>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-6 rounded-3xl border backdrop-blur-sm bg-black/30 md:p-8 border-gray-800/30">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                {/* Left Column - Holdings */}
                                <div className="col-span-1 lg:col-span-2">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        {/* Total Holdings */}
                                        <div className="overflow-hidden relative h-40 rounded-xl">
                                            <img
                                                src={rectangleGradientBox}
                                                alt="Holdings Background"
                                                className="object-cover absolute inset-0 w-full h-full"
                                            />
                                            <div className="flex absolute inset-0 flex-col justify-between p-6">
                                                <div className="flex items-center">
                                                    <span className="text-sm tracking-wide text-gray-300 uppercase">Total Holdings</span>
                                                    <svg
                                                        className="ml-1 w-4 h-4 text-orange-500"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12 5V19M12 5L6 11M12 5L18 11"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="mb-2 text-4xl font-bold monospace-numbers">$67,850.07</div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center px-2 py-1 text-xs rounded transition-colors cursor-pointer bg-black/50 hover:bg-black/70">
                                                            $USD
                                                            <svg
                                                                className="ml-1 w-4 h-4"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M6 9L12 15L18 9"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <span className="text-xs text-gray-400">*Today</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Chain Score and Volume */}
                                        <div className="flex flex-col gap-6">
                                            <div className="bg-gradient-to-r from-black to-[#B94107] rounded-xl p-6">
                                                <div className="mb-1 text-sm tracking-wide text-gray-300 uppercase">Chain Score</div>
                                                <div className="text-4xl font-bold monospace-numbers">785</div>
                                            </div>
                                            <div className="bg-gradient-to-r from-black to-[#B94107] rounded-xl p-6">
                                                <div className="mb-1 text-sm tracking-wide text-gray-300 uppercase">Total Volume</div>
                                                <div className="text-4xl font-bold monospace-numbers">$187,875</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Section */}
                                    <div className="relative mt-20">
                                        {/* Stats Header with Lightning and Connection Points */}
                                        <div className="flex relative items-start mb-16">
                                            {/* Lightning with Stats Text */}
                                            <div className="flex relative z-20 items-center">
                                                <div className="mr-4 lightning-container">
                                                    <img src={lightingImg} alt="Lightning" className="w-28 h-auto" />
                                                </div>
                                                <div className="stats-text">
                                                    <div className="text-2xl font-bold gradient-text-orange">YOUR ONCHAIN</div>
                                                    <div className="text-6xl italic font-bold">stats</div>
                                                </div>
                                            </div>

                                            {/* Connection Lines and Dots */}
                                            <div className="absolute top-0 -right-6 z-10 connection-lines">
                                                <div className="relative connection-line">
                                                    {/* First Yellow Dot with Line */}
                                                    <div className="absolute top-4 -right-4">
                                                        <img src={yellowDot} alt="Connection Dot" className="w-12 h-12" />
                                                    </div>
                                                    <div className="absolute right-1 top-14 w-1 h-32 bg-orange-500/30"></div>

                                                    {/* Second Yellow Dot with Line */}
                                                    <div className="absolute -right-4 top-52">
                                                        <img src={yellowDot} alt="Connection Dot" className="w-12 h-12" />
                                                    </div>
                                                    <div className="absolute right-1 top-60 w-1 h-36 bg-orange-500/30"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Boxes */}
                                        <div className="stats-grid">
                                            {/* First Row */}
                                            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-4">
                                                {/* First Transaction */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">First Transaction</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-xs text-orange-500">11:53 UTC</div>
                                                        <div className="text-xl text-orange-500 monospace-numbers">12-06-2018</div>
                                                    </div>
                                                </div>

                                                {/* Latest Transaction */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">Latest Transaction</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-xs text-orange-500">01:11 UTC</div>
                                                        <div className="text-xl text-orange-500 monospace-numbers">15-04-2025</div>
                                                    </div>
                                                </div>

                                                {/* High Value Transaction */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">High Value Transaction</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-2xl text-orange-500 monospace-numbers">$18,765.08</div>
                                                    </div>
                                                </div>

                                                {/* Cumulative Gas Fees */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">Cumulative Gas Fees</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-2xl text-orange-500 monospace-numbers">$1,865.08</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Second Row */}
                                            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                                                {/* Total Amount Staked */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">Total Amount Staked</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-2xl text-orange-500 monospace-numbers">$665.08</div>
                                                    </div>
                                                </div>

                                                {/* Total NFTs Minted */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">Total NFTs Minted</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-2xl text-orange-500 monospace-numbers">478</div>
                                                    </div>
                                                </div>

                                                {/* Total No Of Transactions */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">Total No Of Transactions</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-2xl text-orange-500 monospace-numbers">1,785</div>
                                                    </div>
                                                </div>

                                                {/* Total Token Holdings */}
                                                <div>
                                                    <div className="mb-2 text-sm font-medium gradient-text-orange">Total Token Holdings</div>
                                                    <div className="p-4 rounded-xl bg-black/50 stats-box-glow">
                                                        <div className="text-2xl text-orange-500 monospace-numbers">547</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Chain Selector */}
                                <div className="col-span-1">
                                    <div className="mb-4 text-lg font-bold tracking-wide text-center jersey-font">SELECT YOUR CHAIN</div>
                                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-2">
                                        {chains.map((chain) => (
                                            <div
                                                key={chain.id}
                                                onClick={() => handleChainSelect(chain.id)}
                                                className={`chain-selector-item ${selectedChain === chain.id
                                                    ? "bg-gradient-to-r from-[#FFAA79] to-[#FD5D00]"
                                                    : "bg-black/40 hover:bg-black/60"
                                                    } rounded-xl p-3 flex items-center cursor-pointer`}
                                            >
                                                <img src={chain.logo || "/placeholder.svg"} alt={chain.name} className="mr-3 w-6 h-6" />
                                                <span className={`jersey-font ${selectedChain === chain.id ? "font-medium" : ""}`}>{chain.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Vector Lines at Bottom */}
            <div className="absolute bottom-0 left-0 z-0 w-full">
                <img src={linesVector} alt="Vector Lines" className="w-full vector-lines" />
            </div>
        </div>
    )
}

export default HeroPage