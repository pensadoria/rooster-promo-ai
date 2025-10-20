import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import iconImage from "@/assets/icon.png";

// Assets gerados pelo plugin Figma (servidor local exposto pelo MCP)
const imgGroup = "http://localhost:3845/assets/9b4adbfa3cd945fdd24d8abc53b76dc3fcf51b6d.svg";
const imgFrame = "http://localhost:3845/assets/2e498edd9e5b9eb4553b47690f938f38f57fb0bc.svg";
// Imagem do bucket Supabase
const imgImg = "https://wqrmsdwtsgcrrkqtpkbm.supabase.co/storage/v1/object/public/photos/header-02.png";

const Hero = () => {
  return (
    <>
      {/* Desktop Layout - Centralizado */}
      <motion.div
        className="hidden xl:block bg-[#01203f] relative w-full min-h-[800px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center min-h-[800px] w-full">
          <div className="w-full max-w-[1280px] px-8 mx-auto">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                {/* Main Title */}
                <h1 className="font-['Inter:Black',_sans-serif] font-black text-[72px] leading-[72px] text-white">
                  Crie promoções que vendem — com sites automáticos e inteligentes
                </h1>

                {/* Subtitle */}
                <p className="font-['Inter:Regular',_sans-serif] font-normal text-[20px] leading-[27px] text-[rgba(255,255,255,0.85)] max-w-[492px]">
                  A Rooster lê as notas, valida os cupons e mostra os resultados em tempo real.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Link to="/contato">
                    <div className="bg-[red] h-[64px] rounded-[12px] w-[270px] cursor-pointer hover:bg-red-600/90 transition-colors flex items-center justify-center">
                      <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[18px] text-center text-white">
                        Criar promoção
                      </span>
                    </div>
                  </Link>
                  <Link to="/contato">
                    <div className="bg-[rgba(0,0,0,0)] border-2 border-solid border-white h-[64px] rounded-[12px] w-[232px] cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center">
                      <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[18px] text-center text-white">
                        Ver como funciona
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                {/* Badge - Positioned above image */}
                <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 -top-8 rounded-[8px] px-3 py-2 z-10">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-white">
                    Pronto pra vender mais? 🚀
                  </p>
                </div>

                {/* Image Container */}
                <div className="relative rounded-[16px] overflow-hidden h-[384px]">
                  <img alt="" className="w-full h-full object-cover rounded-[16px]" src={imgImg} />

                  {/* Play Button */}
                  <div className="absolute bg-[red] right-3 -bottom-8 rounded-[9999px] size-[64px] cursor-pointer hover:bg-red-600/90 transition-colors flex items-center justify-center z-10">
                    <div className="w-[20px] h-[20px]">
                      <img alt="" className="w-full h-full" src={iconImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tablet Layout - Adaptação responsiva */}
      <motion.div
        className="hidden lg:block xl:hidden bg-[#01203f] relative w-full min-h-screen pt-24 pb-12 px-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Main Title */}
              <h1 className="font-['Inter:Black',_sans-serif] font-black text-[48px] lg:text-[56px] leading-[1.1] text-white">
                Crie promoções que vendem — com sites automáticos e inteligentes
              </h1>

              {/* Subtitle */}
              <p className="font-['Inter:Regular',_sans-serif] font-normal text-[18px] lg:text-[20px] leading-[27px] text-[rgba(255,255,255,0.85)]">
                A Rooster lê as notas, valida os cupons e mostra os resultados em tempo real.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Link to="/contato">
                  <div className="bg-[red] h-[64px] rounded-[12px] w-[270px] cursor-pointer hover:bg-red-600/90 transition-colors flex items-center justify-center">
                    <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[18px] text-center text-white">
                      Criar promoção
                    </span>
                  </div>
                </Link>
                <Link to="/contato">
                  <div className="bg-[rgba(0,0,0,0)] border-2 border-solid border-white h-[64px] rounded-[12px] w-[232px] cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center">
                    <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[18px] text-center text-white">
                      Ver como funciona
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative rounded-[16px] overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-[16px]" src={imgImg} />

                {/* Play Button */}
                <div className="absolute bg-[red] right-4 bottom-4 rounded-[9999px] size-[64px] cursor-pointer hover:bg-red-600/90 transition-colors flex items-center justify-center">
                  <div className="w-[20px] h-[20px]">
                    <img alt="" className="w-full h-full" src={iconImage} />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute bg-[rgba(255,255,255,0.1)] left-4 top-4 rounded-[8px] px-4 py-2">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-white">
                    Pronto pra vender mais? 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Layout - Adaptação responsiva */}
      <motion.div
        className="block lg:hidden bg-[#01203f] relative w-full min-h-screen pt-24 pb-12 px-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-md mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <span className="text-[14px] font-semibold text-white/90">
              Pronto pra vender mais? 🚀
            </span>
          </div>

          {/* Title */}
          <h1 className="font-['Inter:Black',_sans-serif] font-black text-[28px] md:text-[32px] leading-[1.1] text-white">
            Crie promoções que vendem — com sites automáticos e inteligentes
          </h1>

          {/* Subtitle */}
          <p className="font-['Inter:Regular',_sans-serif] font-normal text-[16px] md:text-[18px] leading-[27px] text-[rgba(255,255,255,0.85)]">
            A Rooster lê as notas, valida os cupons e mostra os resultados em tempo real.
          </p>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-[16px] overflow-hidden">
              <img
                alt=""
                className="w-full h-auto object-cover rounded-[16px]"
                src={imgImg}
              />
              {/* Play Button */}
              <div className="absolute bg-[red] right-4 bottom-4 rounded-[9999px] size-[56px] cursor-pointer hover:bg-red-600/90 transition-colors flex items-center justify-center">
                <div className="w-[18px] h-[18px]">
                  <img alt="" className="w-full h-full" src={iconImage} />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <Link to="/contato">
              <div className="bg-[red] h-[56px] rounded-[12px] cursor-pointer hover:bg-red-600/90 transition-colors flex items-center justify-center">
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-center text-white">
                  Criar promoção
                </span>
              </div>
            </Link>
            <Link to="/contato">
              <div className="bg-[rgba(0,0,0,0)] border-2 border-solid border-white h-[56px] rounded-[12px] cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center">
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-center text-white">
                  Ver como funciona
                </span>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
