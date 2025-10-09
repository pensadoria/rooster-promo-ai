import { motion } from "framer-motion";
import { ArrowRight, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CasesSection = () => {
  const cases = [
    {
      title: "Campanha de Natal",
      description: "Crescimento de 40% nas vendas em apenas 30 dias.",
      gradient: "from-pink-500 via-purple-500 to-blue-500"
    },
    {
      title: "Promoção Relâmpago",
      description: "Conversões dobradas com automação inteligente.",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      title: "Programa de Fidelidade",
      description: "100 mil novos clientes cadastrados.",
      gradient: "from-blue-400 via-cyan-400 to-teal-400"
    }
  ];

  return (
    <section id="cases" className="bg-[#01203f] py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-4xl mx-auto">
            A plataforma por trás das maiores campanhas
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto">
            Histórias reais de marcas que cresceram com a Rooster.
          </p>
        </motion.div>

        {/* Cases Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image placeholder with gradient */}
              <div className={`h-64 bg-gradient-to-br ${caseItem.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#01203f]">
                  {caseItem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseItem.description}
                </p>
                <Link to="/demonstracao" className="flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all duration-300 group/link">
                  Ver case completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 mx-auto max-w-3xl"
        >
          <div className="relative group">
            {/* Glassmorphism Card */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5001]/5 via-transparent to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="relative grid md:grid-cols-2 gap-10 md:gap-16">
                {/* Projetos Entregues */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-5 group/stat"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000] to-[#FF5001] flex items-center justify-center shadow-lg group-hover/stat:scale-110 transition-transform duration-300">
                      <Award className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-5xl md:text-6xl font-black text-white mb-1 tracking-tight">+30</div>
                    <div className="text-white/80 text-base font-medium">Projetos entregues</div>
                  </div>
                </motion.div>

                {/* Divider - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {/* Usuários Impactados */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-5 group/stat"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000] to-[#FF5001] flex items-center justify-center shadow-lg group-hover/stat:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-5xl md:text-6xl font-black text-white mb-1 tracking-tight">+1M</div>
                    <div className="text-white/80 text-base font-medium">Usuários impactados</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FF0000]/20 to-[#FF5001]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSection;
