import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wallet,
  Users,
  Twitter,
  Globe,
  Link,
  Shield,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Monitor,
  Cpu,
  Download,
} from "lucide-react";
import { LandingRouters } from "../../../constants/routes";

export const Hero = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    walletUsers: 3500000,
    twitterUsers: 800000,
    publicChains: 50,
    tokens: 3000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        walletUsers: prev.walletUsers + Math.floor(Math.random() * 10),
        twitterUsers: prev.twitterUsers + Math.floor(Math.random() * 5),
        publicChains: prev.publicChains,
        tokens: prev.tokens + Math.floor(Math.random() * 2),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Smartphone,
      text: "Multi-Platform",
      sub: "Mobile/Desktop/Hardware",
    },
    { icon: Globe, text: "50+ Blockchains", sub: "Universal Support" },
    { icon: Link, text: "3000+ Tokens", sub: "Extensive Storage" },
    { icon: Cpu, text: "Multi-chain DApps", sub: "Extension Support" },
  ];

  const keyTypes = [
    "Private Key",
    "Mnemonics",
    "Keystore Files",
    "Hardware Wallet",
  ];

  return (
    <div className="relative min-h-screen bg-rich-black overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Geometric Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--ecru) 1px, transparent 1px),
              linear-gradient(90deg, var(--ecru) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ecru rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -right-32 w-64 h-64 bg-chamoisee rounded-full mix-blend-overlay filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -left-32 w-72 h-72 bg-delft-blue-2 rounded-full mix-blend-overlay filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -20, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Math Wallet Badge */}
              <motion.div
                className="inline-flex items-center gap-3 bg-space-cadet border border-ecru/30 rounded-2xl px-6 py-3 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-ecru" />
                  <span className="text-ecru font-semibold text-sm">
                    MATH WALLET
                  </span>
                </div>
                <div className="w-1 h-1 bg-ecru/50 rounded-full"></div>
                <span className="text-beaver text-sm">
                  Universal Crypto Wallet
                </span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-ecru">Your Gateway to Web3</span>

                  <br />
                  <span className="text-ecru">Universe</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-beaver leading-relaxed max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Math Wallet is a multi-platform (mobile/desktop/hardware)
                  universal crypto wallet. Store{" "}
                  <span className="text-ecru font-semibold">
                    50+ blockchains
                  </span>{" "}
                  and{" "}
                  <span className="text-ecru font-semibold">3000+ tokens</span>{" "}
                  securely.
                </motion.p>
              </div>

              {/* Key Features */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-ecru font-semibold text-lg">
                  Unlock variety of key types:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {keyTypes.map((type, index) => (
                    <motion.div
                      key={type}
                      className="flex items-center gap-2 bg-space-cadet/80 px-4 py-2 rounded-xl border border-delft-blue backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, borderColor: "var(--ecru)" }}
                    >
                      <CheckCircle className="w-4 h-4 text-ecru" />
                      <span className="text-beaver text-sm font-medium">
                        {type}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.button
                  className="group bg-gradient-to-r from-ecru to-chamoisee text-rich-black font-bold py-4 px-8 rounded-xl text-lg flex items-center gap-3 justify-center shadow-2xl hover:shadow-3xl transition-all border-2 border-ecru/50"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(237, 207, 140, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(LandingRouters.USER_REGISTER)}
                >
                  <Wallet className="w-5 h-5 text-amber-200" />
                  <span className="text-amber-200">Download Wallet</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="group border-2 border-ecru text-ecru font-bold py-4 px-8 rounded-xl text-lg bg-gradient-to-r from-space-cadet/80 to-raisin-black/80 backdrop-blur-sm flex items-center gap-3 justify-center hover:border-chamoisee hover:bg-ecru/20 transition-all relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(237, 207, 140, 0.2)",
                    backgroundColor: "rgba(237, 207, 140, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(LandingRouters.USER_LOGIN)}
                >
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-ecru/10 to-chamoisee/10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <Sparkles className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Explore DApps</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[
                  {
                    icon: Users,
                    value: stats.walletUsers.toLocaleString() + "+",
                    label: "Wallet Users",
                    color: "text-ecru",
                  },
                  {
                    icon: Twitter,
                    value: stats.twitterUsers.toLocaleString() + "+",
                    label: "Twitter Users",
                    color: "text-ecru",
                  },
                  {
                    icon: Globe,
                    value: stats.publicChains + "+",
                    label: "Public Chains",
                    color: "text-ecru",
                  },
                  {
                    icon: Link,
                    value: stats.tokens + "+",
                    label: "Tokens Supported",
                    color: "text-ecru",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-space-cadet border border-delft-blue rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "var(--ecru)",
                      y: -5,
                    }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                    <div className="text-2xl font-bold text-ecru mb-1">
                      {stat.value}
                    </div>
                    <div className="text-beaver text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Features Card */}
              <motion.div
                className="bg-gradient-to-br from-space-cadet to-raisin-black border border-ecru/30 rounded-3xl p-8 relative overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(45deg, var(--chamoisee), var(--ecru), var(--chamoisee))",
                    padding: "2px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-ecru mb-6 text-center">
                    Universal Crypto Wallet
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        className="bg-space-cadet/80 border border-delft-blue rounded-xl p-4 text-center backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "var(--ecru)",
                          backgroundColor: "var(--raisin-black)",
                        }}
                      >
                        <feature.icon className="w-6 h-6 text-ecru mx-auto mb-2" />
                        <div className="text-ecru font-semibold text-sm mb-1">
                          {feature.text}
                        </div>
                        <div className="text-beaver text-xs">{feature.sub}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Unique Selling Point */}
                  <motion.div
                    className="bg-chamoisee/20 border border-chamoisee/30 rounded-xl p-4 text-center backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center justify-center gap-2 text-ecru font-semibold text-sm">
                      <Shield className="w-4 h-4" />
                      Only Extension Wallet Supporting Multi-chain DApps
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="bg-space-cadet border border-delft-blue rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <p className="text-beaver text-center mb-4 text-sm font-medium">
                  TRUSTED AND SECURE
                </p>
                <div className="flex justify-center items-center gap-6 text-ecru">
                  {[
                    { icon: Shield, text: "Client Side" },
                    { icon: Zap, text: "Instant" },
                    { icon: Globe, text: "Multi-Chain" },
                    { icon: CheckCircle, text: "Verified" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1, color: "var(--chamoisee)" }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Download Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-chamoisee to-ecru rounded-2xl flex items-center justify-center shadow-2xl z-50"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate(LandingRouters.USER_REGISTER)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Download className="text-space-cadet w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Hero;
