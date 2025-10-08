import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Zap, TrendingUp, Sparkles, Shield } from "lucide-react";

const Demo = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    whatsapp: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  const benefits = [
    {
      icon: Zap,
      title: "Criação rápida",
      description: "Monte promoções em minutos com nosso criador automatizado."
    },
    {
      icon: TrendingUp,
      title: "Resultados reais",
      description: "Acompanhe métricas e otimize campanhas com base em dados."
    },
    {
      icon: Sparkles,
      title: "Inteligência artificial",
      description: "O Rook, nosso assistente, ajuda você a criar campanhas que vendem."
    },
    {
      icon: Shield,
      title: "Segurança e confiabilidade",
      description: "Plataforma estável, segura e feita para escalar junto com seu negócio."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#01203f]">
      <Header />

      {/* Hero Section with Form */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content and Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Automação Inteligente</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Impulsione suas vendas com promoções inteligentes
              </h1>

              {/* Description */}
              <p className="text-xl text-white/90 leading-relaxed">
                A Rooster simplifica o marketing promocional com tecnologia e automação. Crie campanhas em minutos e conquiste novos clientes.
              </p>

              {/* Form Card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#01203f] mb-6">
                  Solicite sua demonstração gratuita
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Row - Two Columns */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="sr-only">Nome da empresa</Label>
                      <Input
                        id="companyName"
                        placeholder="Nome da empresa"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="h-[60px] rounded-xl border-2 border-gray-200 focus:border-red-600 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="sr-only">Seu nome</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-[60px] rounded-xl border-2 border-gray-200 focus:border-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="sr-only">E-mail corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="E-mail corporativo"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-[60px] rounded-xl border-2 border-gray-200 focus:border-red-600 transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="sr-only">WhatsApp (opcional)</Label>
                    <Input
                      id="whatsapp"
                      placeholder="WhatsApp (opcional)"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="h-[60px] rounded-xl border-2 border-gray-200 focus:border-red-600 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white h-[60px] rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Solicitar demonstração
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <Check className="w-3.5 h-3.5" />
                  <span className="text-sm">Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Check className="w-3.5 h-3.5" />
                  <span className="text-sm">Setup em minutos</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-white/50 text-center p-8">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                      <div className="space-y-4">
                        <div className="text-4xl">📊</div>
                        <p className="text-sm">Dashboard Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#01203f]">
              Por que usar a Rooster ?
            </h2>
            <p className="text-xl text-gray-600">
              Mais vendas, menos burocracia.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center space-y-6 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#01203f]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
