import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const ROICalculator = () => {
  return (
    <section id="roi" className="bg-gradient-to-br from-[#ff5001] to-[#ff3000] py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Calcule o impacto da Rooster no seu negócio
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Descubra em minutos o retorno sobre investimento das suas campanhas.
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="investment" className="text-[#01203f] font-semibold text-base">
                  Investimento atual
                </Label>
                <Input
                  id="investment"
                  type="text"
                  placeholder="R$ 50.000"
                  className="h-[60px] rounded-xl border-2 border-gray-200 focus:border-red-600 transition-colors text-base"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="return" className="text-[#01203f] font-semibold text-base">
                  Retorno médio esperado
                </Label>
                <Input
                  id="return"
                  type="text"
                  placeholder="R$ 200.000"
                  className="h-[60px] rounded-xl border-2 border-gray-200 focus:border-red-600 transition-colors text-base"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="space-y-3">
              <Label htmlFor="duration" className="text-[#01203f] font-semibold text-base">
                Duração da campanha (dias)
              </Label>
              <Input
                id="duration"
                type="text"
                placeholder="30"
                className="h-[60px] rounded-xl border-2 border-gray-200 focus:border-red-600 transition-colors text-base"
              />
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white h-[60px] rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Calcular ROI
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
