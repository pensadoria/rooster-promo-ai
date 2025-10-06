import { Gift, Trophy, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PromotionMechanics = () => {
  const mechanics = [
    {
      icon: Gift,
      title: "Compre e Ganhe",
      description: "Validação automática de compras qualificadas."
    },
    {
      icon: Trophy,
      title: "Sorteios Inteligentes",
      description: "Algoritmos seguros e transparentes para seleção de ganhadores."
    },
    {
      icon: Users,
      title: "Programa de Pontos",
      description: "Gamificação com acúmulo e resgate de benefícios."
    },
    {
      icon: TrendingUp,
      title: "Promoções Personalizadas",
      description: "Mecânicas sob medida para cada objetivo de campanha."
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mecânicas de{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Promoção
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diversas estratégias promocionais para engajar clientes e aumentar resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mechanics.map((mechanic, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:border-accent/50 transition-all hover:scale-105 group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-secondary/30 transition-all">
                  <mechanic.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{mechanic.title}</h3>
                <p className="text-muted-foreground">{mechanic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionMechanics;
