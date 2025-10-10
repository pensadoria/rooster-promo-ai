import { motion } from "framer-motion";

const EggAnimation = () => {
  return (
    <div className="relative w-32 h-40 mx-auto mb-8">
      {/* Glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-br from-[#FF2A00]/10 via-[#FF5001]/10 to-[#FFB800]/10"
        style={{ transform: "scale(1.3)" }}
      />

      {/* Main egg container */}
      <motion.div
        animate={{
          rotate: [-3, 3, -3, 3, -2, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
        className="relative w-full h-full"
      >
        {/* Egg shell */}
        <svg
          viewBox="0 0 120 150"
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse
            cx="60"
            cy="145"
            rx="35"
            ry="8"
            fill="rgba(1, 32, 63, 0.05)"
          />

          {/* Egg body - transparent with outline only */}
          <motion.path
            d="M 60 140 C 40 140, 25 120, 25 90 C 25 60, 35 20, 60 10 C 85 20, 95 60, 95 90 C 95 120, 80 140, 60 140 Z"
            fill="none"
            stroke="#01203F"
            strokeWidth="2.5"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="crackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01203F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#01203F" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Cracks - animated (adjusted for upright egg) */}
          <motion.g
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0.8, 1],
              opacity: [0, 1, 1, 0.7, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          >
            {/* Main crack - from middle going down */}
            <path
              d="M 60 70 L 55 85 L 60 100 L 58 115"
              stroke="url(#crackGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Branch crack 1 */}
            <path
              d="M 55 85 L 48 90 L 45 98"
              stroke="url(#crackGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Branch crack 2 */}
            <path
              d="M 60 100 L 68 102 L 72 108"
              stroke="url(#crackGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Small cracks */}
            <path
              d="M 58 115 L 62 122"
              stroke="url(#crackGradient)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Sparkles around egg */}
          <motion.g
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <circle cx="20" cy="50" r="2" fill="#FFB800" opacity="0.8" />
            <circle cx="100" cy="70" r="2" fill="#FF5001" opacity="0.8" />
            <circle cx="30" cy="100" r="1.5" fill="#FF2A00" opacity="0.8" />
            <circle cx="90" cy="40" r="1.5" fill="#FFB800" opacity="0.8" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Subtle particles */}
      <motion.div
        className="absolute -top-2 left-1/2 -translate-x-1/2"
        animate={{
          y: [-5, -15, -5],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <span className="text-2xl">✨</span>
      </motion.div>
    </div>
  );
};

export default EggAnimation;
