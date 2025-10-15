import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Lightbulb, Rocket, Target, Users, Zap, Sparkles, TrendingUp } from "lucide-react";
import historyDashboard from "@/assets/history-dashboard.png";
import ideaBirth from "@/assets/idea-birth.png";
import premiafyLogo from "@/assets/premiafy-logo.png";
import roosterLogo from "@/assets/rooster-logo.png";
import growthChart from "@/assets/growth-chart.png";

const History = () => {
  // Helper function to render description with Premiafy highlighted
  const renderDescription = (year: string, description: string) => {
    if (year === "2021-2022") {
      return (
        <>
          Lançamos a <span className="font-black text-[#FFD700]">Premiafy</span>: a primeira plataforma completa de
          promoções com IA para grandes marcas. Sites automáticos, OCR instantâneo, dashboards enterprise e arquitetura
          para alto volume. Unilever, Royal Canin, BRF e outras líderes confiaram na tecnologia.
        </>
      );
    } else if (year === "2023") {
      return (
        <>
          Trouxemos a mesma tecnologia da <span className="font-black text-[#FFD700]">Premiafy</span> para pequenos e
          médios varejistas. Rooster nasce com automação acessível, IA zero complexidade. Marcas como Hellmans já
          simplificaram suas campanhas.
        </>
      );
    } else if (year === "2024") {
      return (
        <>
          Mais de 30 projetos enterprise com <span className="font-black text-[#FFD700]">Premiafy</span>, +1M de
          usuários impactados. Rooster expandindo para centenas de PMEs. Integrando IA generativa em ambas as
          plataformas. E isso é só o começo.
        </>
      );
    }
    return description;
  };

  const timelineEvents = [
    {
      year: "2020",
      title: "O Problema que Mudou Tudo",
      description:
        "Pequenos e médios varejistas perdiam dias criando promoções. Planilhas infinitas, validações manuais e zero visibilidade dos resultados. Era hora de mudar isso.",
      icon: Target,
      color: "#FF2A00",
      imageSpace: true,
    },
    {
      year: "2021",
      title: "Nasceu a Ideia",
      description:
        "E se a tecnologia pudesse fazer o trabalho pesado? IA para validar notas, sites gerados automaticamente e métricas em tempo real. A visão estava clara.",
      icon: Lightbulb,
      color: "#0344DC",
      imageSpace: true,
    },
    {
      year: "2021-2022",
      title: "Premiafy - A Solução Enterprise",
      description:
        "Lançamos a Premiafy: a primeira plataforma completa de promoções com IA para grandes marcas. Sites automáticos, OCR instantâneo, dashboards enterprise e arquitetura para alto volume. Unilever, Royal Canin, BRF e outras líderes confiaram na tecnologia.",
      icon: Rocket,
      color: "#0344DC",
      imageSpace: true,
    },
    {
      year: "2023",
      title: "Rooster - Democratizando a Tecnologia",
      description:
        "Trouxemos a mesma tecnologia da Premiafy para pequenos e médios varejistas. Rooster nasce com automação acessível, IA inteligente e zero complexidade. Marcas como Hellmans e Hub simplificaram suas campanhas.",
      icon: Sparkles,
      color: "#FF5001",
      imageSpace: true,
    },
    {
      year: "2024",
      title: "Crescimento Acelerado",
      description:
        "Mais de 30 projetos enterprise com Premiafy, +1M de usuários impactados. Rooster expandindo para centenas de PMEs. Integrando IA generativa em ambas as plataformas. E isso é só o começo.",
      icon: TrendingUp,
      color: "#FF2A00",
      imageSpace: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#011E36] via-[#01203F] to-[#01203F]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,42,0,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(3,68,220,0.03)_0%,transparent_50%)]" />

        <div className="container mx-auto max-w-[900px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <span className="text-[#FF2A00] font-bold text-sm tracking-wider uppercase">Nossa Jornada</span>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">A História da Rooster</h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-[700px] mx-auto">
              De uma ideia simples a uma plataforma que transforma o marketing promocional. Esta é a nossa jornada de
              simplificação, inovação e confiança.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-[1000px]">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />

          {/* Timeline Events */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    {isLeft ? (
                      <>
                        {/* Content Left */}
                        <div className="text-right space-y-4">
                          <span
                            className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider"
                            style={{
                              backgroundColor: `${event.color}20`,
                              color: event.color,
                            }}
                          >
                            {event.year}
                          </span>

                          <h3 className="text-3xl font-black text-white">{event.title}</h3>

                          <p className="text-white/70 text-lg leading-relaxed">
                            {renderDescription(event.year, event.description)}
                          </p>

                          {/* Image Placeholder Left */}
                          {event.imageSpace && event.year === "2020" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={historyDashboard}
                                alt="Dashboard de analytics mostrando evolução de cupons e gestão de promoções"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2021" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={ideaBirth}
                                alt="Representação visual do nascimento de uma ideia inovadora com tecnologia e IA"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2021-2022" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white">
                              <img
                                src={premiafyLogo}
                                alt="Logo Premiafy - Plataforma de promoções enterprise"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2023" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a]">
                              <img
                                src={roosterLogo}
                                alt="Logo Rooster - Plataforma de promoções para PMEs"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2024" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={growthChart}
                                alt="Gráfico mostrando crescimento acelerado e expansão"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {event.imageSpace &&
                            event.year !== "2020" &&
                            event.year !== "2021" &&
                            event.year !== "2021-2022" &&
                            event.year !== "2023" &&
                            event.year !== "2024" && (
                              <div className="mt-6 aspect-video rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center">
                                <span className="text-white/40 text-sm font-medium">Espaço para imagem</span>
                              </div>
                            )}
                        </div>

                        {/* Empty Right */}
                        <div />
                      </>
                    ) : (
                      <>
                        {/* Empty Left */}
                        <div />

                        {/* Content Right */}
                        <div className="text-left space-y-4">
                          <span
                            className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider"
                            style={{
                              backgroundColor: `${event.color}20`,
                              color: event.color,
                            }}
                          >
                            {event.year}
                          </span>

                          <h3 className="text-3xl font-black text-white">{event.title}</h3>

                          <p className="text-white/70 text-lg leading-relaxed">
                            {renderDescription(event.year, event.description)}
                          </p>

                          {/* Image Placeholder Right */}
                          {event.imageSpace && event.year === "2020" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={historyDashboard}
                                alt="Dashboard de analytics mostrando evolução de cupons e gestão de promoções"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2021" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={ideaBirth}
                                alt="Representação visual do nascimento de uma ideia inovadora com tecnologia e IA"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2021-2022" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white">
                              <img
                                src={premiafyLogo}
                                alt="Logo Premiafy - Plataforma de promoções enterprise"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2023" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a]">
                              <img
                                src={roosterLogo}
                                alt="Logo Rooster - Plataforma de promoções para PMEs"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          )}
                          {event.imageSpace && event.year === "2024" && (
                            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={growthChart}
                                alt="Gráfico mostrando crescimento acelerado e expansão"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {event.imageSpace &&
                            event.year !== "2020" &&
                            event.year !== "2021" &&
                            event.year !== "2021-2022" &&
                            event.year !== "2023" &&
                            event.year !== "2024" && (
                              <div className="mt-6 aspect-video rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center">
                                <span className="text-white/40 text-sm font-medium">Espaço para imagem</span>
                              </div>
                            )}
                        </div>
                      </>
                    )}

                    {/* Center Icon */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        className="relative"
                      >
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center border-4"
                          style={{
                            backgroundColor: `${event.color}20`,
                            borderColor: event.color,
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: event.color }} />
                        </div>
                        <div
                          className="absolute inset-0 rounded-full blur-xl opacity-40"
                          style={{ backgroundColor: event.color }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-4 pl-12 relative">
                    {/* Mobile Icon */}
                    <div className="absolute left-0 top-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center border-4"
                        style={{
                          backgroundColor: `${event.color}20`,
                          borderColor: event.color,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: event.color }} />
                      </div>
                    </div>

                    <span
                      className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider"
                      style={{
                        backgroundColor: `${event.color}20`,
                        color: event.color,
                      }}
                    >
                      {event.year}
                    </span>

                    <h3 className="text-2xl font-black text-white">{event.title}</h3>

                    <p className="text-white/70 leading-relaxed">{renderDescription(event.year, event.description)}</p>

                    {/* Image Placeholder Mobile */}
                    {event.imageSpace && event.year === "2020" && (
                      <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-white/10">
                        <img
                          src={historyDashboard}
                          alt="Dashboard de analytics mostrando evolução de cupons e gestão de promoções"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {event.imageSpace && event.year === "2021" && (
                      <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-white/10">
                        <img
                          src={ideaBirth}
                          alt="Representação visual do nascimento de uma ideia inovadora com tecnologia e IA"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {event.imageSpace && event.year === "2021-2022" && (
                      <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white">
                        <img
                          src={premiafyLogo}
                          alt="Logo Premiafy - Plataforma de promoções enterprise"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    {event.imageSpace && event.year === "2023" && (
                      <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a]">
                        <img
                          src={roosterLogo}
                          alt="Logo Rooster - Plataforma de promoções para PMEs"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    {event.imageSpace && event.year === "2024" && (
                      <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-white/10">
                        <img
                          src={growthChart}
                          alt="Gráfico mostrando crescimento acelerado e expansão"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {event.imageSpace &&
                      event.year !== "2020" &&
                      event.year !== "2021" &&
                      event.year !== "2021-2022" &&
                      event.year !== "2023" &&
                      event.year !== "2024" && (
                        <div className="mt-4 aspect-video rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center">
                          <span className="text-white/40 text-sm font-medium">Espaço para imagem</span>
                        </div>
                      )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#FF2A00]/10 to-[#0344DC]/10 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,42,0,0.1)_0%,transparent_70%)] rounded-3xl" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Nossa Missão</h2>

              <p className="text-2xl md:text-3xl text-white/90 font-bold leading-relaxed">
                Simplificar o marketing promocional de forma rápida, segura e eficiente.
              </p>

              <div className="pt-6 space-y-3">
                {[
                  "Transformar complexidade em simplicidade",
                  "Entregar tecnologia com propósito",
                  "Crescer junto com nossos clientes",
                ].map((principle, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <Check className="w-6 h-6 text-[#FF2A00] flex-shrink-0" />
                    <span className="text-white/80 text-lg">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-[700px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Quer fazer parte desta história?
            </h2>

            <p className="text-xl text-white/70">Junte-se aos varejistas que já simplificaram suas campanhas.</p>

            <motion.a href="/contato" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <button className="bg-gradient-to-r from-[#FF0000] to-[#FF5001] hover:from-[#FF5001] hover:to-[#FF0000] text-white font-bold px-10 h-[64px] rounded-xl shadow-2xl shadow-[#FF0000]/20 hover:shadow-[#FF0000]/40 transition-all">
                Falar com especialista
              </button>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
