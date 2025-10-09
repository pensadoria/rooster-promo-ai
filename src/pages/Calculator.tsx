import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator as CalcIcon, Check, TrendingUp, Clock, AlertCircle, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [formData, setFormData] = useState({
    campanhasAno: "",
    participantesCampanha: "",
    ticketMedio: "",
    valorPremios: "",
    metodoValidacao: "",
    horasValidacao: "",
    valorHora: ""
  });

  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    // Aqui você pode adicionar a lógica de cálculo
    setShowResults(true);
  };

  const handleClear = () => {
    setFormData({
      campanhasAno: "",
      participantesCampanha: "",
      ticketMedio: "",
      valorPremios: "",
      metodoValidacao: "",
      horasValidacao: "",
      valorHora: ""
    });
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#01203f] pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <CalcIcon className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Simulação de Economia</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Simule o impacto da automação nas suas campanhas
              </h1>

              {/* Description */}
              <p className="text-xl text-white/90 leading-relaxed">
                Use nossa calculadora para entender como eficiência e dados podem transformar sua operação promocional.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <Check className="w-3.5 h-3.5" />
                  <span className="text-sm">Simulação baseada em dados reais</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Check className="w-3.5 h-3.5" />
                  <span className="text-sm">Estimativas ilustrativas</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <CalcIcon className="w-20 h-20 mx-auto text-red-600" />
                    <p className="text-gray-600 font-semibold">Calculadora de Economia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-12 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#01203f] mb-8">
                Dados da sua operação
              </h2>

              <form className="space-y-6">
                {/* First Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="campanhasAno" className="text-[#01203f] font-semibold">
                      Campanhas por ano
                    </Label>
                    <Input
                      id="campanhasAno"
                      placeholder="Ex: 3"
                      value={formData.campanhasAno}
                      onChange={(e) => setFormData({ ...formData, campanhasAno: e.target.value })}
                      className="h-[60px] rounded-xl border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participantesCampanha" className="text-[#01203f] font-semibold">
                      Participantes por campanha
                    </Label>
                    <Input
                      id="participantesCampanha"
                      placeholder="Ex: 500"
                      value={formData.participantesCampanha}
                      onChange={(e) => setFormData({ ...formData, participantesCampanha: e.target.value })}
                      className="h-[60px] rounded-xl border-2"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ticketMedio" className="text-[#01203f] font-semibold">
                      Valor médio por venda (R$)
                    </Label>
                    <Input
                      id="ticketMedio"
                      placeholder="Ex: 20"
                      value={formData.ticketMedio}
                      onChange={(e) => setFormData({ ...formData, ticketMedio: e.target.value })}
                      className="h-[60px] rounded-xl border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valorPremios" className="text-[#01203f] font-semibold">
                      Investimento em prêmios (R$)
                    </Label>
                    <Input
                      id="valorPremios"
                      placeholder="Ex: 5000"
                      value={formData.valorPremios}
                      onChange={(e) => setFormData({ ...formData, valorPremios: e.target.value })}
                      className="h-[60px] rounded-xl border-2"
                    />
                  </div>
                </div>

                {/* Method Selection */}
                <div className="space-y-2">
                  <Label htmlFor="metodoValidacao" className="text-[#01203f] font-semibold">
                    Como você valida hoje?
                  </Label>
                  <Select value={formData.metodoValidacao} onValueChange={(value) => setFormData({ ...formData, metodoValidacao: value })}>
                    <SelectTrigger className="h-[58px] rounded-xl border-2">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Verificação Manual</SelectItem>
                      <SelectItem value="planilha">Planilhas</SelectItem>
                      <SelectItem value="sistema-basico">Sistema Básico</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Third Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="horasValidacao" className="text-[#01203f] font-semibold">
                      Horas gastas por campanha
                    </Label>
                    <Input
                      id="horasValidacao"
                      placeholder="Ex: 40"
                      value={formData.horasValidacao}
                      onChange={(e) => setFormData({ ...formData, horasValidacao: e.target.value })}
                      className="h-[60px] rounded-xl border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valorHora" className="text-[#01203f] font-semibold">
                      Custo por hora da equipe (R$)
                    </Label>
                    <Input
                      id="valorHora"
                      placeholder="Ex: 35"
                      value={formData.valorHora}
                      onChange={(e) => setFormData({ ...formData, valorHora: e.target.value })}
                      className="h-[60px] rounded-xl border-2"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    onClick={handleCalculate}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white h-[60px] rounded-xl text-lg font-semibold"
                  >
                    Calcular economia
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    type="button"
                    onClick={handleClear}
                    variant="outline"
                    className="h-[60px] px-8 rounded-xl text-lg"
                  >
                    Limpar
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Right Side - Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-100 rounded-2xl p-12 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#01203f] mb-8">
                Sua economia estimada
              </h2>

              {/* Warning Banner */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-800 leading-relaxed">
                    Esses valores são estimativas ilustrativas, baseadas em parâmetros médios do setor. O objetivo é demonstrar cenários de eficiência — não garantias de resultado.
                  </p>
                </div>
              </div>

              {showResults ? (
                <>
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6 mb-12">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-2xl font-black text-white">60%</span>
                      </div>
                      <p className="text-sm font-semibold text-[#01203f] leading-tight">
                        Eficiência estimada
                      </p>
                    </div>
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                        <span className="text-2xl font-black text-white">80%</span>
                      </div>
                      <p className="text-sm font-semibold text-[#01203f] leading-tight">
                        Redução de tempo
                      </p>
                    </div>
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                        <span className="text-2xl font-black text-white">+20%</span>
                      </div>
                      <p className="text-sm font-semibold text-[#01203f] leading-tight">
                        Potencial de engajamento
                      </p>
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="space-y-6">
                    {/* Current Scenario */}
                    <div className="border-2 border-gray-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-[#01203f]">Situação atual</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-red-500 mb-1">R$ 200.000</p>
                          <p className="text-sm text-gray-600">Fraudes</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-red-500 mb-1">120h</p>
                          <p className="text-sm text-gray-600">Horas</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-red-500 mb-1">R$ 3.500</p>
                          <p className="text-sm text-gray-600">Perdas</p>
                        </div>
                      </div>
                    </div>

                    {/* With Automation */}
                    <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50/30">
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h3 className="text-xl font-bold text-[#01203f]">Com automação</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-green-600 mb-1">R$ 60.000</p>
                          <p className="text-sm text-gray-600">Fraudes</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600 mb-1">20h</p>
                          <p className="text-sm text-gray-600">Horas</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600 mb-1">R$ 800</p>
                          <p className="text-sm text-gray-600">Perdas</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Os resultados apresentados são apenas uma simulação e podem variar conforme o tipo de campanha e operação.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                    <CalcIcon className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    Preencha os campos ao lado e clique em "Calcular economia" para ver seus resultados
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Calculate Section */}
      <section className="bg-[#01203f] py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Por que simular sua economia?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Compreender o retorno sobre investimento em automação ajuda empresas a visualizar ganhos de tempo e redução de custos. A Rooster oferece ferramentas que tornam essa análise acessível, técnica e sem complicação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#ff5001] to-[#ff3000] py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Quer entender como a automação pode funcionar no seu caso?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fale com nosso time técnico e descubra como otimizar suas campanhas promocionais com dados reais.
          </p>
          <Link to="/demonstracao">
            <Button className="bg-white hover:bg-white/95 text-[#ff5001] h-[60px] px-10 rounded-xl text-lg font-bold shadow-lg">
              Conversar com especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;
