import { motion } from "framer-motion";
import {
  Award,
  Users,
  Settings,
  FileText,
  BarChart3,
  Lock,
  ArrowRight,
} from "lucide-react";
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
  { id: "2", name: "Hub", industry: "Varejo" },
];

const MissionCasesSection = () => {
  return (
    <section
      id="mission-cases"
      className="bg-[#01203F] py-24 lg:py-32 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-16">
          {/* MISSION BLOCK FULL-WIDTH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Overline */}
            <div className="inline-block">
              <span className="text-[#FF0000] text-sm font-bold tracking-widest uppercase">
                Nossa missão
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="font-black text-white text-5xl lg:text-[56px] leading-[1.0] tracking-tight">
              Simplificar o marketing promocional de forma rápida, segura e
              eficiente.
            </h1>

            {/* Paragraph */}
            <p className="text-white/80 text-lg leading-[1.45] max-w-4xl">
              Crie campanhas que vendem — com sites automáticos, leitura de
              notas via IA e resultados em tempo real. Sem complicação, sem
              planilhas, só crescimento.
            </p>

            {/* Feature Cards Inline (Full Row) */}
            <div>
              <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-6">
                Tecnologia que simplifica, conecta e gera resultado.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Settings,
                    title: "Sites automáticos e prontos",
                    text: "Crie campanhas em minutos com estrutura otimizada.",
                  },
                  {
                    icon: FileText,
                    title: "Leitura de notas via IA",
                    text: "OCR inteligente que reconhece produtos e valida cupons.",
                  },
                  {
                    icon: BarChart3,
                    title: "Métricas em tempo real",
                    text: "Acompanhe resultados, engajamento e ROI em um só painel.",
                  },
                  {
                    icon: Lock,
                    title: "Segurança e compliance",
                    text: "Dados protegidos com tecnologia de nível enterprise.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.08 }}
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center group-hover:shadow-[0_0_0_1px_rgba(255,0,0,0.25)] transition-all">
                      <item.icon
                        className="w-7 h-7 text-[#FF0000]"
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-white font-extrabold text-lg leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(255,0,0,0.08), transparent 70%)",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 gap-8 max-w-sm pt-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#FF0000]" />
                  <span className="text-3xl font-black text-white">+30</span>
                </div>
                <p className="text-white/60 text-sm font-medium">
                  Projetos entregues
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#FF0000]" />
                  <span className="text-3xl font-black text-white">+1M</span>
                </div>
                <p className="text-white/60 text-sm font-medium">
                  Usuários impactados
                </p>
              </div>
            </div>

            {/* CTAs + Pitch Inline */}
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 pt-8 xl:pt-10">
              <div className="space-y-1 max-w-xs">
                <p className="text-white font-bold text-lg leading-tight">
                  Quer ser o próximo?
                </p>
                <p className="text-white/60 text-sm">
                  Agende uma demonstração e veja como funciona.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <button className="bg-[#FF0000] hover:bg-[#FF5001] text-white font-bold px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                    Falar com especialista
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/calculadora">
                  <button className="text-white border-2 border-white/30 hover:border-white hover:bg-white/5 font-semibold px-8 h-12 rounded-full transition-all">
                    Calcular economia
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* (CTA inferior removido - agora inline) */}
        </div>
      </div>
    </section>
  );
};

export default MissionCasesSection;
