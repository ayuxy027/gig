"use client"

import { useState } from "react"
// Import all images as modules
import bgImg from "../assets/hero-page/bg-img.png"
import rektIdLogo from "../assets/hero-page/rekt-id-logo.png"
import chainhubLogo from "../assets/hero-page/chainhub-logo.png"
import avatarImg from "../assets/hero-page/avatar.png"
import rectangleGradientBox from "../assets/hero-page/rectangle gradient box.png"
import lightingImg from "../assets/hero-page/lighting-img.png"
import yellowDot from "../assets/hero-page/lines effect/Container-1.svg"
import yellowDot2 from "../assets/hero-page/lines effect/Container.svg"
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
                <img src={bgImg || "/placeholder.svg"} alt="Background" className="object-cover w-full h-full" />
            </div>

            {/* Main Content Container */}
            <div className="flex relative z-10 flex-col min-h-screen">
                {/* Header */}
                <header className="px-6 py-4">
                    <div className="flex justify-between items-center px-6 py-3 mx-auto max-w-7xl rounded-full border backdrop-blur-sm bg-black/30 border-gray-800/30">
                        <div className="flex items-center">
                            <img src={rektIdLogo || "/placeholder.svg"} alt="rekt.id" className="w-auto h-8" />
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
                                    src={chainhubLogo || "/placeholder.svg"}
                                    alt="ChainHub Logo"
                                    className="mr-4 w-20 h-20"
                                    style={{ transform: "rotate(180deg)" }}
                                />
                                <div>
                                    <h1 className="text-4xl font-bold tracking-wider md:text-5xl">CHAINHUB</h1>
                                    <p className="text-sm tracking-wide text-gray-400 md:text-base">GAMIFIED GLANCE ON YOUR ACTIVITY</p>
                                </div>
                            </div>

                            {/* User Profile */}
                            <div className="flex items-center px-4 py-2 mt-6 rounded-full border backdrop-blur-sm md:mt-0 bg-black/40 border-gray-800/30">
                                <img src={avatarImg || "/placeholder.svg"} alt="User Avatar" className="mr-3 w-10 h-10 rounded-full" />
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
                                                src={rectangleGradientBox || "/placeholder.svg"}
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

                                    {/* Stats Section with Vector Background and Connector Dots */}
                                    <div
                                        style={{
                                            marginTop: "60px",
                                            position: "relative",
                                            width: "100%"
                                        }}
                                    >
                                        {/* Main container */}
                                        <div style={{
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "flex-start"
                                        }}>
                                            {/* YOUR ONCHAIN stats heading with lightning */}
                                            <div style={{
                                                position: "relative",
                                                zIndex: 5,
                                                width: "200px",
                                                display: "flex",
                                                alignItems: "flex-start"
                                            }}>
                                                {/* Lightning icon */}
                                                <img
                                                    src={lightingImg || "/placeholder.svg"}
                                                    alt="Lightning"
                                                    style={{
                                                        width: "35px",
                                                        height: "auto",
                                                        marginRight: "10px",
                                                        filter: "drop-shadow(0 0 10px rgba(253, 93, 0, 0.6))"
                                                    }}
                                                />

                                                {/* Text */}
                                                <div>
                                                    <div style={{
                                                        fontSize: "1.5rem",
                                                        fontWeight: "bold",
                                                        background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent"
                                                    }}>
                                                        YOUR ONCHAIN
                                                    </div>
                                                    <div style={{
                                                        fontSize: "4rem",
                                                        fontStyle: "italic",
                                                        fontWeight: "bold",
                                                        lineHeight: "0.9",
                                                        marginTop: "5px"
                                                    }}>
                                                        stats
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Vector container with stats */}
                                            <div style={{
                                                position: "relative",
                                                flex: 1,
                                                minHeight: "400px",
                                                marginLeft: "-40px"
                                            }}>
                                                {/* Original Vector 2.svg */}
                                                <div style={{
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "0",
                                                    width: "100%",
                                                    height: "100%",
                                                    zIndex: 1
                                                }}>
                                                    <img
                                                        src={linesVector || "/placeholder.svg"}
                                                        alt="Vector Lines"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "contain"
                                                        }}
                                                    />
                                                </div>

                                                {/* Connector dots - positioned at the left indent of the vector */}
                                                <div style={{
                                                    position: "absolute",
                                                    top: "140px",
                                                    left: "35px",
                                                    zIndex: 5
                                                }}>
                                                    <img
                                                        src={yellowDot || "/placeholder.svg"}
                                                        alt="Top Connector"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                            filter: "drop-shadow(0 0 8px rgba(255, 234, 0, 0.7))"
                                                        }}
                                                    />
                                                </div>

                                                <div style={{
                                                    position: "absolute",
                                                    top: "180px",
                                                    left: "35px",
                                                    zIndex: 5
                                                }}>
                                                    <img
                                                        src={yellowDot2 || "/placeholder.svg"}
                                                        alt="Bottom Connector"
                                                        style={{
                                                            width: "10px",
                                                            height: "10px",
                                                            filter: "drop-shadow(0 0 8px rgba(255, 234, 0, 0.7))"
                                                        }}
                                                    />
                                                </div>

                                                {/* Stats Grid - All rows positioned inside the vector path */}
                                                <div style={{
                                                    position: "relative",
                                                    paddingTop: "40px",
                                                    paddingLeft: "80px",
                                                    paddingRight: "40px",
                                                    zIndex: 3
                                                }}>
                                                    {/* First Row of Stats */}
                                                    <div style={{
                                                        display: "grid",
                                                        gridTemplateColumns: "repeat(4, 1fr)",
                                                        gap: "16px",
                                                        marginBottom: "40px"
                                                    }}>
                                                        {/* First Transaction */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>First Transaction</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "0.75rem", color: "#fd5d00" }}>11:53 UTC</div>
                                                                <div style={{ fontSize: "1.25rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>12-06-2018</div>
                                                            </div>
                                                        </div>

                                                        {/* Latest Transaction */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>Latest Transaction</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "0.75rem", color: "#fd5d00" }}>01:11 UTC</div>
                                                                <div style={{ fontSize: "1.25rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>15-04-2025</div>
                                                            </div>
                                                        </div>

                                                        {/* High Value Transaction */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>High Value Transaction</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "1.5rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>$18,765.08</div>
                                                            </div>
                                                        </div>

                                                        {/* Cumulative Gas Fees */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>Cumulative Gas Fees</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "1.5rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>$1,865.08</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Second Row of Stats */}
                                                    <div style={{
                                                        display: "grid",
                                                        gridTemplateColumns: "repeat(4, 1fr)",
                                                        gap: "16px"
                                                    }}>
                                                        {/* Total Amount Staked */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>Total Amount Staked</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "1.5rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>$665.08</div>
                                                            </div>
                                                        </div>

                                                        {/* Total NFTs Minted */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>Total NFTs Minted</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "1.5rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>478</div>
                                                            </div>
                                                        </div>

                                                        {/* Total No Of Transactions */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>Total No Of Transactions</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "1.5rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>1,785</div>
                                                            </div>
                                                        </div>

                                                        {/* Total Token Holdings */}
                                                        <div>
                                                            <div style={{
                                                                fontSize: "0.875rem",
                                                                marginBottom: "8px",
                                                                background: "linear-gradient(to right, #ffaa79, #fd5d00)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent"
                                                            }}>Total Token Holdings</div>
                                                            <div style={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",
                                                                borderRadius: "12px",
                                                                padding: "14px"
                                                            }}>
                                                                <div style={{ fontSize: "1.5rem", color: "#fd5d00", fontVariantNumeric: "tabular-nums" }}>547</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Chain Selector */}
                                <div className="col-span-1">
                                    <div className="mb-6 text-lg font-bold tracking-wide text-center jersey-font">SELECT YOUR CHAIN</div>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {chains.map((chain) => (
                                            <div
                                                key={chain.id}
                                                onClick={() => handleChainSelect(chain.id)}
                                                className={`chain-selector-item flex items-center p-3 rounded-xl cursor-pointer ${selectedChain === chain.id
                                                    ? "bg-gradient-to-r from-[#FFAA79] to-[#FD5D00]"
                                                    : "bg-black/40 hover:bg-black/60"
                                                    }`}
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
        </div>
    )
}

export default HeroPage
