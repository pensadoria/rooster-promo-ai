import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle, Lightbulb, Rocket, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import EggAnimation from "./EggAnimation";

const StorytellingSection = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  const timelineSteps = [
    {
      id: "problema",
      icon: AlertCircle,
      year: "2020",
      title: "O Problema",
      description: "Varejistas perdiam dias configurando promoções. Planilhas, validações manuais, fraudes e zero visibilidade de resultados.",
      image: "📊",
      color: "#FF2A00"
    },
    {
      id: "premiafy",
      icon: Rocket,
      year: "2021-2022",
      title: "A Primeira Solução",
      description: "Nasceu a Premiafy para grandes marcas como Unilever e Royal Canin. IA para ler notas, dashboards inteligentes e campanhas enterprise de alto volume.",
      image: "🚀",
      color: "#0344DC"
    },
    {
      id: "rooster",
      icon: Lightbulb,
      year: "2023",
      title: "Democratizando",
      description: "Rooster traz essa mesma tecnologia para pequenos e médios varejistas. Automação acessível, sem complexidade, só resultados.",
      image: "💡",
      color: "#FF5001"
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,42,0,0.02)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(3,68,220,0.02)_0%,transparent_50%)]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(1,32,63,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(1,32,63,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-[800px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-[#FF2A00] font-bold text-sm tracking-wider uppercase">
              Nossa história
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-6xl font-black text-[#01203F] leading-tight mb-6">
            Como a Rooster nasceu
          </h2>

          <p className="text-lg md:text-xl text-[#01203F]/70 leading-relaxed mb-8">
            Uma jornada de simplicidade, inovação e confiança para transformar o marketing promocional.
          </p>

          {/* Animated Egg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <EggAnimation />
          </motion.div>
        </motion.div>

        {/* Timeline Horizontal */}
        <div ref={timelineRef} className="relative max-w-[1200px] mx-auto mb-16">
          {/* Timeline Line */}
          <div className="absolute top-[80px] left-0 right-0 h-[2px] bg-[#01203F]/10 hidden md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#FF2A00] via-[#0344DC] to-[#01203F] origin-left"
            />
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-[68px] left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                      className="relative"
                    >
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-[#01203F]/20 shadow-lg" />
                      <div
                        className="absolute inset-0 rounded-full blur-md opacity-50"
                        style={{ backgroundColor: step.color }}
                      />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white border border-[#01203F]/10 rounded-2xl p-6 md:p-8 shadow-lg hover:border-[#01203F]/20 hover:shadow-2xl transition-all group mt-20 md:mt-28"
                  >
                    {/* Icon Circle */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                          border: `2px solid ${step.color}30`
                        }}
                      >
                        <span className="text-4xl">{step.image}</span>
                        <div
                          className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"
                          style={{ backgroundColor: step.color }}
                        />
                      </motion.div>
                    </div>

                    {/* Year Badge */}
                    <div className="flex justify-center mb-4">
                      <span
                        className="px-4 py-1 rounded-full text-xs font-bold tracking-wider"
                        style={{
                          backgroundColor: `${step.color}15`,
                          color: step.color
                        }}
                      >
                        {step.year}
                      </span>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-2xl font-black mb-4 text-center"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[#01203F]/70 leading-relaxed text-center">
                      {step.id === "premiafy" ? (
                        <>
                          Nasceu a <span className="font-black text-[#0344DC]">Premiafy</span> para grandes marcas como Unilever e Royal Canin. IA para ler notas, dashboards inteligentes e campanhas enterprise de alto volume.
                        </>
                      ) : step.id === "rooster" ? (
                        <>
                          Rooster traz essa mesma tecnologia da <span className="font-black text-[#0344DC]">Premiafy</span> para pequenos e médios varejistas. Automação acessível, sem complexidade, só resultados.
                        </>
                      ) : (
                        step.description
                      )}
                    </p>

                    {/* Icon at bottom */}
                    <div className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                  </motion.div>

                  {/* Arrow between cards (desktop only) */}
                  {index < timelineSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                      className="absolute top-1/2 -right-6 transform -translate-y-1/2 hidden md:block z-30"
                    >
                      <ArrowRight className="w-6 h-6 text-[#01203F]/20" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-[700px] mx-auto"
        >
          <p className="text-xl md:text-3xl text-[#01203F] font-bold leading-tight mb-8">
            Hoje, simplificamos promoções para centenas de varejistas.
            <br />
            <span className="text-[#01203F]/60 font-normal text-lg md:text-xl">
              E estamos apenas começando.
            </span>
          </p>

          {/* Animated CTA */}
          <Link to="/historia">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF2A00] to-[#FF5001] hover:from-[#FF5001] hover:to-[#FF2A00] text-white text-lg px-10 h-[64px] rounded-xl font-bold shadow-2xl shadow-[#FF2A00]/20 hover:shadow-[#FF2A00]/40 transition-all group"
              >
                Ver a história completa
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StorytellingSection;
