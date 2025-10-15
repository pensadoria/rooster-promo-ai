import { motion } from "framer-motion";
import { Shield, BarChart3, Zap } from "lucide-react";

const TechnologySection = () => {
  const Bullet = ({ icon, title, description }: { icon: "zap" | "bar" | "shield"; title: string; description: string }) => {
    const IconComp = icon === "zap" ? Zap : icon === "bar" ? BarChart3 : Shield;
    return (
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-md bg-[rgba(255,0,0,0.1)] flex items-center justify-center shrink-0">
          <IconComp className="w-3.5 h-3.5 text-[#FF2A00]" />
        </div>
        <div>
          <div className="text-[16px] font-semibold text-[#01203F] leading-[24px]">{title}</div>
          <div className="text-[14px] text-[rgba(30,30,30,0.7)] leading-[20px]">{description}</div>
        </div>
      </div>
    );
  };

  return (
    <section id="tech-section" className="relative py-24 px-6 md:px-8 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="container mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Coluna esquerda - textos e bullets */}
          <div>
            <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-black text-[#01203F] mb-3">
              Sua promoção pronta em minutos
            </h2>
            <p className="text-[18px] leading-[28px] text-[rgba(30,30,30,0.7)] mb-8 max-w-[575px]">
              Resultados em tempo real, economia de tempo e redução de 80% no custo operacional.
            </p>

            <div className="space-y-6">
              <Bullet icon="zap" title="Setup Instantâneo" description="Configure sua campanha em minutos, não semanas." />
              <Bullet icon="bar" title="Visibilidade Total" description="Dashboards com métricas instantâneas e insights acionáveis." />
              <Bullet icon="shield" title="Segurança Garantida" description="IA avançada reduz fraudes em 95%+ automaticamente." />
            </div>
          </div>

          {/* Coluna direita - card métricas */}
          <div>
            <div className="rounded-2xl p-8 md:p-10" style={{
              background: 'linear-gradient(135deg, #01203F 0%, #0052FF 100%)',
              boxShadow: '0 20px 60px rgba(0, 82, 255, 0.25)'
            }}>
              <div className="grid grid-cols-2 gap-y-8 text-white">
                <div className="text-center">
                  <div className="text-[28px] md:text-[30px] font-black">80%</div>
                  <div className="text-[14px] opacity-80 leading-[20px]">Redução de custos</div>
                </div>
                <div className="text-center">
                  <div className="text-[28px] md:text-[30px] font-black">95%</div>
                  <div className="text-[14px] opacity-80 leading-[20px]">Menos fraudes</div>
                </div>
                <div className="text-center">
                  <div className="text-[28px] md:text-[30px] font-black">3min</div>
                  <div className="text-[14px] opacity-80 leading-[20px]">Setup médio</div>
                </div>
                <div className="text-center">
                  <div className="text-[28px] md:text-[30px] font-black">24/7</div>
                  <div className="text-[14px] opacity-80 leading-[20px]">Monitoramento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced motion support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
