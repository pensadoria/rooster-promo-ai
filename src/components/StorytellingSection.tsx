import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Heart, Check } from "lucide-react";
import { Link } from "react-router-dom";

const StorytellingSection = () => {
  return (
    <section className="relative py-24 md:py-28 bg-white overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-[900px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-black text-[#01203F] leading-[1.1] mb-4">
            Duas ferramentas
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1240px] mx-auto mb-16">
          {/* Rooster Fidelidades */}
          <div className="bg-white border border-[#01203F]/10 rounded-2xl p-8 shadow-sm h-[327px]">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#01203F]" />
            </div>
            <h3 className="text-3xl font-bold text-[#01203F] mb-6">
              Rooster Fidelidades
            </h3>
            <p className="text-[17px] text-[rgba(1,32,63,0.8)] mb-8 leading-relaxed">
              Transforme cada compra em um motivo para voltar. Sistema automático de pontos e cashback integrado às suas promoções.
            </p>
            <Link to="/fidelidades" className="inline-flex items-center gap-2 text-[#01203F] font-semibold p-0 h-auto hover:text-[#01203F]">
              Ver mais
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Rooster Promoções */}
          <div className="bg-[#01203F] rounded-2xl p-8 shadow-sm h-[327px]">
            <div className="w-16 h-16 rounded-full bg-[rgba(255,0,0,0.15)] flex items-center justify-center mb-6">
              <Gift className="w-8 h-8 text-[#FF0000]" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Rooster Promoções
            </h3>
            <p className="text-[17px] text-[rgba(255,255,255,0.85)] mb-8 leading-relaxed">
              Crie promoções automáticas e acompanhe tudo em tempo real. OCR + IA para leitura de notas e validação instantânea.
            </p>
            <Link to="/promocoes" className="inline-flex items-center gap-2 text-white font-semibold p-0 h-auto hover:text-white">
              Ver mais
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center max-w-[900px] mx-auto">
          <p className="text-xl text-[rgba(1,32,63,0.8)]">
            <span>Promoções atraem. Fidelidade mantém.</span>
            <span className="font-bold text-[#FF0000]"> Juntas, elas fazem seu negócio crescer.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
