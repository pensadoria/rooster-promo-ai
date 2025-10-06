import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="py-28 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 
            className="text-5xl md:text-6xl font-black leading-tight"
            dangerouslySetInnerHTML={{ __html: "Marketing promocional,<br />simplificado e eficiente." }}
          />
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Da leitura do cupom à análise de resultados, nossa IA automatiza todo o processo para você. Crie campanhas de alto impacto em minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg"
              className="text-lg"
            >
              Agendar Demonstração
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg"
            >
              Ver como funciona
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" />
          <img 
            src={heroImage} 
            alt="Dashboard da Rooster mostrando análise de cupons" 
            className="relative w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
