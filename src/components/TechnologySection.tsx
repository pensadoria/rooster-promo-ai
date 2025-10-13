import { motion, useReducedMotion } from "framer-motion";
import { BarChart, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import dashboardImage from "@/assets/dashboard-analytics.png";
import teamHappyImage from "@/assets/team-happy-sales.jpg";

const TechnologySection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const features = [
    {
      id: "panel",
      icon: BarChart,
      badge: "Configuração em minutos",
      title: "Painel de campanhas",
      description: "Crie, publique e acompanhe sem planilhas.",
      gradient: "linear-gradient(135deg, #2B6FEA 0%, #7A3DF3 50%, #18C1E5 100%)",
      demo: "panel"
    },
    {
      id: "metrics",
      icon: TrendingUp,
      badge: "+40% em 30 dias",
      title: "Métricas em tempo real",
      description: "KPIs claros e alertas inteligentes.",
      gradient: "linear-gradient(135deg, #00B894 0%, #00C3B2 50%, #00A6D6 100%)",
      demo: "metrics"
    },
    {
      id: "rook",
      icon: Sparkles,
      badge: "OCR ~2s/nota",
      title: "Rook, seu assistente IA",
      description: "Lê, valida e sugere melhorias.",
      gradient: "linear-gradient(135deg, #FF7A00 0%, #FF4D2E 50%, #E83E8C 100%)",
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
            className="text-[32px] md:text-[48px] leading-[1.1] font-extrabold tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif', color: '#011E36' }}
          >
            Tecnologia que simplifica, <span style={{ color: '#FF2A00' }}>e vende</span>.
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-[18px] leading-[1.55] font-medium max-w-3xl mx-auto"
            style={{ color: '#64748B' }}
          >
            Sites automáticos, OCR + IA e métricas em tempo real. Sem planilhas.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Cards Stack */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                role="group"
                aria-label={`${feature.title} - ${feature.description}`}
                className="group/card"
              >
                <div
                  className="relative h-[280px] rounded-[24px] border border-white/[0.08] backdrop-blur-md p-6 md:p-7 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-white/[0.13] hover:shadow-[0_16px_44px_rgba(0,0,0,0.27)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2A00]"
                  style={{
                    background: feature.gradient,
                    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)',
                  }}
                  tabIndex={0}
                >
                  {/* Glass overlay */}
                  <div 
                    className="absolute inset-0 backdrop-blur-[6px] pointer-events-none transition-all duration-300 group-hover/card:backdrop-blur-[10px]"
                    style={{ background: 'rgba(0, 0, 0, 0.05)' }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Top section: Icon and Badge */}
                    <div className="space-y-4">
                      {/* Icon circle */}
                      <motion.div
                        className="w-14 h-14 rounded-full border border-white/[0.14] flex items-center justify-center"
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.08)',
                          opacity: 0.88
                        }}
                        animate={prefersReducedMotion ? {} : {
                          y: [0, -4, 0],
                          opacity: [0.85, 1, 0.85]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.12, delay: index * 0.15 + 0.3 }}
                        className="inline-block px-3 py-1.5 rounded-full text-[12px] leading-[1.3] font-medium"
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          color: '#FFFFFF',
                        }}
                      >
                        {feature.badge}
                      </motion.div>
                    </div>

                    {/* Bottom section: Title and Description */}
                    <div className="space-y-3">
                      <h3 
                        className="text-[22px] leading-[1.27] font-bold text-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="text-[16px] leading-[1.5] text-white/90"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {feature.description}
                      </p>

                      {/* Ver em ação button */}
                      <button
                        onClick={() => setActiveDemo(activeDemo === feature.demo ? null : feature.demo)}
                        className="mt-2 text-[14px] font-medium text-white/80 hover:text-white border border-white/30 hover:border-white/50 px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10"
                      >
                        {activeDemo === feature.demo ? 'Fechar demo' : 'Ver em ação'}
                      </button>

                      {/* Mini demo visualization */}
                      {activeDemo === feature.demo && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm"
                        >
                          {feature.demo === 'panel' && (
                            <div className="space-y-2">
                              <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-white/80 rounded-full"
                                  initial={{ width: '0%' }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 1.2, ease: 'easeOut' }}
                                />
                              </div>
                              <p className="text-[11px] text-white/70">Criando campanha...</p>
                            </div>
                          )}
                          {feature.demo === 'metrics' && (
                            <div className="flex items-end gap-1 h-16">
                              {[30, 50, 70, 85, 95].map((height, i) => (
                                <motion.div
                                  key={i}
                                  className="flex-1 bg-white/70 rounded-t"
                                  initial={{ height: 0 }}
                                  animate={{ height: `${height}%` }}
                                  transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                                />
                              ))}
                            </div>
                          )}
                          {feature.demo === 'ocr' && (
                            <div className="space-y-2">
                              <motion.div
                                className="w-full h-12 border-2 border-dashed border-white/40 rounded flex items-center justify-center"
                                animate={{ borderColor: ['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.4)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <p className="text-[10px] text-white/70">Lendo cupom fiscal...</p>
                              </motion.div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Image 1 - Laptop with graphs (background, top-left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 left-0 w-[75%] z-10"
            >
              <div 
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                style={{
                  aspectRatio: '16/10',
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

            {/* Image 2 - People smiling (foreground, bottom-right) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-[70%] z-20"
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
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4 mt-12"
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
