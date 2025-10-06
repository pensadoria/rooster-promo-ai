import { Camera, BarChart3, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            Tecnologia que <span className="text-primary">Revoluciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma combina o poder do OCR e da Inteligência Artificial para validar cupons, analisar dados e garantir a segurança das suas campanhas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <Card className="bg-card h-full border-2 border-transparent hover:border-secondary transition-colors duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="primary" size="lg" className="text-lg">
            Quero uma demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
