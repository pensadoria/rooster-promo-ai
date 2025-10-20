import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

// Assets exported from the Figma MCP call (external URLs).
const ASSETS = {
  heroArt: "https://www.figma.com/api/mcp/asset/faca1763-e644-43eb-9003-e60f2a81e93a",
  heroPillIcon: "https://www.figma.com/api/mcp/asset/41cbc6bd-7d69-4196-9e73-e1296a287d44",
  feature1: "https://www.figma.com/api/mcp/asset/427211fe-a1e3-4c37-a21b-9ae02167eb33",
  feature2: "https://www.figma.com/api/mcp/asset/d224945e-df8b-41fd-aa40-df654f999ca1",
  feature3: "https://www.figma.com/api/mcp/asset/e48a2849-ff71-4ecb-befa-84f0c770bb01",
  // Precise icons for the post-hero feature cards
  postHeroIcon1: "https://www.figma.com/api/mcp/asset/106e80a6-c2b1-4b6d-badb-91b9d769be1a",
  postHeroIcon2: "https://www.figma.com/api/mcp/asset/6de02da6-f7c4-4063-ac47-459572bd598e",
  postHeroIcon3: "https://www.figma.com/api/mcp/asset/780812c5-c7bf-41a6-85d6-4c2727affba0",
  // Icons for "Mais que pontos" section (node 40:2186)
  experienceIcon1: "https://www.figma.com/api/mcp/asset/292c0a2b-ce07-46d5-b6f3-2e6dd33ce1b5",
  experienceIcon2: "https://www.figma.com/api/mcp/asset/8dcaeeb9-cadf-44a1-a237-618374eb01a8",
  experienceIcon3: "https://www.figma.com/api/mcp/asset/fb46ed6a-636e-4361-bf3e-5e52dbf73609",
  experienceIcon4: "https://www.figma.com/api/mcp/asset/6091b5bc-bf32-415e-9989-f4f80d51e175",
  // Icon for "Tudo conectado" section checkmarks (node 40:2234)
  checkmarkIcon: "https://www.figma.com/api/mcp/asset/6a1951f4-e991-4366-9df7-55d10deed34a",
  // Icons for "Resultados" section (node 40:2263)
  resultsIcon1: "https://www.figma.com/api/mcp/asset/686b0d7b-852b-4c3f-ba27-96372816f3e6",
  resultsIcon2: "https://www.figma.com/api/mcp/asset/028c848d-2886-4e67-9d22-6921a18b8f9d",
  resultsIcon3: "https://www.figma.com/api/mcp/asset/6435dda7-0dd7-4697-afdd-9ef432c4e5c8",
  badge1: "https://www.figma.com/api/mcp/asset/0d30e596-6a59-44b8-a8b0-7921127c8174",
  badge2: "https://www.figma.com/api/mcp/asset/ec0d84f7-cd9b-479b-9b61-27bf2ab39af2",
  statsIcon: "https://www.figma.com/api/mcp/asset/42ff45a8-3bf6-4275-8ce9-82bc7f31857c",
  cardIconA: "https://www.figma.com/api/mcp/asset/7346a870-99d0-4ef9-b131-06b0d32e1088",
  cardIconB: "https://www.figma.com/api/mcp/asset/4936272b-af78-485b-a9c4-95734e6c7815",
  cardIconC: "https://www.figma.com/api/mcp/asset/e9e2f763-599e-4896-83c6-e3322237c5e6",
  planLeft: "https://www.figma.com/api/mcp/asset/292d4252-66b2-4865-91c9-e561c7c8438d",
};

