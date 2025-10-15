import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const currentState = [
    "Campanhas manuais e demoradas",
    "Pouca visibilidade dos resultados",
    "Falta de integração entre dados"
  ];

  const withRooster = [
    "Promoções automáticas e personalizáveis",
    "Dashboards com métricas instantâneas",
    "IA integrada ao seu fluxo de trabalho"
  ];

  return (
    <section className="bg-[#01203f] py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            De onde você está para onde pode chegar
          </h2>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Current State Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 rounded-2xl p-6 md:p-12 space-y-6 md:space-y-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Como é hoje</h3>
            </div>

            <ul className="space-y-4">
              {currentState.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-white/60 mt-1 flex-shrink-0" />
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Rooster Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-600/20 to-red-700/10 border-2 border-red-600/30 rounded-2xl p-6 md:p-12 space-y-6 md:space-y-8 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-red-600/5 blur-3xl" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Com a Rooster</h3>
              </div>

              <ul className="space-y-4">
                {withRooster.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                    <span className="text-white leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
