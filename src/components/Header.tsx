import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import roosterIcon from "@/assets/rooster-icon.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/historia", label: "História" },
    { to: "/calculadora", label: "Calculadora" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
          <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-[#061a2e]/80 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#061a2e]/60">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={roosterIcon}
                alt="Rooster Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="hidden text-base font-semibold tracking-tight text-white sm:inline">Rooster</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`relative text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all ${
                        active ? "w-full bg-red-500" : "w-0 bg-transparent group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <Link to="/contato" className="hidden md:block">
              <Button className="h-10 rounded-full bg-red-600 px-5 text-white shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset] hover:bg-red-600/90">
                Falar com especialista
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#061a2e] md:hidden pt-24">
          <nav className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-8">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === item.to ? "text-white" : "text-white/80 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <Link to="/contato" className="mt-4 w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button className="h-12 w-full rounded-full bg-red-600 text-base font-semibold text-white hover:bg-red-600/90">
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
