import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTAFinal = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto text-center bg-card p-12 rounded-lg shadow-lg">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-black">
            Comece a criar promoções de <span className="text-primary">impacto</span> hoje mesmo.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma demonstração e veja como a Rooster pode transformar seu marketing promocional.
          </p>

          <Button 
            variant="primary"
            size="lg"
            className="text-lg px-10 py-6 h-auto font-bold"
          >
            Agendar Demonstração
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default CTAFinal;
