import { useEffect, useRef, useState } from "react";
import featureImage from "@/assets/feature-ocr.png";

const FeatureHighlight = () => {
  const cards = [
    {
      num: "01",
      title: "OCR + IA",
      description:
        "Com apenas uma imagem, a IA lê produtos, loja, CNPJ, data e valor.",
      longDescription:
        "Extração confiável de dados da nota/cupom com validações contextuais e prevenção de fraude, pronta para fluxos de promoção.",
      image: featureImage
    },
    {
      num: "02",
      title: "Gestão automatizada",
      description:
        "Fluxos seguros para validação, elegibilidade e operação da promoção.",
      longDescription:
        "Regras de elegibilidade, aprovação e comunicação automatizadas, reduzindo esforço operacional e tempo de campanha.",
      image: featureImage
    },
    {
      num: "03",
      title: "Analytics e escala",
      description:
        "Métricas em tempo real e estabilidade para alto volume de campanhas.",
      longDescription:
        "Dashboards com KPIs de adesão, aprovação e ROI; arquitetura preparada para picos de tráfego e múltiplas marcas.",
      image: featureImage
    }
  ];

  const [visible, setVisible] = useState([false, false, false]);
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr == null) return;
          const index = Number(indexAttr);
          if (entry.isIntersecting) {
            setVisible(prev => {
              const copy = [...prev];
              copy[index] = true;
              return copy;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">Ecommerce para qualquer etapa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantenha a mesma jornada com a nossa tecnologia: do OCR à escala.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.num}
              ref={refs[idx]}
              data-index={idx}
              className={`group rounded-xl border border-border bg-white overflow-hidden transition-all duration-700 will-change-transform ${
                visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } hover:shadow-lg hover:-translate-y-1`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="bg-muted/40 aspect-[16/10] flex items-center justify-center">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-sm text-muted-foreground">{card.num}</span>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>

                <div
                  aria-hidden="true"
                  className="mt-2 overflow-hidden max-h-0 opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <p className="text-sm text-muted-foreground/90">
                    {card.longDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
