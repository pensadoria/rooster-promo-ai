import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import roosterLogo from "@/assets/rooster-logo.png";

const QRRedirect = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "redirecting" | "error" | "cancelled">("loading");

  useEffect(() => {
    // Check if redirect URL is configured in localStorage
    const storedUrl = localStorage.getItem("qr_redirect_url");
    
    if (storedUrl) {
      // Validate URL
      try {
        const url = new URL(storedUrl);
        if (url.protocol === "http:" || url.protocol === "https:") {
          setRedirectUrl(storedUrl);
          setStatus("redirecting");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    if (status === "redirecting" && redirectUrl && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (status === "redirecting" && countdown === 0 && redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [status, countdown, redirectUrl]);

  const handleCancel = () => {
    setStatus("cancelled");
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061a2e] via-[#01203f] to-[#061a2e] flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        {/* Logo */}
        <img 
          src={roosterLogo} 
          alt="Rooster" 
          className="w-32 h-auto mx-auto mb-8 animate-pulse"
        />

        {/* Loading State */}
        {status === "loading" && (
          <div className="space-y-4">
            <Loader2 className="w-12 h-12 text-white mx-auto animate-spin" />
            <p className="text-white text-lg">Preparando redirecionamento...</p>
          </div>
        )}

        {/* Redirecting State */}
        {status === "redirecting" && (
          <div className="space-y-6">
            <div className="relative">
              <div className="w-24 h-24 mx-auto">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="white"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(countdown / 3) * 251.2} 251.2`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl font-black">{countdown}</span>
                </div>
              </div>
            </div>
            <p className="text-white text-xl font-semibold">
              Redirecionando em {countdown}...
            </p>
            <Button
              variant="outline"
              onClick={handleCancel}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Cancelar
            </Button>
          </div>
        )}

        {/* Error State */}
        {status === "error" && (
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-destructive/20 rounded-full flex items-center justify-center">
              <span className="text-destructive text-4xl">⚠️</span>
            </div>
            <div className="space-y-3">
              <p className="text-white text-xl font-semibold">
                Link não configurado
              </p>
              <p className="text-white/70 text-sm">
                Entre em contato com o administrador para configurar o link de redirecionamento.
              </p>
            </div>
            <Button
              onClick={() => navigate("/")}
              className="bg-[--rooster-red] hover:bg-[--rooster-red]/90 text-white"
            >
              Voltar para Home
            </Button>
          </div>
        )}

        {/* Cancelled State */}
        {status === "cancelled" && (
          <div className="space-y-4">
            <p className="text-white text-lg">Redirecionamento cancelado</p>
            <p className="text-white/70 text-sm">Voltando para página inicial...</p>
          </div>
        )}

        {/* Instructions for admins (only in dev) */}
        {import.meta.env.DEV && status === "error" && (
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 text-left">
            <p className="text-white/60 text-xs mb-2 font-semibold">
              💡 Para desenvolvedores:
            </p>
            <p className="text-white/50 text-xs font-mono break-all">
              localStorage.setItem('qr_redirect_url', 'https://example.com')
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRRedirect;
