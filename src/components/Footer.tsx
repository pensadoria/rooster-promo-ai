const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center font-bold text-lg">
              R
            </div>
            <span className="text-xl font-bold">Rooster</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>

          <p className="text-muted-foreground text-sm">
            © 2025 Rooster. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
