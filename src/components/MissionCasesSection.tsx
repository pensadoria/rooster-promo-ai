import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import hellmannsLogo from "@/assets/hellmanns-seeklogo.png";

const MissionCasesSection = () => {
  return (
    <section
      id="mission-cases"
      className="bg-[#01203f] py-20 md:py-28 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-white text-[32px] md:text-[44px] lg:text-[48px] font-black leading-[1.1]"
          >
            Empresas que confiam na Rooster
          </motion.h2>
          <p className="text-white/80 text-[16px] md:text-[20px] leading-[27px] mt-4 max-w-[820px] mx-auto">
            De pequenos comércios a grandes marcas — a Rooster está por trás das
            campanhas que vendem mais.
          </p>
        </div>

        {/* Single logo centered */}
        <div className="max-w-[1216px] mx-auto flex items-center justify-center">
          <a href="https://www.hellmanns-supreme.com.br/">
            <img
              src={hellmannsLogo}
              alt="Hellmann’s"
              className="h-12 md:h-14 lg:h-16 object-contain"
              loading="lazy"
            />
          </a>
        </div>

        {/* Bottom pill */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(255,0,0,0.1)] text-[#FF0000] px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold text-[14px] md:text-[16px]">
              Presente em todo o Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionCasesSection;
