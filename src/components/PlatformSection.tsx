import { motion } from "framer-motion";
import { BarChart3, Users, Sparkles, TrendingUp, Target, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const PlatformSection = () => {
  const processes = [
    {
      icon: BarChart3,
      title: "Monitore os resultados da sua promo",
      description: "Acompanhe cada participação, cupom validado e conversão. Tudo em tempo real, sem planilhas.",
      stats: [
        { label: "Participações", value: "1.2K", trend: "+12%" },
        { label: "Conversão", value: "8.4%", trend: "+3.2%" },
      ]
    },
    {
      icon: Users,
      title: "Identifique seu público",
      description: "Veja quem participa, de onde vem e o que compra. Insights prontos para ação.",
      stats: [
        { label: "Idade média", value: "32 anos", trend: "" },
        { label: "Região top", value: "SP", trend: "45%" },
      ]
    },
    {
      icon: Sparkles,
      title: "Comece a usar IA no seu negócio",
      description: "Leitura automática de notas fiscais e sugestões de melhorias. Sem trabalho manual.",
      stats: [
        { label: "Leitura", value: "~2s", trend: "" },
        { label: "Precisão", value: "99.2%", trend: "" },
      ]
    },
  ];

  return (
    <section id="platform" className="bg-[#01203F] py-24 lg:py-32 px-6 overflow-hidden relative">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="text-[#FF0000] text-sm font-bold tracking-widest uppercase">
              Nossa plataforma
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight">
            Veja sua campanha crescer em tempo real
          </h2>
          <p className="text-white/70 text-lg leading-[1.35] max-w-2xl mx-auto">
            Dashboards claros, insights automáticos e IA que trabalha por você.
          </p>
        </motion.div>

        {/* Main Content - Desktop: Side by side, Mobile: Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Computer Mockup with Dashboards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Glow effect behind computer */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/20 via-[#FF5001]/10 to-transparent blur-3xl opacity-50" />

            {/* Computer Mockup */}
            <div className="relative">
              {/* Screen bezel */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl">
                {/* Screen */}
                <div className="bg-[#0A1628] rounded-lg overflow-hidden aspect-video relative">
                  {/* Dashboard Content */}
                  <div className="absolute inset-0 p-6 space-y-4">
                    {/* Header with stats */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white/90 text-sm font-semibold mb-1">Campanha Natal 2024</h3>
                        <p className="text-white/50 text-xs">Atualizado agora</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                          <div className="text-white/90 text-xl font-bold">1.2K</div>
                          <div className="text-white/50 text-[10px]">Participações</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                          <div className="text-[#00FF88] text-xl font-bold">+12%</div>
                          <div className="text-white/50 text-[10px]">vs. semana</div>
                        </div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 h-32">
                      <div className="flex items-end justify-between h-full gap-2">
                        {[45, 62, 55, 73, 68, 82, 91, 78, 95, 100].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                            className="flex-1 bg-gradient-to-t from-[#FF0000] to-[#FF5001] rounded-t opacity-80"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Mini Cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Activity className="w-3 h-3 text-[#00FF88]" />
                          <span className="text-white/90 text-xs font-semibold">Taxa</span>
                        </div>
                        <div className="text-white text-lg font-bold">8.4%</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Target className="w-3 h-3 text-[#3B82F6]" />
                          <span className="text-white/90 text-xs font-semibold">Público</span>
                        </div>
                        <div className="text-white text-lg font-bold">18-35</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-3 h-3 text-[#FF5001]" />
                          <span className="text-white/90 text-xs font-semibold">ROI</span>
                        </div>
                        <div className="text-white text-lg font-bold">3.2x</div>
                      </div>
                    </div>

                    {/* Loading indicator */}
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2 text-white/40 text-xs"
                    >
                      <div className="w-1.5 h-1.5 bg-[#00FF88] rounded-full" />
                      Sincronizando dados...
                    </motion.div>
                  </div>
                </div>

                {/* Camera notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full" />
              </div>

              {/* Base */}
              <div className="h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl" />
              <div className="h-2 bg-gray-600 rounded-b-lg mx-auto w-32" />
            </div>
          </motion.div>

          {/* RIGHT: Processes List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {processes.map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000] to-[#FF5001] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  <div className="flex-1 space-y-3">
                    {/* Title */}
                    <h3 className="text-white text-xl font-bold leading-tight">
                      {process.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-base leading-relaxed">
                      {process.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4 pt-2">
                      {process.stats.map((stat, statIdx) => (
                        <div key={statIdx} className="flex items-baseline gap-2">
                          <span className="text-white/50 text-sm">{stat.label}:</span>
                          <span className="text-white font-bold text-lg">{stat.value}</span>
                          {stat.trend && (
                            <span className="text-[#00FF88] text-sm font-semibold">
                              {stat.trend}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#FF0000]/5 to-transparent transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <Link to="/demonstracao">
                <button className="w-full sm:w-auto bg-[#FF0000] hover:bg-[#FF5001] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Ver demonstração da plataforma
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