const Fidelidades = () => {
  return (
    <div className="min-h-screen bg-white text-[#01203f]">
      <Header />

      {/* Hero */}
      <section className="relative h-[800px] w-full overflow-hidden bg-[rgba(1,32,63,0.95)]">
        {/* background art (left) positioned exactly like Figma */}
        <div className="absolute hidden lg:block" style={{ left: 6, top: 68, width: 517.001, height: 757.578 }}>
          <img src={ASSETS.heroArt} alt="art" className="block max-w-none w-full h-full object-contain" />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />

        {/* Centered content per Figma */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[611px] text-center">
          {/* pill - exact 201x40 with absolute inner icon/text */}
          <div
            className="relative mx-auto rounded-full"
            style={{
              width: 201.094,
              height: 40,
              background: "rgba(255,255,255,0.1)",
            }}
          >
            <img
              src={ASSETS.heroPillIcon}
              alt="icon"
              className="absolute"
              style={{ left: 16, top: 8, width: 16, height: 24 }}
            />
            <span
              className="absolute font-semibold"
              style={{
                left: 40,
                top: 10,
                height: 20,
                fontSize: 14,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Fidelidade Inteligente
            </span>
          </div>

          <h1 className="mt-[33px] text-white hero-h1 font-black w-[605px] mx-auto">Fidelize clientes em minutos</h1>

          <p className="mt-[16px] text-white/90 mx-auto" style={{ width: 611, fontSize: 20, lineHeight: "27px" }}>
            A Rooster Fidelidades transforma cada compra em pontos automáticos que viram cashback. Tudo integrado à sua
            plataforma de promoções.
          </p>

          {/* Buttons group - exact widths inside a 494px group with 16px gap */}
          <motion.div
            className="mx-auto mt-[33px] flex items-center justify-center"
            style={{ width: 494, height: 64 }}
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
              className="inline-flex items-center justify-center rounded-[12px] text-white font-semibold"
              style={{
                width: 200.109,
                height: 64,
                background: "var(--rooster-red)",
              }}
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
            <h2 className="font-black text-[#01203f] text-4xl lg:text-[48px] lg:leading-[44px] mb-6">
              Simples, rápido e automático
            </h2>
            <p className="text-lg lg:text-[20px] lg:leading-[27px] text-[rgba(1,32,63,0.8)] max-w-[760px] mx-auto">
              Configure seu programa de fidelidade em minutos e veja seus clientes voltarem mais.
            </p>
          </div>

          {/* Cards grid - mais compacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1216px] mx-auto">
            {/* Card 1 */}
            <div className="bg-white border border-[rgba(1,32,63,0.1)] rounded-[16px] px-6 py-8 text-center flex flex-col items-center min-h-[280px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-[rgba(1,32,63,0.05)]">
                <img src={ASSETS.postHeroIcon1} alt="Configure" className="w-7 h-7 object-contain" />
              </div>
              <div className="text-[#FF0000] font-semibold text-sm mb-4">01</div>
              <h3 className="font-bold text-[#01203f] text-[24px] leading-tight mb-4">Configure em minutos</h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-[1.4]">
                Defina regras simples e automáticas — sem precisar de suporte técnico.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[rgba(1,32,63,0.1)] rounded-[16px] px-6 py-8 text-center flex flex-col items-center min-h-[280px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-[rgba(255,0,0,0.05)]">
                <img src={ASSETS.postHeroIcon2} alt="Acúmulo" className="w-7 h-7 object-contain" />
              </div>
              <div className="text-[#FF0000] font-semibold text-sm mb-4">02</div>
              <h3 className="font-bold text-[#01203f] text-[24px] leading-tight mb-4">Acúmulo automático</h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-[1.4]">
                A cada R$ 0,10 gasto, o cliente ganha pontos que viram dinheiro de volta.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[rgba(1,32,63,0.1)] rounded-[16px] px-6 py-8 text-center flex flex-col items-center min-h-[280px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 bg-[rgba(1,32,63,0.05)]">
                <img src={ASSETS.postHeroIcon3} alt="Dashboard" className="w-7 h-7 object-contain" />
              </div>
              <div className="text-[#FF0000] font-semibold text-sm mb-4">03</div>
              <h3 className="font-bold text-[#01203f] text-[24px] leading-tight mb-4">Dashboard em tempo real</h3>
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
            <h2 className="font-black text-[#01203f] text-4xl lg:text-[48px] lg:leading-[44px]">
              Mais que pontos, uma experiência completa
            </h2>
          </div>

          {/* Grid 2x2 de cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1216px] mx-auto">
            {/* Card 1: Pontos + Cashback */}
            <div className="bg-white/80 rounded-[16px] p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(255,80,1,0.2)] flex items-center justify-center mb-6">
                <img src={ASSETS.experienceIcon1} alt="Pontos" className="w-5 h-5 object-contain" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[24px] mb-3">Pontos + Cashback Automático</h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                A fidelidade acontece sozinha. Sem planilhas, sem trabalho manual.
              </p>
            </div>

            {/* Card 2: Integração */}
            <div className="bg-white/80 rounded-[16px] p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(255,0,0,0.2)] flex items-center justify-center mb-6">
                <img src={ASSETS.experienceIcon2} alt="Integração" className="w-6 h-5 object-contain" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[24px] mb-3">Integração com Promoções</h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                Promoções e fidelidade no mesmo painel. Uma só plataforma, dois resultados.
              </p>
            </div>

            {/* Card 3: Dashboard */}
            <div className="bg-white/80 rounded-[16px] p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(1,32,63,0.2)] flex items-center justify-center mb-6">
                <img src={ASSETS.experienceIcon3} alt="Dashboard" className="w-5 h-5 object-contain" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[24px] mb-3">Dashboard de Resultados</h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                Acompanhe retenção, recompra e ROI em tempo real.
              </p>
            </div>

            {/* Card 4: Engajamento */}
            <div className="bg-white/80 rounded-[16px] p-8">
              <div className="w-12 h-12 rounded-[8px] bg-[rgba(255,80,1,0.2)] flex items-center justify-center mb-6">
                <img src={ASSETS.experienceIcon4} alt="Engajamento" className="w-4 h-5 object-contain" />
              </div>
              <h3 className="font-bold text-[#01203f] text-[24px] mb-3">Engajamento Inteligente</h3>
              <p className="text-[16px] text-[rgba(1,32,63,0.7)] leading-relaxed">
                Notificações automáticas e mensagens personalizadas para seus clientes.
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
          <div className="max-w-[576px]">
            <h2 className="font-black text-4xl lg:text-[48px] lg:leading-[44px] text-white mb-6">
              Tudo conectado para crescer
            </h2>
            <p className="text-lg lg:text-[20px] lg:leading-[27px] text-white/85 mb-12 max-w-[541px]">
              Duas ferramentas poderosas em um só lugar: atraia com promoções e mantenha com fidelidade.
            </p>

            {/* Checklist */}
            <ul className="space-y-6 mb-8">
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[rgba(0,255,4,0.09)] flex items-center justify-center flex-shrink-0">
                  <img src={ASSETS.checkmarkIcon} alt="check" className="w-3 h-3.5 object-contain" />
                </div>
                <span className="text-[16px] lg:leading-[22px] text-white/80">
                  Crie campanhas de pontos e promoções lado a lado
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[rgba(0,255,4,0.09)] flex items-center justify-center flex-shrink-0">
                  <img src={ASSETS.checkmarkIcon} alt="check" className="w-3 h-3.5 object-contain" />
                </div>
                <span className="text-[16px] lg:leading-[22px] text-white/80">Use o mesmo cadastro e dashboard</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-[rgba(0,255,4,0.09)] flex items-center justify-center flex-shrink-0">
                  <img src={ASSETS.checkmarkIcon} alt="check" className="w-3 h-3.5 object-contain" />
                </div>
                <span className="text-[16px] lg:leading-[22px] text-white/80">
                  Controle tudo com segurança e transparência
                </span>
              </li>
            </ul>

            {/* Novo texto separado */}
            <div className="mb-6">
              <p className="text-[18px] lg:text-[20px] font-semibold text-white">Vem conhecer o Rooster Promoções</p>
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

      {/* Results Section - Resultados que você vê crescer */}
      <motion.section
        className="bg-white py-16 lg:py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-[1280px] px-6">
          {/* Title */}
          <h2 className="text-[40px] lg:text-[48px] leading-[44px] lg:leading-[54px] font-bold text-[#01203f] text-center mb-16">
            Resultados que você vê crescer
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 - Aumento na recompra */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[rgba(255,0,0,0.08)] flex items-center justify-center mb-6">
                <img src={ASSETS.resultsIcon1} alt="Aumento na recompra" className="w-[30px] h-[30px] object-contain" />
              </div>
              <p className="text-[36px] leading-[40px] font-black text-[#01203f] mb-4">+40%</p>
              <p className="text-[18px] leading-[24px] font-semibold text-[#01203f] mb-3">aumento na recompra média</p>
              <p className="text-[16px] leading-[22px] text-[rgba(1,32,63,0.7)]">
                Estudos mostram que programas de fidelidade bem estruturados elevam o ticket médio em até 40%.
              </p>
            </div>

            {/* Card 2 - Configuração */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[rgba(3,68,220,0.08)] flex items-center justify-center mb-6">
                <img src={ASSETS.resultsIcon2} alt="Configuração rápida" className="w-[30px] h-[30px] object-contain" />
              </div>
              <p className="text-[36px] leading-[40px] font-black text-[#01203f] mb-4">5 min</p>
              <p className="text-[18px] leading-[24px] font-semibold text-[#01203f] mb-3">de configuração</p>
              <p className="text-[16px] leading-[22px] text-[rgba(1,32,63,0.7)]">
                Configure sua campanha de cashback em menos de 5 minutos, sem complexidade.
              </p>
            </div>

            {/* Card 3 - Feedback real */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[rgba(255,0,0,0.08)] flex items-center justify-center mb-6">
                <img src={ASSETS.resultsIcon3} alt="Feedback real" className="w-[30px] h-[30px] object-contain" />
              </div>
              <p className="text-[36px] leading-[40px] font-black text-[#01203f] mb-4">Feedback real</p>
              <p className="text-[18px] leading-[24px] font-semibold text-[#01203f] mb-3">de quem usa</p>
              <p className="text-[16px] leading-[22px] text-[rgba(1,32,63,0.7)]">
                "Com a Rooster, eu finalmente consegui criar uma campanha de fidelidade que funciona de verdade."
              </p>
            </div>
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
          <h2 className="text-[40px] lg:text-[48px] leading-[44px] lg:leading-[54px] font-bold text-[#01203f] text-center mb-12">
            Escolha o melhor caminho para seu crescimento
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {/* Card 1 - Rooster Fidelidades */}
            <div className="bg-[#01203f] text-white rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[rgba(255,0,0,0.2)] flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="#FF0000"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-[28px] lg:text-[32px] leading-[32px] lg:leading-[36px] font-bold mb-4">
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
            <div className="bg-white text-[#01203f] rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center border border-[#01203f]/10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[rgba(1,32,63,0.08)] flex items-center justify-center mb-6">
                <img
                  src="https://www.figma.com/api/mcp/asset/dcdead4e-daec-46b3-90f1-f4fea5cc11a1"
                  alt=""
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>

              {/* Title */}
              <h3 className="text-[28px] lg:text-[32px] leading-[32px] lg:leading-[36px] font-bold mb-4">
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
