import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    "Sem cartão de crédito",
    "Setup em minutos",
    "Resultados imediatos"
  ];

  return (
    <section className="relative min-h-[924px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#01203f] pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,1,0.03)_0%,transparent_65%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1076px] mx-auto text-center space-y-8">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-[72px] font-black leading-tight text-white"
          >
            Promoções ágeis. Resultados reais.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-[590px] mx-auto leading-relaxed"
          >
            A plataforma que acelera o crescimento do seu negócio com tecnologia e simplicidade.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link to="/demonstracao">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 h-[60px] rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Criar minha campanha
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="ml-2">
                  <path d="M1 9H15M15 9L8 2M15 9L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </Link>
            <a href="#cases">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 h-[64px] rounded-xl font-semibold"
              >
                Ver cases
              </Button>
            </a>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <Check className="w-3.5 h-3.5 text-white/80" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/60 pt-4"
          >
            Confiado por 800+ empresas que crescem rápido
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
