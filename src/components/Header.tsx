import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center font-bold text-xl">
            R
          </div>
          <span className="text-2xl font-bold">Rooster</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollToSection("clients")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Clientes
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </button>
        </nav>

        <Button variant="secondary" className="hover:scale-105 transition-transform">
          Agendar Demonstração
        </Button>
      </div>
    </header>
  );
};

export default Header;
