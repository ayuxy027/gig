"use client"

import { useState } from "react"
// import "../styles/hero.css"
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

    // ===== POSITIONING VARIABLES - ADJUST THESE TO FINE-TUNE LAYOUT =====

    // -------------------- VECTOR PATH POSITIONING --------------------
    // These control the background vector that contains the transaction stats
    const vectorPositionStyles = {
        // HORIZONTAL POSITIONING
        // More negative = move right, More positive = move left
        right: "-550px",

        // VERTICAL POSITIONING
        // More positive = move down, More negative = move up
        top: "-135px",

        // SIZE ADJUSTMENTS
        // Increase width to stretch horizontally
        width: "calc(100% + 100px)",
        // Increase height to stretch vertically
        height: "450px",

        // Z-INDEX CONTROLS STACKING ORDER
        // Higher values appear on top of lower values
        zIndex: 1,
    }

    // -------------------- YELLOW DOT CONNECTOR POSITIONING --------------------
    // These position the yellow connector dots along the vector path

    // FIRST CONNECTOR DOT (Top dot)
    const connector1Position = {
        // VERTICAL POSITION: Higher value = lower on page, Lower value = higher on page
        top: "80px",
        // HORIZONTAL POSITION: Higher value = more right, Lower value = more left
        left: "140px",
    }

    // SECOND CONNECTOR DOT (Bottom dot)
    const connector2Position = {
        // VERTICAL POSITION: Higher value = lower on page, Lower value = higher on page
        top: "320px",
        // HORIZONTAL POSITION: Higher value = more right, Lower value = more left
        left: "140px",
    }

    // -------------------- STATS GRID SPACING AND POSITIONING --------------------
    // These control the overall spacing and positioning of the stats boxes
    const statsGridStyles = {
        // HORIZONTAL POSITIONING
        // Positive = move right, Negative = move left
        offsetX: "-440px",  // Adjusted to place stats inside the vector

        // VERTICAL POSITIONING
        // Positive = move down, Negative = move up
        offsetY: "-190px",  // Aligned with the vector's vertical position

        // TOP MARGIN
        // Space between elements above and the stats grid
        marginTop: "100px",

        // HORIZONTAL PADDING
        // Space on the left and right sides of the stats grid
        paddingLeft: "40px",
        paddingRight: "0px",

        // WIDTH CONTROL
        // Controls how much of the available width is used
        // Smaller percentage = narrower grid, Larger percentage = wider grid
        widthPercentage: "85%",

        // RIGHT MARGIN
        // Space on the right side of the stats grid
        rightMargin: "30px"
    }

    // -------------------- STATS GRID SPACING --------------------
    const statsGridSpacing = {
        // HORIZONTAL AND VERTICAL GAP BETWEEN STAT BOXES
        // Larger value = more space between boxes
        gap: "16px",

        // VERTICAL SPACING BETWEEN STAT ROWS
        // Larger value = more space between rows
        rowGap: "24px",
    }

    // -------------------- STATS BOX STYLING --------------------
    // These control the appearance and sizing of individual stat boxes
    const statsBoxStyles = {
        // INTERNAL PADDING WITHIN EACH STATS BOX
        // Larger value = bigger boxes, Smaller value = smaller boxes
        padding: "14px",

        // BOX SHADOW FOR GLOW EFFECT
        // Increase the last value (0.2) for stronger glow
        boxShadow: "inset 0 0 10px rgba(253, 93, 0, 0.2)",

        // CORNER RADIUS FOR THE STATS BOXES
        // Larger value = more rounded corners
        borderRadius: "12px",
    }

    // -------------------- LIGHTNING AND HEADER POSITIONING --------------------
    // These control the positioning of the lightning image and "YOUR ONCHAIN stats" text
    const headerStyles = {
        // HORIZONTAL POSITION OF HEADER
        // Positive = move right, Negative = move left
        offsetX: "40px",

        // SPACING BETWEEN LIGHTNING AND TEXT
        // Larger value = more space between
        marginRight: "8px",

        // SPACE BELOW HEADER
        // Larger value = more space below header
        marginBottom: "20px",

        // LIGHTNING IMAGE SIZE
        // Larger value = bigger lightning image
        lightningWidth: "32px",
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
                                        className="relative"
                                        style={{
                                            marginTop: statsGridStyles.marginTop
                                        }}
                                    >
                                        {/* Lightning and Stats Header - Title Section */}
                                        <div className="flex items-start" style={{
                                            marginBottom: headerStyles.marginBottom,
                                            position: "relative",
                                            zIndex: 10,
                                            marginLeft: headerStyles.offsetX // Adjust this to move the title horizontally
                                        }}>
                                            <div className="relative" style={{ marginRight: headerStyles.marginRight }}>
                                                {/* Lightning image - adjust width in headerStyles */}
                                                <img
                                                    src={lightingImg || "/placeholder.svg"}
                                                    alt="Lightning"
                                                    className="lightning-img"
                                                    style={{ width: headerStyles.lightningWidth + "px", height: "auto" }}
                                                />
                                            </div>
                                            {/* Stats title */}
                                            <div className="stats-header">
                                                <div className="text-2xl font-bold gradient-text-orange">YOUR ONCHAIN</div>
                                                <div className="text-6xl italic font-bold">stats</div>
                                            </div>
                                        </div>

                                        {/* Vector Lines Background - KEY ELEMENT TO ADJUST */}
                                        {/* This is the orange path that contains all the stats */}
                                        <div
                                            className="absolute pointer-events-none"
                                            style={{
                                                // Position adjustments from vectorPositionStyles
                                                right: vectorPositionStyles.right,  // Move left/right
                                                top: vectorPositionStyles.top,      // Move up/down
                                                width: vectorPositionStyles.width,  // Adjust width
                                                height: vectorPositionStyles.height, // Adjust height
                                                zIndex: vectorPositionStyles.zIndex,
                                            }}
                                        >
                                            <img
                                                src={linesVector || "/placeholder.svg"}
                                                alt="Vector Lines"
                                                className="object-contain w-full h-full vector-lines"
                                            />
                                        </div>

                                        {/* First Connector Dot - TOP POSITION */}
                                        {/* This is the first yellow dot that connects to the vector path */}
                                        <div
                                            className="absolute"
                                            style={{
                                                top: connector1Position.top,
                                                left: connector1Position.left,
                                                zIndex: 10,
                                                // Uncomment to see connector position:
                                                // border: "1px solid green"
                                            }}
                                        >
                                            <div className="relative">
                                                <img src={yellowDot || "/placeholder.svg"} alt="Connector Dot" className="w-9 h-9" />
                                            </div>
                                        </div>

                                        {/* Second Connector Dot - BOTTOM POSITION */}
                                        {/* This is the second yellow dot that connects to the vector path */}
                                        <div
                                            className="absolute"
                                            style={{
                                                top: connector2Position.top,
                                                left: connector2Position.left,
                                                zIndex: 10,
                                                // Uncomment to see connector position:
                                                // border: "1px solid green"
                                            }}
                                        >
                                            <div className="relative">
                                                <img src={yellowDot2 || "/placeholder.svg"} alt="Connector Dot" className="w-9 h-9" />
                                            </div>
                                        </div>

                                        {/* Stats Grid - Positioned inside the vector path */}
                                        {/* This contains all the transaction data boxes */}
                                        <div
                                            className="relative"
                                            style={{
                                                zIndex: 5,
                                                // Positioning of entire stats grid
                                                paddingLeft: statsGridStyles.paddingLeft,
                                                paddingRight: statsGridStyles.paddingRight,
                                                position: "relative",
                                                right: statsGridStyles.offsetX, // Horizontal position: negative = more right
                                                top: statsGridStyles.offsetY,   // Vertical position: positive = move down
                                            }}
                                        >
                                            {/* First Row of Stats */}
                                            <div
                                                className="grid grid-cols-4"
                                                style={{
                                                    gap: statsGridSpacing.gap,
                                                    marginBottom: statsGridSpacing.rowGap,
                                                    width: statsGridStyles.widthPercentage, // Controls overall width of the stats grid
                                                    marginLeft: "auto", // Keeps right alignment
                                                    marginRight: statsGridStyles.rightMargin // Controls right margin
                                                }}
                                            >
                                                {/* First Transaction */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">First Transaction</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-xs text-orange-500">11:53 UTC</div>
                                                        <div className="text-xl text-orange-500 monospace-numbers">12-06-2018</div>
                                                    </div>
                                                </div>

                                                {/* Latest Transaction */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">Latest Transaction</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-xs text-orange-500">01:11 UTC</div>
                                                        <div className="text-xl text-orange-500 monospace-numbers">15-04-2025</div>
                                                    </div>
                                                </div>

                                                {/* High Value Transaction */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">High Value Transaction</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-2xl text-orange-500 monospace-numbers">$18,765.08</div>
                                                    </div>
                                                </div>

                                                {/* Cumulative Gas Fees */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">Cumulative Gas Fees</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-2xl text-orange-500 monospace-numbers">$1,865.08</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Second Row of Stats */}
                                            <div
                                                className="grid grid-cols-4"
                                                style={{
                                                    gap: statsGridSpacing.gap,
                                                    width: statsGridStyles.widthPercentage, // Controls overall width of the stats grid
                                                    marginLeft: "auto", // Keeps right alignment
                                                    marginRight: statsGridStyles.rightMargin // Controls right margin
                                                }}
                                            >
                                                {/* Total Amount Staked */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">Total Amount Staked</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-2xl text-orange-500 monospace-numbers">$665.08</div>
                                                    </div>
                                                </div>

                                                {/* Total NFTs Minted */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">Total NFTs Minted</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-2xl text-orange-500 monospace-numbers">478</div>
                                                    </div>
                                                </div>

                                                {/* Total No Of Transactions */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">Total No Of Transactions</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-2xl text-orange-500 monospace-numbers">1,785</div>
                                                    </div>
                                                </div>

                                                {/* Total Token Holdings */}
                                                <div>
                                                    <div className="mb-2 text-sm gradient-text-orange">Total Token Holdings</div>
                                                    <div
                                                        className="bg-black/50 stats-box"
                                                        style={{
                                                            padding: statsBoxStyles.padding,
                                                            boxShadow: statsBoxStyles.boxShadow,
                                                            borderRadius: statsBoxStyles.borderRadius
                                                        }}
                                                    >
                                                        <div className="text-2xl text-orange-500 monospace-numbers">547</div>
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