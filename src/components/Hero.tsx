import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            A tecnologia que{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              revoluciona
            </span>{" "}
            suas promoções.
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            A Rooster automatiza todo o processo — da leitura do cupom à análise de resultados — com IA e OCR integrados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="hover:scale-105 transition-transform text-lg"
            >
              Quero conhecer a Rooster
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg border-2 hover:bg-card"
            >
              Ver como funciona
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-3xl rounded-full"></div>
          <img 
            src={heroImage} 
            alt="IA da Rooster lendo nota fiscal" 
            className="relative z-10 w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
