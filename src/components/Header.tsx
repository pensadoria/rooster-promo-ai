import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import roosterIcon from "@/assets/rooster-icon.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#01203f]/95 backdrop-blur-lg">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={roosterIcon}
              alt="Rooster Logo"
              className="w-8 h-8 object-contain"
            />
            {/* Space for horizontal logo */}
            <div className="h-8 w-24 md:w-32 bg-transparent flex items-center">
              {/* Logo horizontal will be placed here */}
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA Button */}
          <Link to="/contato" className="hidden md:block">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-6 h-12 font-semibold text-sm"
            >
              Falar com especialista
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#01203f] md:hidden pt-20">
          <nav className="flex flex-col items-center gap-6 py-8">
            <Link
              to="/"
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/historia"
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              História
            </Link>
            <Link
              to="/calculadora"
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculadora
            </Link>
            <Link
              to="/contato"
              className="text-lg font-medium text-white hover:text-white/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>

            {/* Mobile CTA Button */}
            <Link to="/contato" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 h-12 font-semibold text-base"
              >
                Falar com especialista
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
