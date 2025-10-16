import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[800px] overflow-hidden bg-[#01203f]">
        {/* Background Rooster */}
        <div className="absolute left-[6px] top-[68px] h-[757.578px] w-[517.001px]">
          <img
            src="https://www.figma.com/api/mcp/asset/26b0a719-004b-45a0-b513-dedc637a27f9"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-[1280px] items-center px-20">
          <div className="mx-8 w-full text-center">
            <h1 className="mx-auto mb-6 w-[872px] font-['Inter'] text-[72px] font-black leading-[72px] text-white">
              A Rooster nasceu para simplificar o marketing promocional
            </h1>
            <p className="mx-auto w-[574px] font-['Inter'] text-[20px] font-normal leading-[27px] text-white/85">
              Somos a plataforma que automatiza promoções e fidelidade, ajudando
              pequenos e médios negócios a crescerem mais rápido.
            </p>
          </div>
        </div>
      </section>

      {/* Parceiro de Crescimento Section */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8">
            <h2 className="mb-6 w-[589px] font-['Inter'] text-[48px] font-black leading-[44px] text-[#01203f]">
              Mais que uma ferramenta, um parceiro de crescimento
            </h2>
            <div className="w-[576px] space-y-6 font-['Inter'] text-[18px] leading-[25px] text-[rgba(1,32,63,0.8)]">
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
      </section>

      {/* História Premiafy Section */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8">
            {/* Title */}
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-['Inter'] text-[48px] font-black leading-[44px] text-[#01203f]">
                A história que começou com a Premiafy
              </h2>
              <p className="mx-auto w-[844px] font-['Inter'] text-[20px] leading-[27px] text-[rgba(1,32,63,0.8)]">
                A Rooster nasceu da tecnologia e da experiência da Premiafy —
                uma das plataformas de promoções mais inteligentes do mercado,
                com mais de 1 milhão de usuários impactados.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mb-12">
              {/* Gradient Line */}
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#01203f] via-[#ff0000] to-[#ff5001]" />

              {/* Timeline Items */}
              <div className="mt-9 grid grid-cols-4 gap-8">
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
            <div className="mx-auto w-[896px]">
              <p className="text-center font-['Inter'] text-[18px] leading-[25px] text-[rgba(1,32,63,0.8)]">
                A partir desse know-how, criamos uma nova geração de soluções:
                mais leves, rápidas e acessíveis para o varejo. Hoje, a Rooster
                carrega o mesmo DNA de inovação, mas com foco total na
                simplicidade e eficiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="bg-[#01203f] py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-48 text-center">
            {/* Icon */}
            <div className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full bg-[#ff0000]">
              <img
                src="https://www.figma.com/api/mcp/asset/0fa9237b-235c-4354-b1b0-358455ff6ca6"
                alt=""
                className="h-8 w-8"
              />
            </div>

            {/* Title */}
            <h2 className="mb-6 font-['Inter'] text-[48px] font-black leading-[44px] text-white">
              Simplificar o marketing promocional de forma rápida e eficiente
            </h2>

            {/* Description */}
            <p className="mx-auto w-[714px] font-['Inter'] text-[24px] leading-[33px] text-white/85">
              Ajudar negócios de todos os tamanhos a crescerem mais rápido, com
              promoções e programas de fidelidade que qualquer pessoa consegue
              usar.
            </p>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8">
            {/* Title */}
            <h2 className="mb-16 text-center font-['Inter'] text-[48px] font-black leading-[44px] text-[#01203f]">
              O que guia cada linha de código
            </h2>

            {/* Values Grid */}
            <div className="grid grid-cols-4 gap-8">
              {/* Confiança */}
              <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/0cb68945-a1c8-4672-94c5-e40feb953d34"
                    alt=""
                    className="h-6 w-6"
                  />
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
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/6ca80325-f22d-4619-ba43-ecd2be4327e6"
                    alt=""
                    className="h-6 w-6"
                  />
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
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/2e4e8700-0658-44e4-849a-f2efe50d51db"
                    alt=""
                    className="h-6 w-6"
                  />
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
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/bda32991-d5ed-4a91-93d1-f0a23524f37a"
                    alt=""
                    className="h-6 w-6"
                  />
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
      </section>

      {/* O que esperar Section */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8">
            {/* Title */}
            <h2 className="mb-16 text-center font-['Inter'] text-[48px] font-black leading-[44px] text-[#01203f]">
              O que você pode esperar da Rooster
            </h2>

            {/* Features Grid */}
            <div className="mx-16 mb-12 grid grid-cols-2 gap-8">
              {/* Linguagem humana */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,0,0,0.2)]">
                    <img
                      src="https://www.figma.com/api/mcp/asset/74a93686-f602-458d-aa03-dedb3907701a"
                      alt=""
                      className="h-5 w-5"
                    />
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
                    <img
                      src="https://www.figma.com/api/mcp/asset/881bb692-8571-4466-b274-824561347928"
                      alt=""
                      className="h-5 w-5"
                    />
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
                    <img
                      src="https://www.figma.com/api/mcp/asset/7a7cb9a9-3058-4185-b714-fcaa6a0b7df0"
                      alt=""
                      className="h-4 w-4"
                    />
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
                    <img
                      src="https://www.figma.com/api/mcp/asset/ca3454f0-2ae2-4d50-bbea-70e7279ec661"
                      alt=""
                      className="h-4 w-4"
                    />
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
            <div className="mx-auto w-[872px]">
              <p className="text-center font-['Inter'] text-[20px] leading-[27px] text-[rgba(1,32,63,0.8)]">
                Na Rooster, cada recurso é feito para gerar impacto real — no
                seu caixa, no seu tempo e no seu crescimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#021a33] py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-16">
            <h2 className="mb-20 text-center font-['Inter'] text-[48px] font-black leading-[44px] text-white">
              Escolha o melhor caminho para seu crescimento
            </h2>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Fidelidades Plan */}
              <div className="rounded-2xl border border-[rgba(1,32,63,0.1)] bg-[#00254c] p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(255,0,0,0.35)]">
                  <img
                    src="https://www.figma.com/api/mcp/asset/4ba96db0-11ef-4d79-aacd-6ab7c22416f0"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mb-4 font-['Inter'] text-[30px] font-bold leading-[normal] text-white">
                  Rooster Fidelidades
                </h3>
                <p className="mb-8 font-['Inter'] text-lg font-normal leading-[normal] text-white">
                  Fidelize clientes com cashback automático.
                </p>
                <Link to="/fidelidades">
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-xl border-2 border-white bg-transparent font-['Inter'] text-base font-semibold text-white hover:bg-white/10"
                  >
                    Ver planos de fidelidade
                  </Button>
                </Link>
              </div>

              {/* Promocoes Plan */}
              <div className="rounded-2xl bg-white p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(1,32,63,0.23)]">
                  <img
                    src="https://www.figma.com/api/mcp/asset/dcdead4e-daec-46b3-90f1-f4fea5cc11a1"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mb-4 font-['Inter'] text-[30px] font-bold leading-[normal] text-[#01203f]">
                  Rooster Promoções
                </h3>
                <p className="mb-8 font-['Inter'] text-lg font-normal leading-[normal] text-[#01203f]">
                  Crie promoções que vendem de verdade.
                </p>
                <Button className="h-12 w-full rounded-xl bg-[#01203f] font-['Inter'] text-base font-semibold text-white hover:bg-[#01203f]/90">
                  Ver planos de promoções
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;
