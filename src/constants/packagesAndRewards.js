// Comprehensive Packages and Rewards Configuration

// ============================================
// STAKING PROFIT PACKAGES
// ============================================
export const STAKING_PACKAGES = [
  {
    id: 1,
    title: "Package 1",
    min: 20,
    max: 100,
    stakingProfit: 0.50, // Daily percentage
    miningProfit: 0.10, // Daily percentage
    maxReturn: 300, // Maximum return percentage
  },
  {
    id: 2,
    title: "Package 2",
    min: 200,
    max: 500,
    stakingProfit: 0.70,
    miningProfit: 0.10,
    maxReturn: 300,
  },
  {
    id: 3,
    title: "Package 3",
    min: 600,
    max: 1000,
    stakingProfit: 0.90,
    miningProfit: 0.10,
    maxReturn: 300,
  },
  {
    id: 4,
    title: "Package 4",
    min: 2000,
    max: 10000,
    stakingProfit: 1.10,
    miningProfit: 0.10,
    maxReturn: 300,
  },
  {
    id: 5,
    title: "Package 5",
    min: 11000,
    max: Infinity,
    stakingProfit: 1.30,
    miningProfit: 0.10,
    maxReturn: 300,
  },
];

// ============================================
// DIRECT CONNECT BONUS
// ============================================
export const DIRECT_CONNECT_BONUS = [
  {
    level: 1,
    percentage: 5,
    description: "Earn 5% bonus on every activated package in your direct referrals",
  },
  {
    level: 2,
    percentage: 3,
    description: "Earn 3% bonus on every activated package in your level 2 referrals",
  },
  {
    level: 3,
    percentage: 2,
    description: "Earn 2% bonus on every activated package in your level 3 referrals",
  },
];

// ============================================
// NETWORK GROWTH REWARD
// ============================================
export const NETWORK_GROWTH_REWARD = [
  {
    level: 1,
    percentage: 5.00,
    requirement: "1 Active Direct Referral",
    description: "Earn 5% of staking profits from level 1 team members",
  },
  {
    level: 2,
    percentage: 4.00,
    requirement: "+1 Active Direct Referral (Total: 2)",
    description: "Earn 4% of staking profits from level 2 team members",
  },
  {
    level: 3,
    percentage: 3.00,
    requirement: "+1 Active Direct Referral (Total: 3)",
    description: "Earn 3% of staking profits from level 3 team members",
  },
  {
    level: 4,
    percentage: 2.00,
    requirement: "+1 Active Direct Referral (Total: 4)",
    description: "Earn 2% of staking profits from level 4 team members",
  },
  {
    level: 5,
    percentage: 1.00,
    requirement: "+1 Active Direct Referral (Total: 5)",
    description: "Earn 1% of staking profits from level 5 team members",
  },
];

// ============================================
// STAR RANK REWARD
// ============================================
export const STAR_RANK_REWARD = [
  {
    rank: "STAR - 1",
    totalDipInvestment: 500,
    reward: "1% on Daily Total Team Business",
    teamLevels: 5,
    duration: 30, // days
  },
  {
    rank: "STAR – 2",
    totalDipInvestment: 1500, // +1500 from previous
    reward: "1.5% on Daily Total Team Business",
    teamLevels: 5,
    duration: 60,
  },
  {
    rank: "STAR – 3",
    totalDipInvestment: 3000, // +3000 from previous
    reward: "1% on Daily Total Team Business",
    teamLevels: 7,
    duration: 90,
  },
  {
    rank: "STAR – 4",
    totalDipInvestment: 6000, // +6000 from previous
    reward: "1.5% on Daily Total Team Business",
    teamLevels: 7,
    duration: 120,
  },
  {
    rank: "STAR – 5",
    totalDipInvestment: 10000, // +10000 from previous
    reward: "1% on Daily Total Team Business",
    teamLevels: 10,
    duration: 150,
  },
  {
    rank: "STAR – 6",
    totalDipInvestment: 25000, // +25000 from previous
    reward: "1.5% on Daily Total Team Business",
    teamLevels: 10,
    duration: 180,
  },
  {
    rank: "STAR – 7",
    totalDipInvestment: 50000, // +50000 from previous
    reward: "1% on Daily Total Team Business",
    teamLevels: 12,
    duration: 210,
  },
  {
    rank: "STAR – 8",
    totalDipInvestment: 100000, // +100000 from previous
    reward: "1.5% on Daily Total Team Business",
    teamLevels: 12,
    duration: 240,
  },
  {
    rank: "STAR – 9",
    totalDipInvestment: 200000, // +200000 from previous
    reward: "1% on Daily Total Team Business",
    teamLevels: 15,
    duration: 300,
  },
  {
    rank: "STAR - 10",
    totalDipInvestment: 500000, // +500000 from previous
    reward: "1.5% on Daily Total Team Business",
    teamLevels: 15,
    duration: 365,
  },
];

