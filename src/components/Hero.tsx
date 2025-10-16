import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Assets gerados pelo plugin Figma (servidor local exposto pelo MCP)
const imgGroup = "http://localhost:3845/assets/9b4adbfa3cd945fdd24d8abc53b76dc3fcf51b6d.svg";
const imgFrame = "http://localhost:3845/assets/2e498edd9e5b9eb4553b47690f938f38f57fb0bc.svg";
const imgImg = "http://localhost:3845/assets/993bbe4b5f052101446284f2320fc4cf26cc8db7.png";

const Hero = () => {
  return (
    <div className="bg-[#01203f] border-0 border-gray-200 border-solid relative size-full min-h-[800px]">
      <div className="relative size-full">
        <div className="absolute bg-[rgba(0,0,0,0.2)] border-0 border-gray-200 border-solid h-[800px] left-0 top-0 w-full" />
        <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[666px] left-[80px] top-[67px] w-[calc(100%-160px)] max-w-[1280px]">
          <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[666px] left-[32px] top-0 w-[calc(100%-64px)] max-w-[1216px]">
            <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-gray-200 border-solid h-[666px] left-0 top-0 w-[576px]">
              {/* Removed top pill 'Automação Inteligente' */}
              
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
                      <img alt="" className="block max-w-none size-full" src={imgFrame} />
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
  );
};

export default Hero;
