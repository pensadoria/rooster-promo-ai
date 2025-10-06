import { CheckCircle2 } from "lucide-react";
import featureImage from "@/assets/feature-ocr.png";

const FeatureHighlight = () => {
  const features = [
    "OCR integrado à IA",
    "Gestão automatizada",
    "Análise contextual inteligente",
    "Alta performance"
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
          <img 
            src={featureImage} 
            alt="Leitura inteligente de cupons" 
            className="relative z-10 w-full h-auto rounded-2xl"
          />
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Leitura Inteligente de{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Cupons
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com apenas uma imagem, a IA da Rooster lê produtos, loja, CNPJ, data e valor. 
            Automatiza toda a gestão promocional com segurança e escalabilidade.
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