// ============================================
// MEMBERSHIP LOYALTY REWARD
// ============================================
export const MEMBERSHIP_LOYALTY_REWARD = [
  {
    membership: "VIP-1",
    directTeam: "5 Direct Referrals",
    rank: "STAR-1",
    dailyReward: 1, // USDT
    duration: 30, // days
  },
  {
    membership: "VIP-2",
    directTeam: "5 VIP-1",
    rank: "STAR-2",
    dailyReward: 2.5,
    duration: 30,
  },
  {
    membership: "VIP-3",
    directTeam: "5 VIP-2",
    rank: "STAR-3",
    dailyReward: 5,
    duration: 30,
  },
  {
    membership: "VIP-4",
    directTeam: "5 VIP-3",
    rank: "STAR-4",
    dailyReward: 10,
    duration: 30,
  },
  {
    membership: "VIP-5",
    directTeam: "5 VIP-4",
    rank: "STAR-5",
    dailyReward: 15,
    duration: 30,
  },
  {
    membership: "VIP-6",
    directTeam: "5 VIP-5",
    rank: "STAR-6",
    dailyReward: 40,
    duration: 30,
  },
  {
    membership: "VIP-7",
    directTeam: "5 VIP-6",
    rank: "STAR-7",
    dailyReward: 80,
    duration: 30,
  },
  {
    membership: "VIP-8",
    directTeam: "5 VIP-7",
    rank: "STAR-8",
    dailyReward: 160,
    duration: 30,
  },
  {
    membership: "VIP-9",
    directTeam: "5 VIP-8",
    rank: "STAR-9",
    dailyReward: 320,
    duration: 30,
  },
  {
    membership: "VIP-10",
    directTeam: "5 VIP-9",
    rank: "STAR-10",
    dailyReward: 800,
    duration: 30,
  },
];

// ============================================
// SIP PACKAGES
// ============================================
export const SIP_PACKAGES = [
  {
    id: 1,
    title: "SIP Monthly",
    minAmount: 1,
    paymentDays: [1], // Every 1st day of the month
    dailyRoi: 0.3,
    maxReturn: 200,
    duration: { min: 24, max: 240 }, // days
  },
  {
    id: 2,
    title: "SIP Bi-Weekly",
    minAmount: 1,
    paymentDays: [14, 28], // Every 14th & 28th of the month
    dailyRoi: 0.4,
    maxReturn: 200,
    duration: { min: 24, max: 240 },
  },
  {
    id: 3,
    title: "SIP Weekly",
    minAmount: 1,
    paymentDays: [7, 14, 21, 28], // Every 7th, 14th, 21st & 28th of the month
    dailyRoi: 0.5,
    maxReturn: 200,
    duration: { min: 24, max: 240 },
  },
];

// SIP Network Growth Reward (same as Network Growth Reward)
export const SIP_NETWORK_GROWTH_REWARD = NETWORK_GROWTH_REWARD;

