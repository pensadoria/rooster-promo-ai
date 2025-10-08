import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTAFinal = () => {
  return (
    <motion.section
      id="contact"
      className="bg-red-600 py-32 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Vamos criar algo <span className="text-white/80">grande</span> juntos?
        </h2>

        <p className="text-xl text-white/90 max-w-xl mx-auto">
          Fale com nosso time e acelere suas próximas campanhas.
        </p>

        <Button
          className="bg-white hover:bg-white/95 text-red-600 h-[60px] px-8 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
        >
          Falar com especialista
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </motion.section>
  );
};

export default CTAFinal;
