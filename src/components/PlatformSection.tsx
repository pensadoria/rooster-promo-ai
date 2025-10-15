import { motion } from "framer-motion";
import { Edit3, Settings, LineChart } from "lucide-react";

const PlatformSection = () => {
  return (
    <section id="platform" className="relative bg-[#f2f6fd] py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-[1280px] relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#01203f] text-[32px] md:text-[44px] lg:text-[48px] font-black leading-[1.1]">
            Como tudo funciona na prática
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[134px] h-[2px] bg-gradient-to-r from-[#ff0000] to-[#ff5001] rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-[1]">
            {/* Card 01 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative flex flex-col items-center">
              <div className="relative -top-6 size-20 rounded-full bg-gradient-to-b from-[#1e66ff] to-[#01203f] flex items-center justify-center shadow-lg">
                <Edit3 className="w-6 h-6 text-white" />
              </div>
              <div className="w-full bg-white rounded-2xl shadow-sm px-6 py-8 border border-black/5 h-full min-h-[167px]">
                <div className="text-center text-[14px] font-bold text-[red]">01</div>
                <h3 className="mt-2 text-center text-[#01203f] text-[20px] md:text-[24px] font-bold">Crie</h3>
                <p className="mt-3 text-center text-[16px] text-[rgba(1,32,63,0.8)]">
                  Promoções ou programas de pontos em poucos cliques.
                </p>
              </div>
            </motion.div>

            {/* Card 02 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="relative flex flex-col items-center">
              <div className="relative -top-6 size-20 rounded-full bg-gradient-to-b from-[#ff5001] to-[#ff0000] flex items-center justify-center shadow-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div className="w-full bg-white rounded-2xl shadow-sm px-6 py-8 border border-black/5 h-full min-h-[167px]">
                <div className="text-center text-[14px] font-bold text-[red]">02</div>
                <h3 className="mt-2 text-center text-[#01203f] text-[20px] md:text-[24px] font-bold">Automatize</h3>
                <p className="mt-3 text-center text-[16px] text-[rgba(1,32,63,0.8)]">
                  Leitura de notas, regras e validação com IA.
                </p>
              </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative flex flex-col items-center">
              <div className="relative -top-6 size-20 rounded-full bg-gradient-to-b from-[#1e66ff] to-[#01203f] flex items-center justify-center shadow-lg">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <div className="w-full bg-white rounded-2xl shadow-sm px-6 py-8 border border-black/5 h-full min-h-[167px]">
                <div className="text-center text-[14px] font-bold text-[red]">03</div>
                <h3 className="mt-2 text-center text-[#01203f] text-[20px] md:text-[24px] font-bold">Acompanhe</h3>
                <p className="mt-3 text-center text-[16px] text-[rgba(1,32,63,0.8)]">
                  Resultados em tempo real no dashboard.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
