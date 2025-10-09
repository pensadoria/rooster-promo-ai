import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ROICalculator = () => {
  return (
    <section id="roi" className="bg-gradient-to-br from-[#ff5001] to-[#ff3000] py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Quanto você pode economizar com automação?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Use nossa calculadora gratuita e descubra o impacto real da Rooster no seu negócio.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Clock className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Economize Tempo</h3>
            <p className="text-white/80 text-sm">Reduza até 80% do tempo gasto em validações manuais</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Reduza Custos</h3>
            <p className="text-white/80 text-sm">Diminua fraudes e perdas operacionais significativamente</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Calculator className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Veja os Números</h3>
            <p className="text-white/80 text-sm">Simulação baseada em dados reais do mercado</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/calculadora">
            <Button className="bg-white hover:bg-white/95 text-[#ff5001] h-[60px] px-10 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all">
              Calcular minha economia
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-white/70 text-sm mt-4">
            ✓ Grátis • ✓ Sem cadastro • ✓ Resultados em segundos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
