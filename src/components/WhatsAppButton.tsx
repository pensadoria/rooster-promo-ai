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
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up-fade">
      {/* Bubble de texto */}
      {showBubble && (
        <div className="absolute bottom-20 right-0 mb-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg w-[140px]">
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm font-medium leading-tight">O que posso te ajudar?</p>
            {/* Seta apontando para baixo */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511993492108?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Rook!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-300 animate-bounce-gentle"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
