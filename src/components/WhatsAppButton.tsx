import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-slide-up-fade">
      {/* Bubble de texto */}
      {showBubble && (
        <div className="absolute bottom-16 md:bottom-20 right-0 mb-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative bg-white text-gray-800 px-3 md:px-4 py-2 md:py-3 rounded-lg shadow-lg w-[120px] md:w-[140px]">
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-1 md:-top-2 -right-1 md:-right-2 bg-gray-200 rounded-full p-0.5 md:p-1 hover:bg-gray-300 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="w-2.5 h-2.5 md:w-3 md:h-3" />
            </button>
            <p className="text-xs md:text-sm font-medium leading-tight">O que posso te ajudar?</p>
            {/* Seta apontando para baixo */}
            <div className="absolute -bottom-1 md:-bottom-2 right-4 md:right-6 w-3 h-3 md:w-4 md:h-4 bg-white transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511976292960?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Rook!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-300 animate-bounce-gentle"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
