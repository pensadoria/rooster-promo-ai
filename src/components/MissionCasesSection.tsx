import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Zap, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ClientItem {
  id: string;
  name: string;
  logo?: string;
  industry: string;
}

const clients: ClientItem[] = [
  { id: "1", name: "Hellmans", industry: "Alimentos" },
];

const MissionCasesSection = () => {
  return (
    <section id="mission-cases" className="bg-[#01203F] py-24 lg:py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN - STICKY (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:h-fit space-y-8"
          >
            {/* Overline */}
            <div className="inline-block">
              <span className="text-[#FF0000] text-sm font-bold tracking-widest uppercase">
                Nossa missão
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="font-black text-white text-5xl lg:text-[56px] leading-[1.0] tracking-tight">
              Simplificar o marketing promocional de forma rápida, segura e eficiente.
            </h1>

            {/* Paragraph */}
            <p className="text-white/80 text-lg leading-[1.35] max-w-xl">
              Crie campanhas que vendem — com sites automáticos, leitura de notas via IA e resultados em tempo real. Sem complicação, sem planilhas, só crescimento.
            </p>

            {/* Bullets with Icons - Produtos */}
            <div className="space-y-3 border-t border-white/10 pt-8">
              <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-4">
                O que entregamos
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Zap, text: "Sites de campanha automáticos e prontos" },
                  { icon: Sparkles, text: "Leitura de notas fiscais via IA" },
                  { icon: TrendingUp, text: "Métricas e resultados em tempo real" },
                  { icon: ShieldCheck, text: "Compliance e segurança garantidos" },
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center group-hover:bg-[#FF0000]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#FF0000]" strokeWidth={2} />
                    </div>
                    <span className="text-white text-base leading-relaxed pt-1.5">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contato">
                <button className="bg-[#FF0000] hover:bg-[#FF5001] text-white font-bold px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Falar com especialista
                </button>
              </Link>
              <Link to="/calculadora">
                <button className="text-white border-2 border-white/30 hover:border-white hover:bg-white/5 font-semibold px-8 h-12 rounded-full transition-all">
                  Calcular economia
                </button>
              </Link>
            </div>

            {/* KPI Strip */}
            
          </motion.div>

          {/* RIGHT COLUMN - CLIENT LOGOS (Cols 7-12) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 h-[800px]"
          >
            {/* Header */}
            <div className="mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Quem já simplificou com a Rooster
              </h2>
              <p className="text-white/60 text-base">
                Pequenos e médios varejistas que transformaram suas campanhas
              </p>
            </div>

            {/* Client Grid - Desktop with Vertical Scroll */}
            <div className="hidden md:block">
              <div 
                className="relative h-[600px] overflow-hidden rounded-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 140px, black calc(100% - 140px), transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 140px, black calc(100% - 140px), transparent 100%)'
                }}
              >
                <style>{`
                  @keyframes scroll-up {
                    from {
                      transform: translateY(0);
                    }
                    to {
                      transform: translateY(-50%);
                    }
                  }

                  .scroll-container {
                    animation: scroll-up 20s linear infinite;
                  }

                  .scroll-container:hover {
                    animation-play-state: paused;
                  }

                  @media (prefers-reduced-motion: reduce) {
                    .scroll-container {
                      animation: none;
                    }
                  }
                `}</style>
                
                <div className="scroll-container">
                  {/* Primeira lista de clientes */}
                  <div className="grid grid-cols-3 gap-5 mb-5">
                    {clients.map((client) => (
                      <div
                        key={`first-${client.id}`}
                        className="group relative bg-white/5 backdrop-blur-sm border border-[#FFFFFF14] rounded-[22px] p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(255,0,0,0.15)] cursor-pointer"
                        tabIndex={0}
                      >
                        {/* Content */}
                        <div className="space-y-3 text-center">
                          {/* Logo Placeholder - Circle with first letter */}
                          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#FF0000] to-[#FF5001] flex items-center justify-center">
                            <span className="text-white font-black text-2xl">
                              {client.name.charAt(0)}
                            </span>
                          </div>

                          {/* Client Name */}
                          <h3 className="text-white font-bold text-base leading-tight">
                            {client.name}
                          </h3>

                          {/* Industry */}
                          <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                            <span className="text-white/70 text-xs font-medium">
                              {client.industry}
                            </span>
                          </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#FF0000]/5 to-transparent transition-opacity duration-300 rounded-[22px] pointer-events-none" />
                      </div>
                    ))}

                    {/* Ver mais */}
                    <div className="group relative bg-white/5 backdrop-blur-sm border border-[#FFFFFF14] border-dashed rounded-[22px] p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.04] cursor-pointer flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white font-semibold text-sm">
                          Ver todos
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Segunda lista de clientes (duplicada para loop contínuo) */}
                  <div className="grid grid-cols-3 gap-5">
                    {clients.map((client) => (
                      <div
                        key={`second-${client.id}`}
                        className="group relative bg-white/5 backdrop-blur-sm border border-[#FFFFFF14] rounded-[22px] p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(255,0,0,0.15)] cursor-pointer"
                        tabIndex={0}
                      >
                        {/* Content */}
                        <div className="space-y-3 text-center">
                          {/* Logo Placeholder - Circle with first letter */}
                          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#FF0000] to-[#FF5001] flex items-center justify-center">
                            <span className="text-white font-black text-2xl">
                              {client.name.charAt(0)}
                            </span>
                          </div>

                          {/* Client Name */}
                          <h3 className="text-white font-bold text-base leading-tight">
                            {client.name}
                          </h3>

                          {/* Industry */}
                          <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                            <span className="text-white/70 text-xs font-medium">
                              {client.industry}
                            </span>
                          </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#FF0000]/5 to-transparent transition-opacity duration-300 rounded-[22px] pointer-events-none" />
                      </div>
                    ))}

                    {/* Ver mais (duplicado) */}
                    <div className="group relative bg-white/5 backdrop-blur-sm border border-[#FFFFFF14] border-dashed rounded-[22px] p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.04] cursor-pointer flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white font-semibold text-sm">
                          Ver todos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Grid - Mobile (Horizontal Carousel) */}
            <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide">
              {clients.map((client, idx) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="snap-start flex-shrink-0 w-[70vw] max-w-[240px] bg-white/5 backdrop-blur-sm border border-[#FFFFFF14] rounded-[22px] p-6 hover:bg-white/10 transition-all"
                >
                  <div className="space-y-3 text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#FF0000] to-[#FF5001] flex items-center justify-center">
                      <span className="text-white font-black text-xl">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-sm leading-tight">
                      {client.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                      <span className="text-white/70 text-xs font-medium">
                        {client.industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Ver mais - Mobile */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: clients.length * 0.05 }}
                className="snap-start flex-shrink-0 w-[70vw] max-w-[240px] bg-white/5 backdrop-blur-sm border border-[#FFFFFF14] border-dashed rounded-[22px] p-6 flex items-center justify-center"
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-semibold text-sm">
                    Ver todos
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

         <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#FF0000]" />
                    <span className="text-3xl font-black text-white">+30</span>
                  </div>
                  <p className="text-white/60 text-sm font-medium">Projetos entregues</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FF0000]" />
                    <span className="text-3xl font-black text-white">+1M</span>
                  </div>
                  <p className="text-white/60 text-sm font-medium">Usuários impactados</p>
                </div>
              </div>
            </motion.div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Quer ser o próximo?
                  </p>
                  <p className="text-white/60 text-sm">
                    Agende uma demonstração e veja como funciona
                  </p>
                </div>
                <Link to="/contato">
                  <button className="bg-[#FF0000] hover:bg-[#FF5001] text-white font-bold px-6 h-11 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2">
                    Falar com especialista
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
      </div>
    </section>
  );
};

export default MissionCasesSection;
