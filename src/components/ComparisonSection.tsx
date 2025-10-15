import { motion } from "framer-motion";
import { Heart, Rocket } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="bg-[#01203f] py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Vamos fazer sua promoção vender mais?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card Fidelidades */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#01203F]/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-6 h-6 text-[#01203F]" />
            </div>
            <h3 className="text-2xl font-bold text-[#01203F] mb-2">Rooster Fidelidades</h3>
            <p className="text-[16px] text-[rgba(1,32,63,0.7)] mb-6">Fidelize clientes e aumente recompra.</p>
            <button className="w-full h-[52px] rounded-xl border-2 border-[#01203F] text-[#01203F] font-semibold">
              Ver planos de fidelidade
            </button>
          </motion.div>

          {/* Card Promoções */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: '#FF2A00' }}
          >
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Rooster Promoções</h3>
            <p className="text-[16px] text-white/80 mb-6">Automatize campanhas e gere resultado.</p>
            <button className="w-full h-12 rounded-xl bg-white text-[#FF2A00] font-semibold">
              Falar com o time
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
