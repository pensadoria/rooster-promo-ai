import { Button } from "@/components/ui/button";

const CTAFinal = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Pronto para revolucionar suas promoções?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90">
            Transforme sua operação promocional com a tecnologia da Rooster.
          </p>

          <Button 
            variant="default"
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all text-lg px-8 py-6 h-auto font-bold shadow-lg"
          >
            Agendar Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
