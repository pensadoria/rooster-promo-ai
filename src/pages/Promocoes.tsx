import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MotionButton = motion(Button);
import { Link } from "react-router-dom";
import hellmannsLogo from "@/assets/hellmanns-seeklogo.png";
import {
  Upload,
  Sparkles,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  BarChart3,
  Gift,
  CheckCircle2,
  Gauge,
  ArrowRight,
  Clock,
} from "lucide-react";

const Promocoes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Desktop Layout Original */}
      <section className="hidden xl:block relative h-[800px] overflow-hidden bg-[#01203f]">
        {/* Background art - Galo (Rooster) */}
        <div className="absolute" style={{ left: 6, top: 68, width: 517.001, height: 757.578 }}>
          <img
            src="https://www.figma.com/api/mcp/asset/08bcd011-3349-434a-844d-8c4fb4130a93"
            alt="Rooster background art"
            className="block h-full w-full max-w-none object-contain"
            // Mudar para ficar de acordo com a responsividade
            style={{ objectPosition: "left top" }}
          />
        </div>

        {/* Overlays escuros */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content Container */}
        <div className="w-full h-[800px]">
          <div className="relative h-[614px] w-full px-8 ">
            <div className="absolute left-1/2 top-1/2 h-[492px] w-[1058px] -translate-x-1/2 -translate-y-1/2">
              {/* Título Principal */}
              <h1 className="absolute left-1/2 top-[72px] h-[230px] w-[1058px] -translate-x-1/2 text-center font-['Inter'] text-[72px] font-black leading-[72px] text-white">
                A plataforma que transforma suas promoções em resultados
              </h1>

              {/* Subtítulo */}
              <p className="absolute left-1/2 top-[342px] h-[54px] w-[558px] -translate-x-1/2 text-center font-['Inter'] text-[20px] font-normal leading-[27px] text-white/85">
                A Rooster lê notas fiscais, valida cupons e mostra tudo em tempo real — sem planilhas e sem complicação.
              </p>

              {/* Botões CTA */}
              <div className="absolute left-1/2 top-[428px] flex justify-center h-16 w-[518px] -translate-x-1/2 items-center gap-4">
                <Link to="/contato">
                  <MotionButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="h-16 w-[270.328px] rounded-xl bg-[#ff0000] font-['Inter'] text-[18px] font-semibold text-white hover:bg-[#ff0000]/90"
                  >
                    Ver como funciona
                  </MotionButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Tablet Layout */}
      <section className="hidden lg:block xl:hidden relative min-h-screen overflow-hidden bg-[#01203f] pt-24 pb-12 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Badge com ícone */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-white/90" />
              </div>

              {/* Título Principal */}
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                A plataforma que transforma suas promoções em resultados
              </h1>

              {/* Subtítulo */}
              <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
                A Rooster lê notas fiscais, valida cupons e mostra tudo em tempo real — sem planilhas e sem complicação.
              </p>

              {/* Botões CTA */}
              <div className="flex gap-4">
                <MotionButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className="h-16 px-8 rounded-xl bg-red-600 text-lg font-semibold text-white hover:bg-red-700"
                >
                  Criar promoção
                </MotionButton>
                <MotionButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  variant="outline"
                  className="h-16 px-8 rounded-xl border-2 border-white bg-transparent text-lg font-semibold text-white hover:bg-white/10"
                >
                  Ver como funciona
                </MotionButton>
              </div>
            </div>

            {/* Right Column - Background art */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://www.figma.com/api/mcp/asset/08bcd011-3349-434a-844d-8c4fb4130a93"
                  alt="Rooster background art"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Mobile Layout */}
      <section className="block lg:hidden relative min-h-screen overflow-hidden bg-[#01203f] pt-24 pb-12 px-6">
        <div className="max-w-md mx-auto text-center space-y-8">
          {/* Badge com ícone */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-white/90" />
            <span className="text-sm font-semibold text-white/90">IA Integrada + 98% de precisão</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            A plataforma que transforma suas promoções em resultados
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-white/85 leading-relaxed">
            A Rooster lê notas fiscais, valida cupons e mostra tudo em tempo real — sem planilhas e sem complicação.
          </p>

          {/* Background art */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://www.figma.com/api/mcp/asset/08bcd011-3349-434a-844d-8c4fb4130a93"
                alt="Rooster background art"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Botões CTA */}
          <div className="flex flex-col gap-4">
            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="h-16 rounded-xl bg-red-600 text-lg font-semibold text-white hover:bg-red-700"
            >
              Criar promoção
            </MotionButton>
            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              variant="outline"
              className="h-16 rounded-xl border-2 border-white bg-transparent text-lg font-semibold text-white hover:bg-white/10"
            >
              Ver como funciona
            </MotionButton>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <motion.section
        className="bg-white py-16 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          {/* Header */}
          <div className="mb-12 md:mb-16 lg:mb-20 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-[48px] font-black leading-tight text-[#01203f]">
              De notas fiscais a resultados em segundos
            </h2>
            <p className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-[720px] text-lg md:text-xl lg:text-[20px] font-normal leading-relaxed text-[rgba(1,32,63,0.8)]">
              Configure campanhas automáticas e veja sua promoção funcionar no piloto automático.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Card 1 */}
            <div className="relative min-h-[280px] lg:h-[282px] rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white px-6 md:px-8 pt-6 md:pt-8 lg:pt-[33px] flex flex-col justify-center py-9">
              {/* Icon */}
              <div className="mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                <img
                  src="https://www.figma.com/api/mcp/asset/df3f780f-6152-40ca-9238-c60fe37dac5f"
                  alt=""
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>
              {/* Number */}
              <div className="mb-3 md:mb-4 text-center">
                <span className="text-sm font-semibold leading-normal text-[#ff0000]">01</span>
              </div>
              {/* Title */}
              <h3 className="mb-3 md:mb-4 text-center text-xl md:text-2xl font-bold leading-normal text-[#01203f]">
                Cliente envia a nota
              </h3>
              {/* Description */}
              <p className="text-center text-sm md:text-base font-normal leading-relaxed text-[rgba(1,32,63,0.7)]">
                Com uma foto, a Rooster lê todos os dados automaticamente.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative min-h-[280px] lg:h-[282px] rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white px-6 md:px-8 pt-6 md:pt-8 lg:pt-[33px] flex flex-col justify-center py-8">
              {/* Icon */}
              <div className="mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                <img
                  src="https://www.figma.com/api/mcp/asset/5513c31f-e282-451d-9032-bc4e055db179"
                  alt=""
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>
              {/* Number */}
              <div className="mb-3 md:mb-4 text-center">
                <span className="text-sm font-semibold leading-normal text-[#ff0000]">02</span>
              </div>
              {/* Title */}
              <h3 className="mb-3 md:mb-4 text-center text-xl md:text-2xl font-bold leading-normal text-[#01203f]">
                IA valida e aplica regras
              </h3>
              {/* Description */}
              <p className="text-center text-sm md:text-base font-normal leading-relaxed text-[rgba(1,32,63,0.7)]">
                OCR + inteligência artificial verificam os critérios da campanha.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative min-h-[280px] lg:h-[282px] rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white px-6 md:px-8 pt-6 md:pt-8 lg:pt-[33px] flex flex-col justify-center md:col-span-2 lg:col-span-1 py-8">
              {/* Icon */}
              <div className="mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full">
                <img
                  src="https://www.figma.com/api/mcp/asset/e58a3ce9-6771-42bc-b3c1-00c0cc5d9f5f"
                  alt=""
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>
              {/* Number */}
              <div className="mb-3 md:mb-4 text-center">
                <span className="text-sm font-semibold leading-normal text-[#ff0000]">03</span>
              </div>
              {/* Title */}
              <h3 className="mb-3 md:mb-4 text-center text-xl md:text-2xl font-bold leading-normal text-[#01203f]">
                Resultados em tempo real
              </h3>
              {/* Description */}
              <p className="text-center text-sm md:text-base font-normal leading-relaxed text-[rgba(1,32,63,0.7)]">
                Você acompanha cupons validados, participantes e métricas sem esforço.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Automation Features Section */}
      <motion.section
        className="bg-[#0344dc]/5 py-16 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="mb-12 md:mb-16 lg:mb-20 text-center text-3xl md:text-4xl lg:text-[48px] font-black leading-tight text-[#01203f]">
            Automatize tudo, de ponta a ponta
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Feature 1 - Leitura Inteligente */}
            <div className="rounded-2xl bg-white/80 p-6 md:p-8">
              <div className="mb-4 md:mb-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-[#ff5001]/20">
                <img
                  src="https://www.figma.com/api/mcp/asset/2b1b0b9b-b386-4018-98bb-d6c013742247"
                  alt=""
                  className="h-4 w-4 md:h-5 md:w-5"
                />
              </div>
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-[#01203f]">
                Leitura Inteligente (OCR + IA)
              </h3>
              <p className="text-sm md:text-base text-[#01203f]/70 leading-relaxed">
                A Rooster identifica produtos, loja, CNPJ, data e valor com precisão total.
              </p>
            </div>

            {/* Feature 2 - Gestão Automatizada */}
            <div className="rounded-2xl bg-white/80 p-6 md:p-8">
              <div className="mb-4 md:mb-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-[#ff0000]/20">
                <img
                  src="https://www.figma.com/api/mcp/asset/2acfff34-bd25-4ab3-aec5-f6ddfca6d3c9"
                  alt=""
                  className="h-4 w-4 md:h-5 md:w-5"
                />
              </div>
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-[#01203f]">Gestão Automatizada</h3>
              <p className="text-sm md:text-base text-[#01203f]/70 leading-relaxed">
                Sem planilhas — o sistema cuida da inscrição, validação e premiação.
              </p>
            </div>

            {/* Feature 3 - Analytics em Tempo Real */}
            <div className="rounded-2xl bg-white/80 p-6 md:p-8">
              <div className="mb-4 md:mb-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-[#01203f]/20">
                <img
                  src="https://www.figma.com/api/mcp/asset/b82dd83e-ae52-4ec6-a4e1-11a8414aeff9"
                  alt=""
                  className="h-4 w-4 md:h-5 md:w-5"
                />
              </div>
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-[#01203f]">Analytics em Tempo Real</h3>
              <p className="text-sm md:text-base text-[#01203f]/70 leading-relaxed">
                Acompanhe resultados, engajamento e ROI direto no painel.
              </p>
            </div>

            {/* Feature 4 - Mecânicas Personalizadas */}
            <div className="rounded-2xl bg-white/80 p-6 md:p-8">
              <div className="mb-4 md:mb-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-[#ff5001]/20">
                <img
                  src="https://www.figma.com/api/mcp/asset/0976de4f-1b3c-41ea-9701-e9b7551399b6"
                  alt=""
                  className="h-4 w-4 md:h-5 md:w-5"
                />
              </div>
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-[#01203f]">Mecânicas Personalizadas</h3>
              <p className="text-sm md:text-base text-[#01203f]/70 leading-relaxed">
                Compre e Ganhe, Sorteios, Pontos ou experiências sob medida.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technology Section */}
      <motion.section
        className="bg-[#01203f] py-16 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-16 md:grid-cols-2">
            {/* Left Column - Text */}
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-[48px] font-black leading-tight text-white">
                Tecnologia que trabalha por você
              </h2>
              <p className="mb-8 md:mb-12 text-lg md:text-xl lg:text-[20px] font-normal leading-relaxed text-white/85">
                Por trás da Rooster, uma tecnologia de ponta feita para ser simples. OCR integrado à IA, dashboards de
                alta performance e segurança total.
              </p>

              {/* Tech Features Grid - 2x2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Feature 1 - Segurança Total */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/d7f54312-2513-4a6f-8fff-9b03c8e1959c"
                      alt=""
                      className="h-3 w-3 md:h-3.5 md:w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm md:text-base font-semibold leading-6 text-white">Segurança Total</h4>
                    <p className="text-xs md:text-sm leading-5 text-white/70">Criptografia e conformidade enterprise</p>
                  </div>
                </div>

                {/* Feature 2 - Alta Performance */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/7fad0be5-f877-4a42-99be-5e84d0b3dab6"
                      alt=""
                      className="h-3 w-3 md:h-3.5 md:w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm md:text-base font-semibold leading-6 text-white">Alta Performance</h4>
                    <p className="text-xs md:text-sm leading-5 text-white/70">
                      Campanhas estáveis, mesmo com picos de acesso
                    </p>
                  </div>
                </div>

                {/* Feature 3 - IA Integrada */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/211f41e5-ab69-47e0-a5b9-65d81c4777c1"
                      alt=""
                      className="h-3 w-3 md:h-3.5 md:w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm md:text-base font-semibold leading-6 text-white">IA Integrada</h4>
                    <p className="text-xs md:text-sm leading-5 text-white/70">
                      Leitura inteligente e análises automáticas
                    </p>
                  </div>
                </div>

                {/* Feature 4 - Escalabilidade */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/07bb31ea-3641-4bf5-b25a-91e0c1ab788b"
                      alt=""
                      className="h-3.5 w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm md:text-base font-semibold leading-6 text-white">Escalabilidade</h4>
                    <p className="text-xs md:text-sm leading-5 text-white/70">
                      Pronta para campanhas locais ou nacionais
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Image */}
            <div className="flex items-center">
              <div className="h-80 md:h-96 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://wqrmsdwtsgcrrkqtpkbm.supabase.co/storage/v1/object/public/photos/header-03.png"
                  alt="Dashboard Analytics"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section
        className="bg-[#0344dc]/5 py-16 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <div className="text-center">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-[36px] font-black leading-tight text-[#01203f]">
              Empresas que crescem com a Rooster
            </h2>
            <p className="mb-12 md:mb-16 text-base md:text-lg leading-relaxed text-[#01203f]/80 max-w-3xl mx-auto">
              De pequenas lojas a grandes marcas — a Rooster está por trás de promoções que fazem a diferença.
            </p>

            {/* Logo Grid */}
            <div className="mb-12 flex justify-center gap-6 md:gap-8">
              {/* Hellmann's Logo */}
              <div className="flex h-16 md:h-20 items-center justify-center rounded-xl bg-white p-4 w-[250px]">
                <img src={hellmannsLogo} alt="Hellmann's" className="max-h-12 md:max-h-16 w-auto object-contain" />
              </div>
            </div>

            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3">
                <Sparkles className="h-4 w-4 text-[#01203f]" />
                <span className="text-base font-semibold text-[#01203f]">+1 milhão de cupons processados</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-[#021a33] py-16 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="mb-12 md:mb-16 lg:mb-20 text-center text-3xl md:text-4xl lg:text-[48px] font-black leading-tight text-white">
            Escolha o melhor caminho para seu crescimento
          </h2>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            {/* Fidelidades Plan */}
            <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-[#00254c] p-6 md:p-8 text-center">
              <div className="mx-auto mb-4 md:mb-6 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-[rgba(255,0,0,0.35)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
              <h3 className="mb-3 md:mb-4 text-2xl md:text-[30px] font-bold leading-tight text-white">
                Rooster Fidelidades
              </h3>
              <p className="mb-6 md:mb-8 text-base md:text-lg font-normal leading-relaxed text-white">
                Fidelize clientes com cashback automático.
              </p>
              <Link to="/contato">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-xl border-2 border-white bg-transparent text-sm md:text-base font-semibold text-white hover:bg-white/10"
                >
                  Ver planos de fidelidade
                </Button>
              </Link>
            </div>

            {/* Promocoes Plan */}
            <div className="rounded-2xl bg-white p-6 md:p-8 text-center">
              <div className="mx-auto mb-4 md:mb-6 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-[rgba(1,32,63,0.23)]">
                <img
                  src="https://www.figma.com/api/mcp/asset/dcdead4e-daec-46b3-90f1-f4fea5cc11a1"
                  alt=""
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>
              <h3 className="mb-3 md:mb-4 text-2xl md:text-[30px] font-bold leading-tight text-[#01203f]">
                Rooster Promoções
              </h3>
              <p className="mb-6 md:mb-8 text-base md:text-lg font-normal leading-relaxed text-[#01203f]">
                Crie promoções que vendem de verdade.
              </p>
              <Link to="/contato">
                <MotionButton
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="h-12 w-full rounded-xl bg-[#01203f] text-sm md:text-base font-semibold text-white hover:bg-[#01203f]/90"
                >
                  Ver planos de promoções
                </MotionButton>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Promocoes;
