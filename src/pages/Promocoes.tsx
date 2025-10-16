import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

      {/* Hero Section */}
      <section className="relative h-[800px] overflow-hidden bg-[#01203f]">
        {/* Background art - Galo (Rooster) */}
        <div
          className="absolute hidden lg:block"
          style={{ left: 6, top: 68, width: 517.001, height: 757.578 }}
        >
          <img
            src="https://www.figma.com/api/mcp/asset/08bcd011-3349-434a-844d-8c4fb4130a93"
            alt="Rooster background art"
            className="block h-full w-full max-w-none object-contain"
            style={{ objectPosition: "left top" }}
          />
        </div>

        {/* Overlays escuros */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content Container */}
        <div className="absolute left-[80px] top-[93px] h-[614px] w-[1280px]">
          <div className="relative h-[614px] w-full px-8">
            <div className="absolute left-1/2 top-1/2 h-[492px] w-[1058px] -translate-x-1/2 -translate-y-1/2">
              {/* Badge com ícone */}
              <div className="absolute left-1/2 top-0 flex h-10 w-[272.984px] -translate-x-1/2 items-center rounded-full bg-white/10 px-4">
                <Sparkles className="h-4 w-4 text-white/90" />
                <span className="ml-2 text-[14px] font-semibold leading-[20px] text-white/90">
                  IA Integrada + 98% de precisão
                </span>
              </div>

              {/* Título Principal */}
              <h1 className="absolute left-1/2 top-[72px] h-[230px] w-[1058px] -translate-x-1/2 text-center font-['Inter'] text-[72px] font-black leading-[72px] text-white">
                A plataforma que transforma suas promoções em resultados
              </h1>

              {/* Subtítulo */}
              <p className="absolute left-1/2 top-[342px] h-[54px] w-[558px] -translate-x-1/2 text-center font-['Inter'] text-[20px] font-normal leading-[27px] text-white/85">
                A Rooster lê notas fiscais, valida cupons e mostra tudo em tempo
                real — sem planilhas e sem complicação.
              </p>

              {/* Botões CTA */}
              <div className="absolute left-1/2 top-[428px] flex h-16 w-[518px] -translate-x-1/2 items-center gap-4">
                <Button className="h-16 w-[270.328px] rounded-xl bg-[#ff0000] font-['Inter'] text-[18px] font-semibold text-white hover:bg-[#ff0000]/90">
                  Criar promoção
                </Button>
                <Button
                  variant="outline"
                  className="h-16 w-[232.078px] rounded-xl border-2 border-white bg-transparent font-['Inter'] text-[18px] font-semibold text-white hover:bg-white/10"
                >
                  Ver como funciona
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-32">
        <div className="mx-auto w-full max-w-[1440px] px-20">
          <div className="mx-8">
            {/* Header */}
            <div className="mb-20 text-center">
              <h2 className="mb-4 font-['Inter'] text-[48px] font-black leading-[44px] text-[#01203f]">
                De notas fiscais a resultados em segundos
              </h2>
              <p className="mx-auto max-w-[720px] font-['Inter'] text-[20px] font-normal leading-[27px] text-[rgba(1,32,63,0.8)]">
                Configure campanhas automáticas e veja sua promoção funcionar no
                piloto automático.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Card 1 */}
              <div className="relative h-[282.188px] rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white px-8 pt-[33px]">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/df3f780f-6152-40ca-9238-c60fe37dac5f"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                {/* Number */}
                <div className="mb-4 text-center">
                  <span className="font-['Inter'] text-[14px] font-semibold leading-[normal] text-[#ff0000]">
                    01
                  </span>
                </div>
                {/* Title */}
                <h3 className="mb-4 text-center font-['Inter'] text-2xl font-bold leading-[normal] text-[#01203f]">
                  Cliente envia a nota
                </h3>
                {/* Description */}
                <p className="text-center font-['Inter'] text-base font-normal leading-[normal] text-[rgba(1,32,63,0.7)]">
                  Com uma foto, a Rooster lê todos os dados automaticamente.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative h-[282.188px] rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white px-8 pt-[33px]">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/5513c31f-e282-451d-9032-bc4e055db179"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                {/* Number */}
                <div className="mb-4 text-center">
                  <span className="font-['Inter'] text-[14px] font-semibold leading-[normal] text-[#ff0000]">
                    02
                  </span>
                </div>
                {/* Title */}
                <h3 className="mb-4 text-center font-['Inter'] text-2xl font-bold leading-[normal] text-[#01203f]">
                  IA valida e aplica regras
                </h3>
                {/* Description */}
                <p className="text-center font-['Inter'] text-base font-normal leading-[normal] text-[rgba(1,32,63,0.7)]">
                  OCR + inteligência artificial verificam os critérios da
                  campanha.
                </p>
              </div>

              {/* Card 3 */}
              <div className="relative h-[282.188px] rounded-2xl border border-[rgba(1,32,63,0.1)] bg-white px-8 pt-[33px]">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/e58a3ce9-6771-42bc-b3c1-00c0cc5d9f5f"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
                {/* Number */}
                <div className="mb-4 text-center">
                  <span className="font-['Inter'] text-[14px] font-semibold leading-[normal] text-[#ff0000]">
                    03
                  </span>
                </div>
                {/* Title */}
                <h3 className="mb-4 text-center font-['Inter'] text-2xl font-bold leading-[normal] text-[#01203f]">
                  Resultados em tempo real
                </h3>
                {/* Description */}
                <p className="text-center font-['Inter'] text-base font-normal leading-[normal] text-[rgba(1,32,63,0.7)]">
                  Você acompanha cupons validados, participantes e métricas sem
                  esforço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features Section */}
      <section className="bg-[#0344dc]/5 py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8">
            <h2 className="mb-20 text-center text-[48px] font-black leading-[44px] text-[#01203f]">
              Automatize tudo, de ponta a ponta
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Feature 1 - Leitura Inteligente */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff5001]/20">
                  <img
                    src="https://www.figma.com/api/mcp/asset/2b1b0b9b-b386-4018-98bb-d6c013742247"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#01203f]">
                  Leitura Inteligente (OCR + IA)
                </h3>
                <p className="text-[#01203f]/70">
                  A Rooster identifica produtos, loja, CNPJ, data e valor com
                  precisão total.
                </p>
              </div>

              {/* Feature 2 - Gestão Automatizada */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff0000]/20">
                  <img
                    src="https://www.figma.com/api/mcp/asset/2acfff34-bd25-4ab3-aec5-f6ddfca6d3c9"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#01203f]">
                  Gestão Automatizada
                </h3>
                <p className="text-[#01203f]/70">
                  Sem planilhas — o sistema cuida da inscrição, validação e
                  premiação.
                </p>
              </div>

              {/* Feature 3 - Analytics em Tempo Real */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#01203f]/20">
                  <img
                    src="https://www.figma.com/api/mcp/asset/b82dd83e-ae52-4ec6-a4e1-11a8414aeff9"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#01203f]">
                  Analytics em Tempo Real
                </h3>
                <p className="text-[#01203f]/70">
                  Acompanhe resultados, engajamento e ROI direto no painel.
                </p>
              </div>

              {/* Feature 4 - Mecânicas Personalizadas */}
              <div className="rounded-2xl bg-white/80 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff5001]/20">
                  <img
                    src="https://www.figma.com/api/mcp/asset/0976de4f-1b3c-41ea-9701-e9b7551399b6"
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#01203f]">
                  Mecânicas Personalizadas
                </h3>
                <p className="text-[#01203f]/70">
                  Compre e Ganhe, Sorteios, Pontos ou experiências sob medida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-[#01203f] py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8 grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Left Column - Text */}
            <div>
              <h2 className="mb-6 font-['Inter'] text-[48px] font-black leading-[44px] text-white">
                Tecnologia que trabalha por você
              </h2>
              <p className="mb-12 font-['Inter'] text-[20px] font-normal leading-[27px] text-white/85">
                Por trás da Rooster, uma tecnologia de ponta feita para ser
                simples. OCR integrado à IA, dashboards de alta performance e
                segurança total.
              </p>

              {/* Tech Features Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {/* Feature 1 - Segurança Total */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/d7f54312-2513-4a6f-8fff-9b03c8e1959c"
                      alt=""
                      className="h-3.5 w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 font-['Inter'] text-base font-semibold leading-6 text-white">
                      Segurança Total
                    </h4>
                    <p className="font-['Inter'] text-sm leading-5 text-white/70">
                      Criptografia e conformidade enterprise
                    </p>
                  </div>
                </div>

                {/* Feature 2 - Alta Performance */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/7fad0be5-f877-4a42-99be-5e84d0b3dab6"
                      alt=""
                      className="h-3.5 w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 font-['Inter'] text-base font-semibold leading-6 text-white">
                      Alta Performance
                    </h4>
                    <p className="font-['Inter'] text-sm leading-5 text-white/70">
                      Campanhas estáveis, mesmo com picos de acesso
                    </p>
                  </div>
                </div>

                {/* Feature 3 - IA Integrada */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/211f41e5-ab69-47e0-a5b9-65d81c4777c1"
                      alt=""
                      className="h-3.5 w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 font-['Inter'] text-base font-semibold leading-6 text-white">
                      IA Integrada
                    </h4>
                    <p className="font-['Inter'] text-sm leading-5 text-white/70">
                      Leitura inteligente e análises automáticas
                    </p>
                  </div>
                </div>

                {/* Feature 4 - Escalabilidade */}
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff0000]/20">
                    <img
                      src="https://www.figma.com/api/mcp/asset/07bb31ea-3641-4bf5-b25a-91e0c1ab788b"
                      alt=""
                      className="h-3.5 w-3.5"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 font-['Inter'] text-base font-semibold leading-6 text-white">
                      Escalabilidade
                    </h4>
                    <p className="font-['Inter'] text-sm leading-5 text-white/70">
                      Pronta para campanhas locais ou nacionais
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Image */}
            <div className="flex items-center">
              <div className="h-96 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://www.figma.com/api/mcp/asset/a6cae9f9-0c2a-4593-86bf-8325f2dc43f8"
                  alt="Dashboard Analytics"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8">
            <h2 className="mb-20 text-center font-['Inter'] text-[48px] font-black leading-[44px] text-[#01203f]">
              Resultados que você sente no caixa
            </h2>

            {/* Stats Grid */}
            <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Stat 1 - +30% */}
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/17154a02-08b4-43ef-8c32-42e582d43412"
                    alt=""
                    className="h-[30px] w-[30px]"
                  />
                </div>
                <div className="mb-4 font-['Inter'] text-[36px] font-black leading-[40px] text-[#01203f]">
                  +30%
                </div>
                <h3 className="mb-2 font-['Inter'] text-lg font-semibold leading-[28px] text-[#01203f]">
                  aumento médio nas vendas
                </h3>
                <p className="font-['Inter'] text-base leading-[22px] text-[rgba(1,32,63,0.7)]">
                  Promoções que convertem em crescimento real.
                </p>
              </div>

              {/* Stat 2 - 98% */}
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/147d66bd-08ae-47cf-8c6c-0cbc98534d5f"
                    alt=""
                    className="h-[30px] w-[30px]"
                  />
                </div>
                <div className="mb-4 font-['Inter'] text-[36px] font-black leading-[40px] text-[#01203f]">
                  98%
                </div>
                <h3 className="mb-2 font-['Inter'] text-lg font-semibold leading-[28px] text-[#01203f]">
                  cupons validados automaticamente
                </h3>
                <p className="font-['Inter'] text-base leading-[22px] text-[rgba(1,32,63,0.7)]">
                  Menos erro, mais velocidade e transparência.
                </p>
              </div>

              {/* Stat 3 - Minutos */}
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                  <img
                    src="https://www.figma.com/api/mcp/asset/6bfa4818-b9f7-4635-8218-67dec6f213dc"
                    alt=""
                    className="h-[30px] w-[30px]"
                  />
                </div>
                <div className="mb-4 font-['Inter'] text-[36px] font-black leading-[40px] text-[#01203f]">
                  Minutos
                </div>
                <h3 className="mb-2 font-['Inter'] text-lg font-semibold leading-[28px] text-[#01203f]">
                  configuração
                </h3>
                <p className="font-['Inter'] text-base leading-[22px] text-[rgba(1,32,63,0.7)]">
                  Do cadastro ao primeiro cupom ativo — tudo rápido.
                </p>
              </div>
            </div>

            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex h-14 items-center gap-3 rounded-full bg-[rgba(1,32,63,0.05)] px-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000]">
                  <img
                    src="https://www.figma.com/api/mcp/asset/334c874a-5488-4a7e-bc97-1e7342cbf6d9"
                    alt=""
                    className="h-3.5 w-3.5"
                  />
                </div>
                <span className="font-['Inter'] text-base font-semibold leading-[normal] text-[#01203f]">
                  Dados em tempo real
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-[#0344dc]/5 py-32">
        <div className="mx-auto max-w-[1280px] px-20">
          <div className="mx-8 text-center">
            <h2 className="mb-4 text-[36px] font-black leading-[33px] text-[#01203f]">
              Empresas que crescem com a Rooster
            </h2>
            <p className="mb-16 text-lg leading-[25px] text-[#01203f]/80">
              De pequenas lojas a grandes marcas — a Rooster está por trás de
              promoções que fazem a diferença.
            </p>

            {/* Logo Grid */}
            <div className="mb-12 grid grid-cols-1 gap-8 opacity-60 md:grid-cols-4">
              {["MARCA A", "MARCA B", "MARCA C", "MARCA D"].map((brand) => (
                <div
                  key={brand}
                  className="flex h-20 items-center justify-center rounded-xl bg-white"
                >
                  <span className="text-2xl font-bold text-[#01203f]">
                    {brand}
                  </span>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3">
                <Sparkles className="h-4 w-4 text-[#01203f]" />
                <span className="text-base font-semibold text-[#01203f]">
                  +1 milhão de cupons processados
                </span>
              </div>
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

export default Promocoes;
