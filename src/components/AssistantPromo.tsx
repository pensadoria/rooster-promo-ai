import { motion } from "framer-motion";
import { MessageCircle, Rocket } from "lucide-react";

const AssistantPromo = () => {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="container mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div>
          <h2 className="text-[#01203f] text-[32px] md:text-[44px] lg:text-[48px] font-black leading-[1.1] mb-4">
            Converse com o assistente inteligente da Rooster
          </h2>
          <p className="text-[16px] md:text-[20px] text-[rgba(1,32,63,0.8)] leading-[27px] max-w-[560px] mb-6">
            O Rook ajuda você a criar promoções, fidelizar clientes e entender seus resultados — tudo via chat.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#FF5001] text-white font-semibold px-5 h-[60px] rounded-[12px] shadow-[0_10px_30px_rgba(255,0,0,0.25)]">
            Testar agora
          </button>
        </div>

        {/* Right chat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="rounded-2xl p-4 md:p-6 bg-[#08243F] text-white shadow-2xl">
            {/* msg 1 */}
            <div className="bg-white/10 rounded md:rounded-lg px-4 py-3 mb-3 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm">Olá! Sou o Rook, seu assistente para promoções. Como posso ajudar?</div>
            </div>
            {/* msg 2 */}
            <div className="bg-[rgba(255,0,0,0.2)] rounded md:rounded-lg px-4 py-3 mb-3 text-sm w-[85%]">
              Quero criar uma promoção de Natal
            </div>
            {/* msg 3 */}
            <div className="bg-white/10 rounded md:rounded-lg px-4 py-3 flex items-start gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <div>
                Perfeito! Vou te ajudar a configurar tudo em minutos...
                <div className="flex gap-1 mt-2 opacity-70">
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating button */}
          <div className="absolute -right-2 bottom-[-12px] w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssistantPromo;


