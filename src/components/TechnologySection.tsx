import { motion, useReducedMotion } from "framer-motion";
import { BarChart, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import dashboardImage from "@/assets/dashboard-analytics.png";
import teamHappyImage from "@/assets/team-happy-sales.jpg";

const TechnologySection = () => {
  const prefersReducedMotion = useReducedMotion();

  const features = [
    {
      id: "panel",
      icon: BarChart,
      badge: "Configuração em minutos",
      title: "Painel de campanhas",
      description: "Crie, publique e acompanhe sem planilhas.",
      bgColor: "#01203F", // Primary - azul escuro
      accentColor: "#FF5001", // Highlight - laranja
      demo: "panel"
    },
    {
      id: "metrics",
      icon: TrendingUp,
      badge: "+40% em 30 dias",
      title: "Métricas em tempo real",
      description: "KPIs claros e alertas inteligentes.",
      bgColor: "#FFFFFF", // Neutral light - branco
      textColor: "#01203F", // Primary - azul escuro
      accentColor: "#FF0000", // Accent - vermelho
      demo: "metrics"
    },
    {
      id: "rook",
      icon: Sparkles,
      badge: "OCR ~2s/nota",
      title: "Rook, seu assistente IA",
      description: "Lê, valida e sugere melhorias.",
      bgColor: "#0344DC", // Secondary - azul claro
      accentColor: "#FFFFFF", // Branco
      iconColor: "#0344DC", // Azul claro para o ícone
      demo: "ocr"
    }
  ];

  return (
    <section 
      id="tech-section"
      className="relative py-24 px-6 md:px-8 overflow-hidden"
      style={{
        background: '#FFFFFF',
      }}
    >
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Radial vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(245, 248, 250, 0) 0%, rgba(245, 248, 250, 0.3) 100%)',
        }}
      />

      <div className="container mx-auto max-w-[1280px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          {/* Title */}
          <h2
            className="text-[28px] md:text-[48px] leading-[1.1] font-extrabold tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', color: '#011E36' }}
          >
            Tecnologia que simplifica, <span style={{ color: '#FF2A00' }}>e vende</span>.
          </h2>

          {/* Subtitle */}
          <p
            className="text-[16px] md:text-[18px] leading-[1.55] font-medium max-w-3xl mx-auto"
            style={{ color: '#64748B' }}
          >
            Sites automáticos, OCR + IA e métricas em tempo real. Sem planilhas.
          </p>
        </motion.div>

        {/* Inverted Pyramid Layout */}
        {/* First Row - Feature Cards Horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {features.map((feature, index) => (
            <motion.a
              key={feature.id}
              href="/contato"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              role="link"
              aria-label={`${feature.title} - ${feature.description}. Clique para ir ao formulário de contato`}
              className="group/card cursor-pointer block no-underline"
            >
              <div
                className="relative min-h-[240px] h-auto md:h-[260px] rounded-[20px] md:rounded-[24px] border-2 p-6 md:p-8 overflow-hidden transition-all duration-300"
                style={{
                  background: feature.bgColor,
                  borderColor: feature.accentColor,
                  boxShadow: `0 8px 24px ${feature.bgColor}40`,
                }}
              >
                {/* Animated accent bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: feature.accentColor }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                />

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${feature.accentColor}, transparent 70%)`
                  }}
                />

                {/* Content - Centralized */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
                  {/* Icon circle */}
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: feature.accentColor,
                      boxShadow: `0 4px 16px ${feature.accentColor}60`,
                    }}
                    animate={prefersReducedMotion ? {} : {
                      y: [0, -6, 0],
                      boxShadow: [
                        `0 4px 16px ${feature.accentColor}60`,
                        `0 8px 24px ${feature.accentColor}80`,
                        `0 4px 16px ${feature.accentColor}60`,
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <feature.icon
                      className="w-7 h-7 md:w-8 md:h-8"
                      strokeWidth={2}
                      style={{
                        color: feature.iconColor || (feature.bgColor === '#FFFFFF' ? '#01203F' : '#FFFFFF')
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-[20px] md:text-[22px] leading-[1.2] font-bold tracking-tight"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: feature.textColor || '#FFFFFF'
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[14px] md:text-[15px] leading-[1.5] max-w-[240px] md:max-w-[280px]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: feature.textColor ? `${feature.textColor}CC` : 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Click indicator */}
                  <motion.div
                    className="mt-1 md:mt-2 text-[12px] md:text-[13px] font-semibold"
                    style={{ color: feature.accentColor }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Saiba mais →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Second Row - Images with Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
          {/* Image 1 - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              style={{
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={dashboardImage}
                  alt="Dashboard de Analytics com gráficos de cupons e promoções"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Image 2 - Team */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              style={{
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              }}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={teamHappyImage}
                  alt="Equipe feliz comemorando vendas olhando computador"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Third Row - CTA Button Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            className="px-6 py-3 rounded-full font-semibold text-[16px] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A00] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            style={{
              background: '#FF2A00',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(255, 42, 0, 0.24)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 42, 0, 0.32)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 42, 0, 0.24)';
            }}
          >
            Agendar demonstração
          </Button>

        </motion.div>
      </div>

      {/* Reduced motion support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
