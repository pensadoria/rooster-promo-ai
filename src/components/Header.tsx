import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#01203f]/95 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          {/* Space for horizontal logo */}
          <div className="h-8 w-32 bg-transparent flex items-center">
            {/* Logo horizontal will be placed here */}
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Inicio
          </Link>
          <Link to="/historia" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            História
          </Link>
          <Link to="/calculadora" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Calculadora
          </Link>
          <Link to="/contato" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Contato
          </Link>
        </nav>

        {/* CTA Button */}
        <Link to="/contato">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-6 h-12 font-semibold text-sm"
          >
            Falar com especialista
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
