import { motion } from "framer-motion";

const clients = [
  "Unilever", "Royal Canin", "Ana Maria", "BRF",
  "Technomotion", "Ética", "CadBIM", "HUB"
];

const Clients = () => {
  return (
    <motion.section 
      id="clients" 
      className="py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Empresas que <span className="text-primary">Confiam</span> na Rooster
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-center"
            >
              <span className="text-2xl font-bold text-muted-foreground transition-colors hover:text-white">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Clients;
