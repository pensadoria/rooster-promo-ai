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
      {/* Desktop Layout - Mantém visual original */}
      <div className="hidden xl:block border-0 bg-[#01203f] border-gray-200 border-solid relative size-full min-h-[800px] w-full">
        <div className="relative size-full">
          <div className="absolute bg-[rgba(0,0,0,0.2)] border-0 border-gray-200 border-solid h-[800px] left-0 top-0" />
          <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[666px] left-[300px] top-[67px] w-[calc(100%-160px)] max-w-[1280px]">
            <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[666px] left-[32px] top-0 w-[calc(100%-64px)] max-w-[1216px]">
              <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[666px] left-0 top-0 w-[576px]">
                {/* Main Title */}
                <p className="absolute font-['Inter:Black',_sans-serif] font-black leading-[72px] left-0 not-italic text-[72px] text-white top-[102px] w-[602px]">
                  Crie promoções que vendem — com sites automáticos e inteligentes
                </p>
                
                {/* Subtitle */}
                <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[54px] leading-[27px] left-0 not-italic text-[20px] text-[rgba(255,255,255,0.85)] top-[550px] w-[492px]">
                  A Rooster lê as notas, valida os cupons e mostra os resultados em tempo real.
                </p>
                
                {/* Buttons */}
                <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[64px] left-0 top-[610px] w-[576px]">
                <Link to="/contato">
                    <div className="absolute bg-[red] border-0 border-gray-200 border-solid h-[64px] left-0 rounded-[12px] top-0 w-[270.328px] cursor-pointer hover:bg-red-600/90 transition-colors">
                      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[28px] leading-[normal] left-[138px] not-italic text-[18px] text-center text-white top-[21px] translate-x-[-50%] w-[212px]">
                        Criar promoção
                      </p>
                    </div>
                </Link>
                <Link to="/contato">
                    <div className="absolute bg-[rgba(0,0,0,0)] border-2 border-solid border-white h-[64px] left-[286.33px] rounded-[12px] top-0 w-[232.078px] cursor-pointer hover:bg-white/10 transition-colors">
                      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[28px] leading-[normal] left-[119px] not-italic text-[18px] text-center text-white top-[21px] translate-x-[-50%] w-[170px]">
                        Ver como funciona
                      </p>
                    </div>
                </Link>
                </div>
              </div>
              
              {/* Right Image Section */}
              <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[384px] left-[640px] top-[141px] w-[576px]">
                <div className="absolute border-0 border-gray-200 border-solid h-[384px] left-0 rounded-[16px] top-0 w-[576px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImg} />
                </div>
                
                {/* Play Button */}
                <div className="absolute bg-[red] border-0 border-gray-200 border-solid left-[528px] rounded-[9999px] size-[64px] top-[336px] cursor-pointer hover:bg-red-600/90 transition-colors">
                  <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[28px] left-[23.25px] top-[18px] w-[17.5px]">
                    <div className="absolute content-stretch flex h-[20px] items-center justify-center left-0 top-[3.5px] w-[17.5px]">
                      <div className="h-[20px] relative shrink-0 w-[17.5px]">
                        <img alt="" className="block max-w-none size-full" src={iconImage} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute bg-[rgba(255,255,255,0.1)] border-0 border-gray-200 border-solid h-[40px] left-[-32px] rounded-[8px] top-[-32.03px] w-[194.156px]">
                  <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[17px] left-[12px] top-[11.97px] w-[170.156px]">
                    <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[normal] left-0 not-italic text-[14px] text-white top-0 w-[179px]">
                      Pronto pra vender mais? 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout - Adaptação responsiva */}
      <div className="hidden lg:block xl:hidden bg-[#01203f] relative w-full min-h-screen pt-24 pb-12 px-8">
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
      </div>

      {/* Mobile Layout - Adaptação responsiva */}
      <div className="block lg:hidden bg-[#01203f] relative w-full min-h-screen pt-24 pb-12 px-6">
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
      </div>
    </>
  );
};

export default Hero;
