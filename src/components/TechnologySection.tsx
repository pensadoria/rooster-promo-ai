import { motion } from "framer-motion";
import { BarChart, TrendingUp, Sparkles } from "lucide-react";

const TechnologySection = () => {
  const features = [
    {
      icon: BarChart,
      title: "Painel intuitivo de campanhas",
      description: "Gerencie todas as suas promoções em uma interface simples e poderosa.",
      gradient: "from-blue-500 via-indigo-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Métricas em tempo real",
      description: "Acompanhe o desempenho das suas campanhas com dados precisos e atualizados.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-600"
    },
    {
      icon: Sparkles,
      title: "O Rook, seu assistente inteligente",
      description: "IA que otimiza suas campanhas e sugere melhorias baseadas em dados.",
      gradient: "from-amber-500 via-orange-500 to-red-500"
    }
  ];

  return (
    <section className="bg-[#1e1e1e] py-32 px-6">
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
            A tecnologia que simplifica o marketing promocional
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto">
            Controle, métricas e inteligência em um só lugar.
          </p>
        </motion.div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group space-y-6"
            >
              {/* Image/Icon Card */}
              <div className={`h-80 rounded-2xl bg-gradient-to-br ${feature.gradient} relative overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>

              {/* Content */}
              <div className="text-center space-y-3 px-4">
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
