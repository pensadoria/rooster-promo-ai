import { Gift, Trophy, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const mechanics = [
  {
    icon: Gift,
    title: "Compre e Ganhe",
    description: "Incentive a compra e recompense seus clientes com validação automática de cupons."
  },
  {
    icon: Trophy,
    title: "Sorteios Inteligentes",
    description: "Realize sorteios de forma segura e transparente, com algoritmos que garantem a lisura do processo."
  },
  {
    icon: Users,
    title: "Programa de Pontos",
    description: "Crie programas de fidelidade e gamificação com acúmulo e resgate de benefícios."
  },
  {
    icon: TrendingUp,
    title: "Promoções Personalizadas",
    description: "Desenvolvemos mecânicas sob medida para os objetivos específicos da sua campanha."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const PromotionMechanics = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Mecânicas de <span className="text-primary">Promoção</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crie engajamento e impulsione resultados com estratégias promocionais flexíveis e fáceis de gerenciar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mechanics.map((mechanic, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <Card className="bg-card h-full border-2 border-transparent hover:border-accent transition-colors duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <mechanic.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{mechanic.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{mechanic.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionMechanics;
