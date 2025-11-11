import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Target, Shield, Sparkles, TrendingUp, Rocket, MessageCircle, Handshake, Cpu, Package } from "lucide-react";

// Motion wrappers para interação
const MotionButton = motion(Button);
const MotionLink = motion(Link);

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] overflow-hidden bg-[#01203f]">
        {/* Background Rooster */}
        {/* Exibe o galo azul apenas em telas lg (>=1024px) para simular o corte em 900px */}
        <div className="hidden lg:absolute lg:left-[6px] lg:top-[68px] lg:h-[757.578px] lg:w-[517.001px] lg:block">
          <img
            src="https://wqrmsdwtsgcrrkqtpkbm.supabase.co/storage/v1/object/public/photos/galo.svg"
            alt=""
            className="h-full w-full"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-[1280px] items-center px-4 md:px-20">
          <div className="mx-2 md:mx-8 w-full text-center">
            <h1 className="mx-auto mb-6 w-full max-w-[872px] font-['Inter'] text-[36px] md:text-[72px] font-black leading-[40px] md:leading-[72px] text-white">
              A Rooster nasceu para simplificar o marketing promocional
            </h1>
            <p className="mx-auto w-full max-w-[574px] font-['Inter'] text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[27px] text-white/85">
              Somos a plataforma que automatiza promoções e fidelidade, ajudando
              pequenos e médios negócios a crescerem mais rápido.
            </p>
          </div>
        </div>
      </section>

      {/* Parceiro de Crescimento Section */}
      <motion.section
        className="bg-white py-32"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-20">
          <div className="mx-2 md:mx-8">
            <h2 className="mb-6 w-full max-w-[589px] font-['Inter'] text-[28px] md:text-[48px] font-black leading-[32px] md:leading-[44px] text-[#01203f]">
              Mais que uma ferramenta, um parceiro de crescimento
            </h2>
            <div className="w-full max-w-[576px] space-y-6 font-['Inter'] text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-[rgba(1,32,63,0.8)]">
              <p>
                A Rooster é uma plataforma de automação de promoções e
                fidelidade que ajuda empreendedores a criar campanhas de forma
                prática e eficiente.
              </p>
              <p>
                Tudo acontece em um só lugar: leitura automática de notas
                fiscais, dashboards em tempo real e suporte inteligente com o
                Rook.
              </p>
              <p>
                Nosso propósito é simples — transformar tecnologia em resultado
                acessível para quem faz o varejo acontecer.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* História Premiafy Section */}
      <motion.section
        className="bg-white py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-20">
          <div className="mx-2 md:mx-8">
            {/* Title */}
            <div className="mb-10 md:mb-16 text-center">
              <h2 className="mb-4 font-['Inter'] text-[28px] md:text-[48px] font-black leading-[32px] md:leading-[44px] text-[#01203f]">
                A história que começou com a Premiafy
              </h2>
              <p className="mx-auto w-full max-w-[844px] font-['Inter'] text-[16px] md:text-[20px] leading-[22px] md:leading-[27px] text-[rgba(1,32,63,0.8)]">
                A Rooster nasceu da tecnologia e da experiência da Premiafy —
                uma das plataformas de promoções mais inteligentes do mercado,
                com mais de 1 milhão de usuários impactados.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mb-8 md:mb-12">
              {/* Gradient Line */}
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#01203f] via-[#ff0000] to-[#ff5001]" />

              {/* Timeline Items */}
              <div className="mt-9 grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
                {/* 2017 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-[-36px] size-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#ff0000]" />
                  <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="mb-2 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                      2017
                    </h3>
                    <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                      Nascimento da Premiafy
                    </p>
                  </div>
                </div>

                {/* 2020 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-[-36px] size-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#ff0000]" />
                  <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="mb-2 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                      2020
                    </h3>
                    <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                      Escalabilidade nacional
                    </p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-[-36px] size-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#ff0000]" />
                  <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="mb-2 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                      2024
                    </h3>
                    <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                      Surge a Rooster com o Rook
                    </p>
                  </div>
                </div>

                {/* 2025 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-[-36px] size-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#ff0000]" />
                  <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <h3 className="mb-2 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                      2025
                    </h3>
                    <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                      Fidelidades + Promoções integradas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mx-auto w-full max-w-[896px]">
              <p className="text-center font-['Inter'] text-[16px] md:text-[18px] leading-[22px] md:leading-[25px] text-[rgba(1,32,63,0.8)]">
                A partir desse know-how, criamos uma nova geração de soluções:
                mais leves, rápidas e acessíveis para o varejo. Hoje, a Rooster
                carrega o mesmo DNA de inovação, mas com foco total na
                simplicidade e eficiência.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Missão Section */}
      <motion.section
        className="bg-[#01203f] py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-20">
          <div className="mx-2 md:mx-48 text-center">
            {/* Icon */}
            <div className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full bg-[#ff0000]">
              <Target className="h-8 w-8 text-white" />
            </div>

            {/* Title */}
            <h2 className="mb-6 font-['Inter'] text-[28px] md:text-[48px] font-black leading-[32px] md:leading-[44px] text-white">
              Simplificar o marketing promocional de forma rápida e eficiente
            </h2>

            {/* Description */}
            <p className="mx-auto w-full max-w-[714px] font-['Inter'] text-[16px] md:text-[24px] leading-[22px] md:leading-[33px] text-white/85">
              Ajudar negócios de todos os tamanhos a crescerem mais rápido, com
              promoções e programas de fidelidade que qualquer pessoa consegue
              usar.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Valores Section */}
      <motion.section
        className="bg-white py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-20">
          <div className="mx-2 md:mx-8">
            {/* Title */}
            <h2 className="mb-10 md:mb-16 text-center font-['Inter'] text-[28px] md:text-[48px] font-black leading-[32px] md:leading-[44px] text-[#01203f]">
              O que guia cada linha de código
            </h2>

            {/* Values Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
              {/* Confiança */}
              <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(1,32,63,0.05)]">
                  <Shield className="h-7 w-7 text-[#01203f]" />
                </div>
                <h3 className="mb-4 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                  Confiança
                </h3>
                <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                  Tecnologia segura, transparente e confiável.
                </p>
              </div>

              {/* Simplicidade */}
              <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(255,80,1,0.05)]">
                  <Sparkles className="h-7 w-7 text-[#ff5001]" />
                </div>
                <h3 className="mb-4 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                  Simplicidade
                </h3>
                <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                  Design intuitivo e processos sem complicação.
                </p>
              </div>

              {/* Resultado */}
              <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(255,0,0,0.05)]">
                  <TrendingUp className="h-7 w-7 text-[#ff0000]" />
                </div>
                <h3 className="mb-4 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                  Resultado
                </h3>
                <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                  Cada promoção deve gerar crescimento real.
                </p>
              </div>

              {/* Escala */}
              <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(1,32,63,0.05)]">
                  <Rocket className="h-7 w-7 text-[#01203f]" />
                </div>
                <h3 className="mb-4 font-['Inter'] text-[24px] font-bold text-[#01203f]">
                  Escala
                </h3>
                <p className="font-['Inter'] text-[16px] text-[rgba(1,32,63,0.7)]">
                  Feita para evoluir com o seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* O que esperar Section */}
      <motion.section
        className="bg-white py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-20">
          <div className="mx-2 md:mx-8">
            {/* Title */}
            <h2 className="mb-10 md:mb-16 text-center font-['Inter'] text-[28px] md:text-[48px] font-black leading-[32px] md:leading-[44px] text-[#01203f]">
              O que você pode esperar da Rooster
            </h2>

            {/* Features Grid */}
            <div className="mx-2 md:mx-16 mb-8 md:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* Linguagem humana */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,0,0,0.2)]">
                    <MessageCircle className="h-6 w-6 text-[#ff0000]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-['Inter'] text-[20px] font-bold leading-[28px] text-[#01203f]">
                      Linguagem humana
                    </h3>
                    <p className="font-['Inter'] text-[16px] leading-[22px] text-[rgba(1,32,63,0.7)]">
                      Falamos simples, pensamos grande.
                    </p>
                  </div>
                </div>
              </div>

              {/* Parceria real */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(1,32,63,0.2)]">
                    <Handshake className="h-6 w-6 text-[#01203f]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-['Inter'] text-[20px] font-bold leading-[28px] text-[#01203f]">
                      Parceria real
                    </h3>
                    <p className="font-['Inter'] text-[16px] leading-[22px] text-[rgba(1,32,63,0.7)]">
                      Crescemos junto com quem confia na gente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tecnologia inteligente */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,80,1,0.2)]">
                    <Cpu className="h-6 w-6 text-[#ff5001]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-['Inter'] text-[20px] font-bold leading-[28px] text-[#01203f]">
                      Tecnologia inteligente
                    </h3>
                    <p className="font-['Inter'] text-[16px] leading-[22px] text-[rgba(1,32,63,0.7)]">
                      IA que entende o negócio e não o complica.
                    </p>
                  </div>
                </div>
              </div>

              {/* Entrega constante */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,0,0,0.2)]">
                    <Package className="h-6 w-6 text-[#ff0000]" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-['Inter'] text-[20px] font-bold leading-[28px] text-[#01203f]">
                      Entrega constante
                    </h3>
                    <p className="font-['Inter'] text-[16px] leading-[22px] text-[rgba(1,32,63,0.7)]">
                      Estamos sempre otimizando para você vender mais.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mx-auto w-full max-w-[872px]">
              <p className="text-center font-['Inter'] text-[16px] md:text-[20px] leading-[22px] md:leading-[27px] text-[rgba(1,32,63,0.8)]">
                Na Rooster, cada recurso é feito para gerar impacto real — no
                seu caixa, no seu tempo e no seu crescimento.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-[#021a33] py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-[1280px] px-4 md:px-20">
          <div className="mx-2 md:mx-16">
            <h2 className="mb-10 md:mb-20 text-center font-['Inter'] text-[28px] md:text-[48px] font-black leading-[32px] md:leading-[44px] text-white">
              Escolha o melhor caminho para seu crescimento
            </h2>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Fidelidades Plan */}
              <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-[#00254c] p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(255,0,0,0.35)]">
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
                <h3 className="mb-4 font-['Inter'] text-[30px] font-bold leading-[normal] text-white">
                  Rooster Fidelidades
                </h3>
                <p className="mb-8 font-['Inter'] text-lg font-normal leading-[normal] text-white">
                  Fidelize clientes com cashback automático.
                </p>
                <MotionLink
                  to="/fidelidades"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  style={{ display: "block" }}
                >
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-xl border-2 border-white bg-transparent font-['Inter'] text-base font-semibold text-white hover:bg-white/10"
                  >
                    Ver planos de fidelidade
                  </Button>
                </MotionLink>
              </div>

              {/* Promocoes Plan */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(1,32,63,0.23)]">
                  <Sparkles className="h-7 w-7 text-[#01203f]" />
                </div>
                <h3 className="mb-4 font-['Inter'] text-[30px] font-bold leading-[normal] text-[#01203f]">
                  Rooster Promoções
                </h3>
                <p className="mb-8 font-['Inter'] text-lg font-normal leading-[normal] text-[#01203f]">
                  Crie promoções que vendem de verdade.
                </p>
                <MotionButton
                  className="h-12 w-full rounded-xl bg-[#01203f] font-['Inter'] text-base font-semibold text-white hover:bg-[#01203f]/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  Ver planos de promoções
                </MotionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default SobreNos;
