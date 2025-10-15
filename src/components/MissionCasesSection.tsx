import { motion } from "framer-motion";

const MissionCasesSection = () => {
  return (
    <section id="mission-cases" className="bg-[#F6F8FA] py-24 lg:py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#01203F] text-3xl md:text-5xl font-black"
          >
            Parceiros de Sucesso
          </motion.h2>
          <p className="text-[rgba(30,30,30,0.7)] text-base md:text-lg mt-3">
            Empresas que já transformaram seus resultados com a Rooster
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1216px] mx-auto">
          {["MARCA A","MARCA B","MARCA C","MARCA D","MARCA E","MARCA F"].map((label) => (
            <div key={label} className="bg-white rounded-xl h-24 flex items-center justify-center">
              <div className="bg-gray-200 rounded w-[128px] h-12 flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionCasesSection;
