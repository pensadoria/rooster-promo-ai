import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage1 from "@/assets/hero-carousel-1.jpg";
import heroImage2 from "@/assets/hero-carousel-2.jpg";
import heroImage3 from "@/assets/hero-carousel-3.jpg";

const Hero = () => {
  const images = [heroImage1, heroImage2, heroImage3];

  return (
    <section className="relative min-h-[600px] md:min-h-[924px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`Hero background ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0d1d35]/90 to-[#01203f]/95" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[1076px] mx-auto text-center space-y-8">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-[72px] font-black leading-tight text-white"
          >
            Crie promoções que vendem, em minutos.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-[680px] mx-auto leading-relaxed"
          >
            A plataforma que transforma seu marketing promocional em resultados reais.
            <br />
            Sem complicação, sem planilhas, só crescimento.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center pt-4"
          >
            <Link to="/contato">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 h-[60px] rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Criar minha campanha
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="ml-2">
                  <path d="M1 9H15M15 9L8 2M15 9L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