// ============================================
// STACKING PACKAGES
// ============================================
export const STACKING_PACKAGES = [
  {
    id: 1,
    title: "Stacking Package 1",
    stakingProfit: 2,
    principalReturn: 1,
    maxReturn: 300,
  },
  {
    id: 2,
    title: "Stacking Package 2",
    stakingProfit: 3,
    principalReturn: 1,
    maxReturn: 400,
  },
  {
    id: 3,
    title: "Stacking Package 3",
    stakingProfit: 4,
    principalReturn: 1,
    maxReturn: 500,
  },
  {
    id: 4,
    title: "Stacking Package 4",
    stakingProfit: 5,
    principalReturn: 1,
    maxReturn: 600,
  },
  {
    id: 5,
    title: "Stacking Package 5",
    stakingProfit: 6,
    principalReturn: 1,
    maxReturn: 700,
  },
];

// Stacking Network Growth Reward
export const STACKING_NETWORK_GROWTH_REWARD = [
  {
    level: 1,
    percentage: 5.00,
    requirement: "1 Active Direct Referral",
  },
  {
    level: 2,
    percentage: 4.00,
    requirement: "+1 Active Direct Referral",
  },
  {
    level: 3,
    percentage: 3.00,
    requirement: "+1 Active Direct Referral",
  },
  {
    level: 4,
    percentage: 2.00,
    requirement: "+1 Active Direct Referral",
  },
  {
    level: 5,
    percentage: 1.00,
    requirement: "+1 Active Direct Referral",
  },
];

// ============================================
// AUTOMATED STACKING
// ============================================
export const AUTOMATED_STACKING = [
  {
    id: 1,
    title: "Automated Stacking Tier 1",
    min: 10,
    max: 100,
    withdrawalBonus: 20, // percentage on every withdrawal
  },
  {
    id: 2,
    title: "Automated Stacking Tier 2",
    min: 200,
    max: 1000,
    withdrawalBonus: 25,
  },
  {
    id: 3,
    title: "Automated Stacking Tier 3",
    min: 1100,
    max: 10000,
    withdrawalBonus: 30,
  },
  {
    id: 4,
    title: "Automated Stacking Tier 4",
    min: 11000,
    max: 50000,
    withdrawalBonus: 35,
  },
  {
    id: 5,
    title: "Automated Stacking Tier 5",
    min: 51000,
    max: Infinity,
    withdrawalBonus: 40,
  },
];

// ============================================
// PLATFORM PARTNERSHIP
// ============================================
export const PLATFORM_PARTNERSHIP = [
  {
    tier: "Bronze",
    platformInvestment: 10000,
    reward: "5% on Daily Total Team Business",
    maxReturn: 400,
  },
  {
    tier: "Silver",
    platformInvestment: 25000,
    reward: "7% on Daily Total Team Business",
    maxReturn: 500,
  },
  {
    tier: "Gold",
    platformInvestment: 50000,
    reward: "10% on Daily Total Team Business",
    maxReturn: 600,
  },
  {
    tier: "Platinum",
    platformInvestment: 100000,
    reward: "5% Platform Turnover Club",
    maxReturn: 800,
  },
  {
    tier: "Diamond",
    platformInvestment: 500000,
    reward: "10% Platform Turnover Club",
    maxReturn: 1000,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get staking package by investment amount
 */
export const getStakingPackageByAmount = (amount) => {
  return STAKING_PACKAGES.find(
    (pkg) => amount >= pkg.min && (pkg.max === Infinity || amount <= pkg.max)
  );
};

/**
 * Get automated stacking tier by investment amount
 */
export const getAutomatedStackingTier = (amount) => {
  return AUTOMATED_STACKING.find(
    (tier) => amount >= tier.min && (tier.max === Infinity || amount <= tier.max)
  );
};

/**
 * Get platform partnership tier by investment amount
 */
export const getPlatformPartnershipTier = (amount) => {
  return PLATFORM_PARTNERSHIP.find((tier) => amount >= tier.platformInvestment);
};

/**
 * Calculate total possible return for a staking package
 */
export const calculateStakingReturn = (packageData, investmentAmount) => {
  if (!packageData) return 0;
  return (investmentAmount * packageData.maxReturn) / 100;
};

