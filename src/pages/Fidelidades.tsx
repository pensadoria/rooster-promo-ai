import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Clock, Coins, BarChart3, Zap, Link as LinkIcon, MessageSquare, Check, TrendingUp, Users, DollarSign, Award, Sparkles } from "lucide-react";
import roosterLogo from "@/assets/rooster-logo.png";

const MotionLink = motion(Link);


const Fidelidades = () => {
  return (
    <div className="min-h-screen bg-white text-[#01203f]">
      <Header />

      {/* Hero */}
      <section className="relative h-[450px] md:h-[800px] w-full mt-[50px] md:mt-0 overflow-hidden bg-[#01203f]">
        {/* background art (left) positioned exactly like Figma */}
        <div
          className="absolute hidden lg:block"
          style={{ left: 6, top: 68, width: 517.001, height: 757.578 }}
        >
          <img
            src={roosterLogo}
            alt="art"
            className="block max-w-none w-full h-full object-contain opacity-20"
          />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/20" />


        {/* Centered content per Figma */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[611px] px-4 md:px-6 text-center">
          {/* pill - exact 201x40 with absolute inner icon/text */}
          <div
            className="relative mx-auto rounded-full flex items-center justify-center gap-2"
            style={{
              width: 201.094,
              height: 40,
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <Heart className="w-4 h-4 text-white/90" />
            <span
              className="font-semibold"
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Fidelidade Inteligente
            </span>
          </div>

          <h1 className="mt-[33px] text-white text-[32px] md:text-[48px] lg:text-[72px] leading-[36px] md:leading-[52px] lg:leading-[72px] font-black max-w-[605px] w-full mx-auto">
            Fidelize clientes em minutos
          </h1>

          <p className="mt-4 text-white/90 mx-auto max-w-[611px] w-full text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[27px]">
            A Rooster Fidelidades transforma cada compra em pontos automáticos
            que viram cashback. Tudo integrado à sua plataforma de promoções.
          </p>

          {/* Buttons group - exact widths inside a 494px group with 16px gap */}
          <motion.div
            className="mx-auto mt-8 flex items-center justify-center w-full max-w-[494px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <MotionLink
              to="/contato"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="w-full md:w-[200px] h-[56px] md:h-[64px] inline-flex items-center justify-center rounded-[12px] text-white font-semibold bg-[#FF0000]"
            >
              Começar Agora
            </MotionLink>
          </motion.div>
        </div>
      </section>

      {/* Features Row (Figma node 40:2140 - balanced design) */}
      <motion.section
        className="bg-white py-20 lg:py-28"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-[1280px] px-6 lg:px-20">
          {/* Title + subtitle */}
          <div className="text-center mx-auto mb-16">
            <h2 className="font-black text-[#01203f] text-[28px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[44px] mb-6">
              Simples, rápido e automático
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[27px] text-[rgba(1,32,63,0.8)] max-w-[760px] mx-auto px-4">
              Configure seu programa de fidelidade em minutos e veja seus
              clientes voltarem mais.
            </p>
          </div>

          {/* Cards grid - mais compacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1216px] mx-auto">
            {/* Card 1 */}
            <div className="bg-white border border-[rgba(1,32,63,0.1)] rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center min-h-[240px] md:min-h-[280px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-[rgba(1,32,63,0.05)]">
                <Clock className="w-7 h-7 text-[#01203f]" />
              </div>
              <div className="text-[#FF0000] font-semibold text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-[#01203f] text-[20px] md:text-[24px] leading-tight mb-4 break-words">
                Configure em minutos
              </h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-[1.4]">
                Defina regras simples e automáticas — sem precisar de suporte
                técnico.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[rgba(1,32,63,0.1)] rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center min-h-[240px] md:min-h-[280px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-[rgba(255,0,0,0.05)]">
                <Coins className="w-7 h-7 text-[#ff0000]" />
              </div>
              <div className="text-[#FF0000] font-semibold text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-[#01203f] text-[20px] md:text-[24px] leading-tight mb-4 break-words">
                Acúmulo automático
              </h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-[1.4]">
                A cada R$ 0,10 gasto, o cliente ganha pontos que viram dinheiro
                de volta.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[rgba(1,32,63,0.1)] rounded-[16px] p-6 md:p-8 text-center flex flex-col items-center min-h-[240px] md:min-h-[280px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-[rgba(1,32,63,0.05)]">
                <BarChart3 className="w-7 h-7 text-[#01203f]" />
              </div>
              <div className="text-[#FF0000] font-semibold text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-[#01203f] text-[20px] md:text-[24px] leading-tight mb-4 break-words">
                Dashboard em tempo real
              </h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-[1.4]">
                Veja quem mais compra, quanto resgatou e quanto cresceu.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mais que pontos section (Figma node 40:2186) */}
      <motion.section
        className="bg-[rgba(3,68,220,0.05)] py-20 lg:py-28"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-[1280px] px-6 lg:px-20">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-black text-[#01203f] text-[28px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[44px] px-4">
              Mais que pontos, uma experiência completa
            </h2>
          </div>

          {/* Grid 2x2 de cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1216px] mx-auto">
            {/* Card 1: Pontos + Cashback */}
            <div className="bg-white/80 rounded-[16px] p-6 md:p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(255,80,1,0.2)] flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#ff5001]" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[20px] md:text-[24px] mb-3 break-words">
                Pontos + Cashback Automático
              </h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                A fidelidade acontece sozinha. Sem planilhas, sem trabalho
                manual.
              </p>
            </div>

            {/* Card 2: Integração */}
            <div className="bg-white/80 rounded-[16px] p-6 md:p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(255,0,0,0.2)] flex items-center justify-center mb-6">
                <LinkIcon className="w-6 h-6 text-[#ff0000]" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[20px] md:text-[24px] mb-3 break-words">
                Integração com Promoções
              </h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                Promoções e fidelidade no mesmo painel. Uma só plataforma, dois
                resultados.
              </p>
            </div>

            {/* Card 3: Dashboard */}
            <div className="bg-white/80 rounded-[16px] p-6 md:p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(1,32,63,0.2)] flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#01203f]" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[20px] md:text-[24px] mb-3 break-words">
                Dashboard de Resultados
              </h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                Acompanhe retenção, recompra e ROI em tempo real.
              </p>
            </div>

            {/* Card 4: Engajamento */}
            <div className="bg-white/80 rounded-[16px] p-6 md:p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(255,80,1,0.2)] flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-[#ff5001]" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[20px] md:text-[24px] mb-3 break-words">
                Engajamento Inteligente
              </h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                Notificações automáticas e mensagens personalizadas para seus
                clientes.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tudo conectado section (Figma node 40:2234) */}
      <motion.section
        className="bg-[#01203f] text-white py-20 lg:py-28"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-[1280px] px-6 lg:px-20">
          <div className="max-w-[576px] w-full">
            <h2 className="font-black text-[28px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[44px] text-white mb-6">
              Tudo conectado para crescer
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[27px] text-white/85 mb-8 md:mb-12 max-w-[541px] w-full">
              Duas ferramentas poderosas em um só lugar: atraia com promoções e
              mantenha com fidelidade.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[rgba(0,255,4,0.09)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-[16px] lg:leading-[22px] text-white/80">
                  Crie campanhas de pontos e promoções lado a lado
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[rgba(0,255,4,0.09)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-[16px] lg:leading-[22px] text-white/80">
                  Use o mesmo cadastro e dashboard
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[rgba(0,255,4,0.09)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-[16px] lg:leading-[22px] text-white/80">
                  Controle tudo com segurança e transparência
                </span>
              </li>
            </ul>

            {/* Novo texto separado */}
            <div className="mb-6">
              <p className="text-[18px] lg:text-[20px] font-semibold text-white">
                Vem conhecer o Rooster Promoções
              </p>
            </div>

            {/* Botão Clique Aqui */}
            <MotionLink
              to="/promocoes"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ff0000] text-white font-semibold text-[16px] rounded-xl hover:bg-[#ff0000]/90 transition-colors"
            >
              Clique Aqui
            </MotionLink>
          </div>
        </div>
      </motion.section>

      {/* Choose Your Path Section - Escolha o melhor caminho para seu crescimento */}
      <motion.section
        className="bg-[#f2f6fd] py-16 lg:py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-[1280px] px-6">
          {/* Title */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[54px] font-bold text-[#01203f] text-center mb-12 px-4">
            Escolha o melhor caminho para seu crescimento
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {/* Card 1 - Rooster Fidelidades */}
            <div className="bg-[#01203f] text-white rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[rgba(255,0,0,0.2)] flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="#FF0000"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold mb-4">
                Rooster Fidelidades
              </h3>

              {/* Description */}
              <p className="text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-white/80 mb-8">
                Fidelize clientes com cashback automático.
              </p>

              {/* CTA Button */}
              <MotionLink
                to="/contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="w-full max-w-[360px] h-[56px] flex items-center justify-center border-2 border-white rounded-lg text-[16px] font-semibold hover:bg-white hover:text-[#01203f] transition-colors"
              >
                Ver planos de fidelidade
              </MotionLink>
            </div>

            {/* Card 2 - Rooster Promoções */}
            <div className="bg-white text-[#01203f] rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center border border-[#01203f]/10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[rgba(1,32,63,0.08)] flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-[#01203f]" />
              </div>

              {/* Title */}
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[28px] md:leading-[32px] lg:leading-[36px] font-bold mb-4">
                Rooster Promoções
              </h3>

              {/* Description */}
              <p className="text-[16px] lg:text-[18px] leading-[22px] lg:leading-[24px] text-[#01203f]/70 mb-8">
                Crie promoções que vendem de verdade.
              </p>

              {/* CTA Button */}
              <MotionLink
                to="/contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="w-full max-w-[360px] h-[56px] flex items-center justify-center bg-[#01203f] text-white rounded-lg text-[16px] font-semibold hover:bg-[#01203f]/90 transition-colors"
              >
                Ver planos de promoções
              </MotionLink>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Fidelidades;
