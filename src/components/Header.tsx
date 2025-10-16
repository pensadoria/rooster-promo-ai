import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import roosterIcon from "@/assets/rooster-icon.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Assumi rotas para os itens do Figma; posso ajustar se você preferir outros paths.
  const navLinks = [
    { to: "/promocoes", label: "Promoções" },
    { to: "/fidelidades", label: "Fidelidades" },
    { to: "/sobre", label: "Sobre Nós" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[rgba(1,32,63,0.95)]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
          <div className="relative h-[72px] flex items-center justify-between px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={roosterIcon}
                alt="Rooster"
                className="h-9 w-9 object-contain"
              />
              <span className="hidden text-[20.5px] font-black text-white sm:inline">
                ROOSTER
              </span>
            </Link>

            {/* Navigation (desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`relative text-[16px] font-normal text-sm ${
                      active ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all ${
                        active
                          ? "w-full bg-[#ff0000]"
                          : "w-0 bg-transparent group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* CTA (desktop) */}
              <Link to="/criar-promocao" className="ml-2">
                <Button className="h-10 rounded-[12px] bg-[#ff0000] px-5 text-white font-semibold shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset] hover:bg-[#ff0000]/90">
                  Criar promoção
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label="Alternar menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(1,32,63,0.98)] md:hidden pt-24">
          <nav className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-8">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === item.to
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/criar-promocao"
              className="mt-4 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="h-12 w-full rounded-full bg-[#ff0000] text-base font-semibold text-white hover:bg-[#ff0000]/90">
                Criar promoção
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
