import { motion } from "framer-motion";
import { Zap, BarChart3, Shield, Users2, LineChart, BadgePercent } from "lucide-react";

const TechnologySection = () => {
  return (
    <section id="tech-section" className="bg-white py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-[1280px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#01203f] text-[32px] md:text-[44px] lg:text-[48px] font-black leading-[1.1]">
            Resultados que você vê e sente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-white/80 rounded-2xl border border-black/5 shadow-sm p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-9 h-9 text-[#F5C518]" />
            </div>
            <h3 className="text-[#01203f] text-[20px] md:text-[24px] font-bold mb-2">Automação total</h3>
            <p className="text-[16px] text-[rgba(1,32,63,0.8)]">Sem planilhas, sem processos manuais.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }} className="bg-white/80 rounded-2xl border border-black/5 shadow-sm p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="w-9 h-9 text-[#3B82F6]" />
            </div>
            <h3 className="text-[#01203f] text-[20px] md:text-[24px] font-bold mb-2">Analytics em tempo real</h3>
            <p className="text-[16px] text-[rgba(1,32,63,0.8)]">Métricas, vendas e engajamento em um só painel.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white/80 rounded-2xl border border-black/5 shadow-sm p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <BadgePercent className="w-9 h-9 text-[#F59E0B]" />
            </div>
            <h3 className="text-[#01203f] text-[20px] md:text-[24px] font-bold mb-2">Resultados reais</h3>
            <p className="text-[16px] text-[rgba(1,32,63,0.8)]">Negócios vendendo até 30% mais com Rooster.</p>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-8 md:mt-12 bg-white/50 border border-black/5 rounded-2xl px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-[16px] text-[rgba(1,32,63,0.8)]">
            <div className="flex items-center gap-2">
              <Users2 className="w-4 h-4 text-[#FF2A00]" />
              <span className="font-semibold">+1M usuários impactados</span>
            </div>
            <div className="flex items-center gap-2">
              <LineChart className="w-4 h-4 text-[#FF2A00]" />
              <span className="font-semibold">+30 campanhas simultâneas</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#FF2A00]" />
              <span className="font-semibold">98% de validações automáticas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
