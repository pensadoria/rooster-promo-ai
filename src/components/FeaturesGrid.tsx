import { Camera, BarChart3, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Camera,
      title: "OCR + IA",
      description: "Leitura inteligente de cupons com inteligência artificial."
    },
    {
      icon: BarChart3,
      title: "Analytics Avançados",
      description: "Dashboard completo com métricas e relatórios em tempo real."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Gestão automatizada e segura de participantes e ganhadores."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Suporte a campanhas de alto volume com estabilidade e velocidade."
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tecnologia que{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Revoluciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recursos avançados para impulsionar campanhas promocionais com eficiência e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border hover:border-secondary/50 transition-all hover:scale-105 group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-accent/30 transition-all">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
