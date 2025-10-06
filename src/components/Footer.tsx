const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-white tracking-wider">ROOSTER</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Rooster. Todos os direitos reservados.
          </p>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4 text-white">Produto</h3>
          <nav className="flex flex-col gap-3">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#clients" className="text-muted-foreground hover:text-white transition-colors">
              Clientes
            </a>
          </nav>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4 text-white">Recursos</h3>
          <nav className="flex flex-col gap-3">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Academy
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Documentação
            </a>
          </nav>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
          <nav className="flex flex-col gap-3">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
