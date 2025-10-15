import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Assets gerados pelo plugin Figma (servidor local exposto pelo MCP)
const imgPillIcon = "http://localhost:3845/assets/9b4adbfa3cd945fdd24d8abc53b76dc3fcf51b6d.svg";
const imgArrow = "http://localhost:3845/assets/b8c5bf64dd1c9a65b59109924201240f51bf1b82.svg";
const imgDot = "http://localhost:3845/assets/32b9cfeced28f58fda9cf15879dbd796b9319193.svg";

const Hero = () => {
  return (
    <section className="relative min-h-[800px] w-full overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_30%_0%,#0f2a44_0%,#071829_40%,#051421_70%,#051421_100%)]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="max-w-[896px] pt-4">
          {/* Pill */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <img src={imgPillIcon} alt="" className="h-4 w-4" />
            <span className="text-sm font-semibold text-white">Automação Inteligente</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 text-[44px] leading-[48px] text-white md:text-[72px] md:leading-[76px] lg:text-[96px] lg:leading-[96px] font-black tracking-[-0.02em]"
          >
            Mais vendas.
            <br />
            Mais engajamento.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-[801px] text-base md:text-lg text-white/90"
          >
            Tudo com Rooster, rápido e fácil. A plataforma que une promoções e fidelidade para acelerar o crescimento do seu negócio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <Link to="/contato">
              <Button className="h-16 rounded-xl bg-red-600 px-6 text-white hover:bg-red-600/90">
                <span className="text-lg font-semibold">Saiba mais</span>
                <img src={imgArrow} alt="" className="ml-3 h-[18px] w-[16px]" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" className="h-16 rounded-xl border-2 border-white bg-transparent px-6 text-white hover:bg-white/10">
                <span className="text-lg font-semibold">Ver demonstração</span>
              </Button>
            </Link>
          </motion.div>

          {/* Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-8 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <img src={imgDot} alt="" className="h-[14px] w-[14px]" />
              <span>Setup em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={imgDot} alt="" className="h-[14px] w-[14px]" />
              <span>Resultados em tempo real</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
