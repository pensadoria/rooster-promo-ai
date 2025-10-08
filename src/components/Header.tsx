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
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Plataforma
          </a>
          <a href="#cases" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Cases
          </a>
          <a href="#roi" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            ROI
          </a>
          <a href="#contact" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Button */}
        <Link to="/demonstracao">
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
