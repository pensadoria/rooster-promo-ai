const Clients = () => {
  const clients = [
    "Unilever", "Royal Canin", "Ana Maria", "BRF",
    "Technomotion", "Ética", "CadBIM", "HUB"
  ];

  return (
    <section id="clients" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Alguns de Nossos{" "}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Clientes
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-card/30 rounded-xl border border-border hover:border-secondary/30 transition-all hover:scale-105"
            >
              <span className="text-xl font-semibold text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
