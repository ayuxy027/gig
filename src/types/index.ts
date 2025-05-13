// Chain related types
export interface Chain {
  id: string
  name: string
  logo: string
  isSelected?: boolean
}

// Transaction related types
export interface Transaction {
  id: string
  date: string
  time: string
  value: number
  type: "send" | "receive" | "swap" | "stake"
}

// User profile types
export interface UserProfile {
  name: string
  handle: string
  avatar: string
  verified: boolean
}

// Stats types
export interface ChainStats {
  firstTransaction: {
    time: string
    date: string
  }
  latestTransaction: {
    time: string
    date: string
  }
  highValueTransaction: number
  cumulativeGasFees: number
  totalAmountStaked: number
  totalNFTsMinted: number
  totalTransactions: number
  totalTokenHoldings: number
}

// Holdings types
export interface Holdings {
  total: number
  currency: string
  chainScore: number
  totalVolume: number
}
