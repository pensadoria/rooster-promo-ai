import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Heart, Check } from "lucide-react";
import { Link } from "react-router-dom";

const StorytellingSection = () => {
  const checklistItem = (text: string) => (
    <div className="flex items-start gap-2">
      <Check className="w-4 h-4 text-[#FF2A00] mt-[2px]" />
      <span className="text-sm text-black/80">{text}</span>
    </div>
  );

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,42,0,0.02)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(3,68,220,0.02)_0%,transparent_50%)]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(1,32,63,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(1,32,63,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header (Como Funciona) */}
        <div className="text-center mb-16 max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-6xl font-black text-[#01203F] leading-tight mb-4">
            Como Funciona
          </h2>
          <p className="text-base md:text-lg text-[#1E1E1E]/70">
            Duas soluções poderosas que trabalham juntas para maximizar seus resultados
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1240px] mx-auto mb-16">
          {/* Rooster Promoções */}
          <div className="bg-white border border-[#01203F]/10 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="w-16 h-16 rounded-xl bg-[#FF5001]/10 border border-[#FF5001]/20 flex items-center justify-center mb-6">
              <Gift className="w-7 h-7 text-[#FF5001]" />
            </div>
            <h3 className="text-2xl font-bold text-[#01203F] mb-2">Rooster Promoções</h3>
            <p className="text-[16px] text-[rgba(30,30,30,0.7)] mb-6">
              Crie promoções rápidas e automatizadas. OCR + IA para validação de cupons em segundos, sem burocracia.
            </p>
            <div className="space-y-3">
              {checklistItem("Validação automática de cupons")}
              {checklistItem("Campanha pronta em minutos")}
              {checklistItem("Analytics em tempo real")}
            </div>
          </div>

          {/* Rooster Fidelidade */}
          <div className="bg-white border border-[#01203F]/10 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="w-16 h-16 rounded-xl bg-[#0344DC]/10 border border-[#0344DC]/20 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-[#0344DC]" />
            </div>
            <h3 className="text-2xl font-bold text-[#01203F] mb-2">Rooster Fidelidade</h3>
            <p className="text-[16px] text-[rgba(30,30,30,0.7)] mb-6">
              Transforme clientes em fãs com pontos e recompensas. Gamificação inteligente que gera engajamento real.
            </p>
            <div className="space-y-3">
              {checklistItem("Sistema de pontos flexível")}
              {checklistItem("Recompensas personalizadas")}
              {checklistItem("Engajamento contínuo")}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default StorytellingSection;
