import { motion } from "framer-motion";
import { Heart, Rocket } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="bg-[#f2f6fd] py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#01203f] text-[32px] md:text-[44px] lg:text-[48px] font-black leading-[1.1]">
            Escolha o melhor caminho para seu crescimento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card Fidelidades */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-10 text-center bg-[#01203f] shadow-[0_20px_60px_rgba(1,32,63,0.25)]"
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(255,0,0,0.35)] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Rooster Fidelidades</h3>
            <p className="text-[16px] text-white/90 mb-6">Fidelize clientes com cashback automático.</p>
            <button className="w-full h-12 rounded-xl border border-white text-white font-semibold">
              Ver planos de fidelidade
            </button>
          </motion.div>

          {/* Card Promoções */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-10 text-center bg-white shadow-[0_20px_60px_rgba(1,32,63,0.15)]"
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(1,32,63,0.15)] flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-6 h-6 text-[#01203f]" />
            </div>
            <h3 className="text-2xl font-bold text-[#01203f] mb-2">Rooster Promoções</h3>
            <p className="text-[16px] text-[rgba(1,32,63,0.9)] mb-6">Crie promoções que vendem de verdade.</p>
            <button className="w-full h-12 rounded-xl bg-[#01203f] text-white font-semibold">
              Ver planos de promoções
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
