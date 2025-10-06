import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-white tracking-wider">ROOSTER</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-white transition-colors">Recursos</a>
          <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">Preços</a>
          <a href="#login" className="text-muted-foreground hover:text-white transition-colors">Entrar</a>
        </nav>

        <Button variant="primary" className="hidden sm:inline-flex">
          Agendar Demonstração
        </Button>
      </div>
    </header>
  );
};

export default Header;
