import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import roosterIcon from "@/assets/rooster-icon.png";


const Footer = () => {
  return <footer className="bg-[#01203f] py-16 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#021A33] flex items-center justify-center">
              <img
                src={roosterIcon}
                alt="Rooster Logo"
                className="h-7 w-8 object-contain"
              />

            </div>
          </div>
          <p className="text-white/70 max-w-md leading-relaxed">
            A Rooster usa tecnologia Premiafy e tem seus direitos reservados
          </p>
          <a href="mailto:comercial@rooster.app.br" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors w-fit">
            <Mail className="w-5 h-5" />
            <span>comercial@rooster.app.br</span>
          </a>
          <a href="tel:+5511976292960" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors w-fit">
            <Phone className="w-5 h-5" />
            <span>(11) 97629-2960</span>
          </a>
        </div>

        {/* Menu Column */}
        <div className="md:col-span-2 md:col-start-12">
          <h3 className="font-bold text-white mb-6">Menu</h3>
          <nav className="flex flex-col gap-3">
            <Link to="/promocoes" className="text-white/70 hover:text-white transition-colors">
              Promoções
            </Link>
            <Link to="/fidelidades" className="text-white/70 hover:text-white transition-colors">
              Fidelidades
            </Link>
            <Link to="/calculadora" className="text-white/70 hover:text-white transition-colors">
              Calculadora
            </Link>
            <Link to="/sobre-nos" className="text-white/70 hover:text-white transition-colors">
              Sobre nós
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-sm">© 2025 Rooster. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/privacidade" className="text-white/60 hover:text-white transition-colors">
            Privacidade
          </Link>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Termos
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;