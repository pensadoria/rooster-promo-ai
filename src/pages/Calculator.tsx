import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calculator as CalcIcon,
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle2,
  TrendingDown,
  Zap,
  Gift,
  Users,
  Info
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Constantes de cálculo
const PONTOS_CONFIG = {
  grantRatio: 0.1,           // A cada R$ 10 = 1 ponto
  redeemRatio: 0.08,         // 1 ponto = R$ 0,08
  breakageRate: 0.75,        // 75% dos pontos serão usados
  maxDiscountPercent: 10,    // 10% de desconto máximo
  campaignDurationDays: 30   // Duração padrão da campanha
};

interface PontosCalculationResult {
  totalPontos: number;
  pontosRecomendados: number;
  pontosPorDia: number;
  salvoInvestido: number;
  pontosConcessao: string;
  pontosResgate: string;
  taxaPorCompra: string;
  pontosCliente: string;
  descontoMedioCliente: string;
  projecaoConsumo: Array<{ mes: number; consumoAcumulado: number; distribuicaoUniforme: number }>;
}

const calcularPontos = (investimento: number, ticketMedio: number): PontosCalculationResult => {
  // Total de pontos que podem ser distribuídos
  const totalPontosTeórico = investimento / PONTOS_CONFIG.redeemRatio;
  
  // Pontos reais considerando breakage rate (75% de uso)
  const totalPontos = Math.round(totalPontosTeórico * PONTOS_CONFIG.breakageRate);
  
  // Pontos por dia (campanha de 30 dias)
  const pontosPorDia = Math.round(totalPontos / PONTOS_CONFIG.campaignDurationDays);
  
  // Dados para o gráfico de projeção (30 meses)
  const projecaoConsumo = Array.from({ length: 30 }, (_, i) => {
    const mes = i + 1;
    // Consumo acumulado cresce de forma acelerada
    const consumoAcumulado = (totalPontos * Math.pow(mes / 30, 1.5)) / totalPontos * 100;
    // Distribuição uniforme (linha reta)
    const distribuicaoUniforme = (mes / 30) * 100;
    
    return {
      mes,
      consumoAcumulado: Math.round(consumoAcumulado * 100) / 100,
      distribuicaoUniforme: Math.round(distribuicaoUniforme * 100) / 100
    };
  });
  
  return {
    totalPontos,
    pontosRecomendados: totalPontos,
    pontosPorDia,
    salvoInvestido: investimento,
    pontosConcessao: `1 ponto a cada R$ ${Math.round(1 / PONTOS_CONFIG.grantRatio)}`,
    pontosResgate: `1 ponto = R$ ${PONTOS_CONFIG.redeemRatio.toFixed(2)}`,
    taxaPorCompra: `${PONTOS_CONFIG.maxDiscountPercent}%`,
    pontosCliente: '-',
    descontoMedioCliente: '-',
    projecaoConsumo
  };
};

// Counter Animation Hook
function useAnimatedCounter(value: number, duration: number = 2000) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return displayValue;
}

const Calculator = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("pontos");
  
  const [pontosFormData, setPontosFormData] = useState({
    investimento: "",
    ticketMedio: ""
  });

  const [pontosResults, setPontosResults] = useState<PontosCalculationResult | null>(null);
  const [showPontosResults, setShowPontosResults] = useState(false);

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
  const [results, setResults] = useState({
    custoOperacionalAtual: 0,
    fraudesAtuais: 0,
    perdasPremiosAtuais: 0,
    totalPerdendo: 0,
    custoOperacionalNovo: 0,
    fraudesNovo: 0,
    perdasPremiosNovo: 0,
    totalComAutomacao: 0,
    economiaAnual: 0,
    roiPercentual: 0,
    horasAtuais: 0,
    horasNovas: 0
  });

  const animatedEconomia = useAnimatedCounter(showResults ? results.economiaAnual : 0);
  const animatedROI = useAnimatedCounter(showResults ? results.roiPercentual : 0);

  const handleCalcularPontos = () => {
    const investimento = parseFloat(pontosFormData.investimento);
    const ticketMedio = parseFloat(pontosFormData.ticketMedio) || 75; // Default 75
    
    if (!investimento || investimento <= 0) {
      toast({
        title: "Atenção",
        description: "Por favor, informe um valor de investimento válido.",
        variant: "destructive"
      });
      return;
    }
    
    const results = calcularPontos(investimento, ticketMedio);
    setPontosResults(results);
    setShowPontosResults(true);
    
    // Scroll suave até os resultados
    setTimeout(() => {
      document.getElementById('pontos-results')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  const handleCalculate = () => {
    if (!formData.campanhasAno || !formData.participantesCampanha ||
        !formData.ticketMedio || !formData.valorPremios ||
        !formData.horasValidacao || !formData.valorHora) {
      alert("Por favor, preencha todos os campos antes de calcular.");
      return;
    }

    const campanhas = parseFloat(formData.campanhasAno);
    const participantes = parseFloat(formData.participantesCampanha);
    const ticket = parseFloat(formData.ticketMedio);
    const premios = parseFloat(formData.valorPremios);
    const horas = parseFloat(formData.horasValidacao);
    const custoHora = parseFloat(formData.valorHora);

    // SITUAÇÃO ATUAL
    const custoOperacionalAtual = campanhas * horas * custoHora;
    const fraudesAtuais = campanhas * participantes * ticket * 0.15;
    const perdasPremiosAtuais = premios * campanhas * 0.20;
    const totalPerdendo = custoOperacionalAtual + fraudesAtuais + perdasPremiosAtuais;
    const horasAtuais = campanhas * horas;

    // COM AUTOMAÇÃO
    const custoOperacionalNovo = campanhas * horas * 0.2 * custoHora;
    const fraudesNovo = campanhas * participantes * ticket * 0.03;
    const perdasPremiosNovo = premios * campanhas * 0.05;
    const totalComAutomacao = custoOperacionalNovo + fraudesNovo + perdasPremiosNovo;
    const horasNovas = campanhas * horas * 0.2;

    const economiaAnual = totalPerdendo - totalComAutomacao;
    const roiPercentual = ((economiaAnual / totalPerdendo) * 100);

    setResults({
      custoOperacionalAtual,
      fraudesAtuais,
      perdasPremiosAtuais,
      totalPerdendo,
      custoOperacionalNovo,
      fraudesNovo,
      perdasPremiosNovo,
      totalComAutomacao,
      economiaAnual,
      roiPercentual,
      horasAtuais,
      horasNovas
    });

    setShowResults(true);

    // Scroll suave para os resultados
    setTimeout(() => {
      document.getElementById('results-hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
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
    <div className="min-h-screen bg-[#011E36]">
      <Header />

      {/* Form Section */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header - Dynamic based on active tab */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4"
          >
            <div className="inline-block">
              <span className="text-[#FF0000] text-sm font-bold tracking-widest uppercase">
                {activeTab === "pontos" ? "Calculadora de Pontos" : "Calculadora de ROI"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              {activeTab === "pontos" 
                ? "Descubra quantos pontos você recebe"
                : "Descubra quanto você pode ganhar"
              }
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              {activeTab === "pontos"
                ? "Informe quanto deseja investir e veja seu potencial de distribuição de pontos."
                : "Simule a economia anual com automação Rooster"
              }
            </p>
          </motion.div>

          {/* Tabs System */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tabs List */}
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-white/5 border border-white/10 h-12">
              <TabsTrigger 
                value="pontos"
                className="data-[state=active]:bg-[#FF0000] data-[state=active]:text-white text-white/70 font-semibold"
              >
                Pontos (simplificado)
              </TabsTrigger>
              <TabsTrigger 
                value="roi"
                className="data-[state=active]:bg-[#FF0000] data-[state=active]:text-white text-white/70 font-semibold"
              >
                Promoções (R/2 anual)
              </TabsTrigger>
            </TabsList>

            {/* TAB CONTENT: PONTOS */}
            <TabsContent value="pontos">
              <div className="grid lg:grid-cols-[1fr_400px] gap-8">
                {/* Form Card - Left */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8"
                >
                  <form className="space-y-6">
                    {/* Campo: Investimento */}
                    <div className="space-y-2">
                      <Label htmlFor="investimentoPontos" className="text-white font-semibold">
                        Quanto você quer investir em pontos? (R$) *
                      </Label>
                      <Input
                        id="investimentoPontos"
                        type="number"
                        placeholder="R$ 5,000"
                        value={pontosFormData.investimento}
                        onChange={(e) => setPontosFormData({ ...pontosFormData, investimento: e.target.value })}
                        className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                      />
                    </div>

                    {/* Campo: Ticket Médio */}
                    <div className="space-y-2">
                      <Label htmlFor="ticketMedioPontos" className="text-white font-semibold">
                        Ticket médio (opcional)
                      </Label>
                      <Input
                        id="ticketMedioPontos"
                        type="number"
                        placeholder="R$ 75"
                        value={pontosFormData.ticketMedio}
                        onChange={(e) => setPontosFormData({ ...pontosFormData, ticketMedio: e.target.value })}
                        className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                      />
                    </div>

                    {/* Botão */}
                    <Button
                      type="button"
                      onClick={handleCalcularPontos}
                      className="w-full bg-[#FF0000] hover:bg-[#FF5001] text-white h-14 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      Calcular meus pontos
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </motion.div>

                {/* Como funciona? - Right */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-white font-bold text-xl mb-6">Como funciona?</h3>
                  
                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Digite seu investimento</h4>
                        <p className="text-white/60 text-sm">
                          Informe quanto deseja investir em pontos para seus clientes.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Veja o alcance</h4>
                        <p className="text-white/60 text-sm">
                          Descubra quantos pontos você distribuirá e o potencial de clientes.
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Lance sua campanha</h4>
                        <p className="text-white/60 text-sm">
                          Receba o passo a passo para ativar sua campanha personalizada por WhatsApp.
                        </p>
                      </div>
                    </div>
            </div>
          </motion.div>
        </div>

        {/* Resultados da Calculadora de Pontos */}
        {showPontosResults && pontosResults && (
          <motion.div
            id="pontos-results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-br from-[#0a1628] to-[#01203f] border border-white/10 rounded-3xl p-8 md:p-12"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-white text-3xl md:text-4xl font-black mb-2">
                Seu plano de distribuição de pontos
              </h2>
              <p className="text-white/60 text-base">
                Veja quanto distribuir (recomendado) e como planejar sua campanha.
              </p>
            </div>

            {/* Card Central - Total de Pontos */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-[#FF0000] text-xs font-bold tracking-widest uppercase">
                  RECOMENDADO DISTRIBUIR AGORA
                </span>
              </div>
              
              <div className="mb-4">
                <div className="text-white text-6xl md:text-7xl font-black">
                  {pontosResults.totalPontos.toLocaleString('pt-BR')}
                </div>
                <div className="text-white/60 text-xl mt-2">pontos</div>
              </div>
              
              <div className="text-white/40 text-sm mb-6">
                Saldo investido: R$ {pontosResults.salvoInvestido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              
              {/* Badges de Informação */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-[#FF0000]"></div>
                  <span>Conceda: {pontosResults.pontosConcessao}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-[#FF5001]"></div>
                  <span>Resgate: {pontosResults.pontosResgate}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-[#FF8C42]"></div>
                  <span>Taxa por compra: {pontosResults.taxaPorCompra}</span>
                </div>
              </div>
            </div>

            {/* Assistente de Distribuição */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Esquerda - Assistente */}
              <div className="space-y-6">
                <h3 className="text-white font-bold text-xl">Assistente de distribuição</h3>
                
                {/* Duração da Campanha */}
                <div className="space-y-2">
                  <Label className="text-white text-sm">Duração da campanha</Label>
                  <Select defaultValue="30">
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">1 semana</SelectItem>
                      <SelectItem value="15">15 dias</SelectItem>
                      <SelectItem value="30">1 mês</SelectItem>
                      <SelectItem value="60">2 meses</SelectItem>
                      <SelectItem value="90">3 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Ritmo de Distribuição */}
                <div className="space-y-2">
                  <Label className="text-white text-sm">Ritmo de distribuição</Label>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-white/5 border-white/10 text-white hover:bg-[#FF0000] hover:text-white"
                    >
                      Conservador
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-[#FF0000] text-white hover:bg-[#FF0000]/80"
                    >
                      Equilibrado
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-white/5 border-white/10 text-white hover:bg-[#FF0000] hover:text-white"
                    >
                      Acelerado
                    </Button>
                  </div>
                </div>
                
                {/* Ticket Médio */}
                <div className="space-y-2">
                  <Label className="text-white text-sm">Ticket médio (opcional)</Label>
                  <Input 
                    type="text"
                    value={`R$ ${pontosFormData.ticketMedio || '75'}`}
                    disabled
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                
                {/* Info Box */}
                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                  <div className="flex gap-2 text-blue-300 text-sm">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>
                      Ajuste o ritmo conforme seu apetite: conservador mantém fluxo de saldo; 
                      acelerado prioriza crescimento rápido.
                    </p>
                  </div>
                </div>
                
                {/* Botão Atualizar Plano */}
                <Button 
                  className="w-full bg-[#FF0000] hover:bg-[#FF5001] text-white h-12 rounded-full font-bold"
                >
                  Atualizar plano
                </Button>
              </div>
              
              {/* Direita - Clientes a Impactar */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <Label className="text-white text-sm">Clientes a impactar (estimativa)</Label>
                  <Input 
                    type="number"
                    placeholder="Ex: 300"
                    className="w-32 bg-white/5 border-white/10 text-white text-right"
                  />
                </div>
                
                {/* Cards de Métricas */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <Gift className="w-10 h-10 text-[#FF0000] mx-auto mb-3" />
                    <div className="text-white/60 text-sm mb-1">Pontos por dia</div>
                    <div className="text-white text-3xl font-bold">
                      {pontosResults.pontosPorDia.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <Users className="w-10 h-10 text-[#FF0000] mx-auto mb-3" />
                    <div className="text-white/60 text-sm mb-1">Pontos por cliente (médio)</div>
                    <div className="text-white text-3xl font-bold">
                      {pontosResults.pontosCliente}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <TrendingDown className="w-10 h-10 text-[#FF0000] mx-auto mb-3" />
                    <div className="text-white/60 text-sm mb-1">Desconto médio por cliente</div>
                    <div className="text-white text-3xl font-bold">
                      {pontosResults.descontoMedioCliente}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sugestões de Como Distribuir */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-6">Sugestões de como distribuir</h3>
              
              <div className="space-y-4">
                {/* Bônus de Boas-vindas */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 px-2 py-1 bg-green-500/20 text-green-300 text-xs font-bold rounded">
                      Recomendado
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">Bônus de boas-vindas</h4>
                      <p className="text-white/80 text-sm mb-2">
                        <span className="font-bold">Regra:</span> Conceda <span className="text-[#FF0000] font-bold">10</span> pts na <span className="text-[#FF0000] font-bold">1ª</span> compra
                      </p>
                      <p className="text-white/60 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Usar em campanhas de aquisição e atenção.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Recompensa Semanal */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">Recompensa semanal a semanal</h4>
                      <p className="text-white/80 text-sm mb-2">
                        <span className="font-bold">Regra:</span> A cada compre <span className="text-[#FF0000] font-bold">2</span>, <span className="text-[#FF0000] font-bold">R$ 4</span> de conceda <span className="text-[#FF0000] font-bold">08</span> pts (<span className="text-green-400 font-bold">400%</span> de valor em pontos)
                      </p>
                      <p className="text-white/60 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Equilibra ritmo e controla de saldo.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Mês de Aniversário */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">Mês de aniversário</h4>
                      <p className="text-white/80 text-sm mb-2">
                        <span className="font-bold">Regra:</span> Dobre os <span className="text-[#FF0000] font-bold">pts</span> por validado de <span className="text-[#FF0000] font-bold">15</span> dias.
                      </p>
                      <p className="text-white/60 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Custa menos de projetos e volta rápida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeção de Consumo */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-2">Projeção de consumo de pontos</h3>
              <p className="text-white/60 text-sm mb-6">
                Linha de referência e o distribuição uniforme diária.
              </p>
              
              {/* Gráfico usando Recharts */}
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={pontosResults.projecaoConsumo}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis 
                      dataKey="mes" 
                      stroke="#ffffff40"
                      label={{ value: 'Meses', position: 'insideBottom', offset: -5, fill: '#ffffff60' }}
                    />
                    <YAxis 
                      stroke="#ffffff40"
                      label={{ value: '%', angle: -90, position: 'insideLeft', fill: '#ffffff60' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0a1628', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="consumoAcumulado" 
                      stroke="#FF0000" 
                      strokeWidth={3}
                      name="Consumo Acumulado"
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="distribuicaoUniforme" 
                      stroke="#4A90E2" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Distribuição Uniforme"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Limites Automáticos */}
            <div className="mt-6 space-y-3">
              <h4 className="text-white font-bold text-lg">Limites automáticos (sempre ativos)</h4>
              
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p>Desconto aplicado por compra limitado a 10% do pedido.</p>
              </div>
              
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p>Conversão no resgate: 1 ponto = R$0,08.</p>
              </div>
              
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p>Caso o saldo acabe antes do fim da campanha, os pontos param de ser emitidos.</p>
              </div>
            </div>

            {/* CTAs Finais */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Button 
                className="flex-1 bg-[#FF0000] hover:bg-[#FF5001] text-white h-14 rounded-full text-base font-bold"
              >
                Receber plano de distribuição por WhatsApp
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  setShowPontosResults(false);
                  setPontosResults(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex-1 border-white/20 text-white hover:bg-white/5 h-14 rounded-full text-base font-bold"
              >
                Editar valores
              </Button>
            </div>
          </motion.div>
        )}
      </TabsContent>

            {/* TAB CONTENT: ROI */}
            <TabsContent value="roi">
              <div className="max-w-4xl mx-auto">
                {/* Form Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8"
                >
                  <form className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="campanhasAno" className="text-white font-semibold">
                          Campanhas por ano
                        </Label>
                        <Input
                          id="campanhasAno"
                          type="number"
                          placeholder="Ex: 2"
                          value={formData.campanhasAno}
                          onChange={(e) => setFormData({ ...formData, campanhasAno: e.target.value })}
                          className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="participantesCampanha" className="text-white font-semibold">
                          Participantes por campanha
                        </Label>
                        <Input
                          id="participantesCampanha"
                          type="number"
                          placeholder="Ex: 600"
                          value={formData.participantesCampanha}
                          onChange={(e) => setFormData({ ...formData, participantesCampanha: e.target.value })}
                          className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="ticketMedio" className="text-white font-semibold">
                          Valor médio por venda (R$)
                        </Label>
                        <Input
                          id="ticketMedio"
                          type="number"
                          placeholder="Ex: 255"
                          value={formData.ticketMedio}
                          onChange={(e) => setFormData({ ...formData, ticketMedio: e.target.value })}
                          className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="valorPremios" className="text-white font-semibold">
                          Investimento em prêmios (R$)
                        </Label>
                        <Input
                          id="valorPremios"
                          type="number"
                          placeholder="Ex: 10000"
                          value={formData.valorPremios}
                          onChange={(e) => setFormData({ ...formData, valorPremios: e.target.value })}
                          className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                        />
                      </div>
                    </div>

                    {/* Method */}
                    <div className="space-y-2">
                      <Label htmlFor="metodoValidacao" className="text-white font-semibold">
                        Como você valida hoje?
                      </Label>
                      <Select value={formData.metodoValidacao} onValueChange={(value) => setFormData({ ...formData, metodoValidacao: value })}>
                        <SelectTrigger className="h-14 rounded-xl border-white/20 bg-white/10 text-white focus:border-[#FF0000] focus:bg-white/15">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manual">Sistema Básico</SelectItem>
                          <SelectItem value="planilha">Planilhas</SelectItem>
                          <SelectItem value="sistema-basico">Verificação Manual</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="horasValidacao" className="text-white font-semibold">
                          Horas gastas por campanha
                        </Label>
                        <Input
                          id="horasValidacao"
                          type="number"
                          placeholder="Ex: 60"
                          value={formData.horasValidacao}
                          onChange={(e) => setFormData({ ...formData, horasValidacao: e.target.value })}
                          className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="valorHora" className="text-white font-semibold">
                          Custo por hora da equipe (R$)
                        </Label>
                        <Input
                          id="valorHora"
                          type="number"
                          placeholder="Ex: 45"
                          value={formData.valorHora}
                          onChange={(e) => setFormData({ ...formData, valorHora: e.target.value })}
                          className="h-14 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#FF0000] focus:bg-white/15"
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="button"
                        onClick={handleCalculate}
                        className="flex-1 bg-[#FF0000] hover:bg-[#FF5001] text-white h-14 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all"
                      >
                        Calcular economia
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button
                        type="button"
                        onClick={handleClear}
                        variant="outline"
                        className="h-14 px-8 rounded-full text-base border-white/30 text-white hover:bg-white/10"
                      >
                        Limpar
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Results Hero - Appears after calculation */}
      {showResults && (
        <>
          <section id="results-hero" className="py-12 md:py-16 px-6 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-6"
              >
                {/* Sparkle Icon */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <Sparkles className="w-16 h-16 text-white mx-auto" />
                </motion.div>

                {/* Main Message */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  🎉 Você está ganhando
                </h2>

                {/* Animated Counter */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                  className="py-6 md:py-8"
                >
                  <p className="text-4xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">
                    R$ {animatedEconomia.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-xl md:text-3xl font-bold text-white/90 mt-3 md:mt-4">
                    por ano com a Rooster!
                  </p>
                </motion.div>

                {/* ROI Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-8 py-3"
                >
                  <p className="text-white font-bold text-lg">
                    ROI de {animatedROI}% • Economia real e mensurável
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-12 md:py-20 px-6 bg-[#011E36]">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 md:mb-12"
              >
                <h3 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4">
                  Comparativo: Antes x Com Rooster
                </h3>
                <p className="text-white/60 text-base md:text-lg">
                  Veja o impacto real da automação
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* ANTES */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                        <X className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-black text-white">Antes</h4>
                        <p className="text-red-300 text-xs md:text-sm">Você está perdendo</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-xs md:text-sm">Custo operacional</span>
                        <span className="text-white font-bold text-sm md:text-lg">
                          R$ {results.custoOperacionalAtual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-xs md:text-sm">Perdas com fraudes</span>
                        <span className="text-white font-bold text-sm md:text-lg">
                          R$ {results.fraudesAtuais.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-xs md:text-sm">Prêmios indevidos</span>
                        <span className="text-white font-bold text-sm md:text-lg">
                          R$ {results.perdasPremiosAtuais.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>

                      <div className="border-t-2 border-red-400/30 pt-3 md:pt-4 mt-3 md:mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold text-sm md:text-base">Total Anual</span>
                          <span className="text-red-400 font-black text-xl md:text-2xl">
                            R$ {results.totalPerdendo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="bg-red-500/10 rounded-xl p-4 flex items-center gap-3">
                        <Clock className="w-5 h-5 text-red-400" />
                        <span className="text-white text-sm">
                          {results.horasAtuais.toFixed(0)} horas gastas por ano
                        </span>
                      </div>
                    </div>

                    {/* Animated Bar */}
                    <div className="mt-6">
                      <div className="h-3 bg-red-500/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-red-500 to-red-600"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* COM ROOSTER */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-sm border-2 border-emerald-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-black text-white">Com Rooster</h4>
                        <p className="text-emerald-300 text-xs md:text-sm">Você vai ganhar</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-xs md:text-sm">Custo operacional</span>
                        <span className="text-white font-bold text-sm md:text-lg">
                          R$ {results.custoOperacionalNovo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-xs md:text-sm">Perdas com fraudes</span>
                        <span className="text-white font-bold text-sm md:text-lg">
                          R$ {results.fraudesNovo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-xs md:text-sm">Prêmios indevidos</span>
                        <span className="text-white font-bold text-sm md:text-lg">
                          R$ {results.perdasPremiosNovo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>

                      <div className="border-t-2 border-emerald-400/30 pt-3 md:pt-4 mt-3 md:mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold text-sm md:text-base">Total Anual</span>
                          <span className="text-emerald-400 font-black text-xl md:text-2xl">
                            R$ {results.totalComAutomacao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="bg-emerald-500/10 rounded-xl p-4 flex items-center gap-3">
                        <Clock className="w-5 h-5 text-emerald-400" />
                        <span className="text-white text-sm">
                          {results.horasNovas.toFixed(0)} horas gastas (economia de {(results.horasAtuais - results.horasNovas).toFixed(0)}h)
                        </span>
                      </div>
                    </div>

                    {/* Animated Bar - Shorter */}
                    <div className="mt-6">
                      <div className="h-3 bg-emerald-500/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(results.totalComAutomacao / results.totalPerdendo) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">{results.roiPercentual.toFixed(0)}%</h5>
                  <p className="text-white/60 text-xs md:text-sm">Eficiência estimada</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">80%</h5>
                  <p className="text-white/60 text-xs md:text-sm">Redução de tempo</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">80%</h5>
                  <p className="text-white/60 text-xs md:text-sm">Redução de fraudes</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Social Proof - Testimonial */}
          <section className="py-12 md:py-16 px-6 bg-[#01203F]">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#FF0000] to-[#FF5001] flex items-center justify-center text-white text-xl md:text-2xl font-black">
                      JM
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-white text-lg md:text-2xl font-bold mb-3 md:mb-4 leading-relaxed">
                      "Economizei R$ 30 mil no primeiro trimestre. A Rooster transformou nossa operação."
                    </p>
                    <div className="space-y-1">
                      <p className="text-white/90 font-semibold text-sm md:text-base">João Martins</p>
                      <p className="text-white/60 text-xs md:text-sm">Gerente de Marketing, Varejo SP</p>
                    </div>
                  </div>
                </div>

                {/* Client Logos */}
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
                  <p className="text-white/40 text-xs md:text-sm text-center mb-4 md:mb-6">Empresas que confiam na Rooster</p>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {['Lojas Americanas', 'Magazine Luiza', 'Casas Bahia', 'Renner'].map((client, idx) => (
                      <div key={idx} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-white font-black text-base md:text-lg">{client.charAt(0)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* Warning */}
      {showResults && (
        <section className="py-6 md:py-8 px-6 bg-[#011E36]">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl md:rounded-2xl p-3 md:p-4">
              <div className="flex gap-2 md:gap-3">
                <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-200/90 text-xs md:text-sm leading-relaxed">
                  <strong>Aviso:</strong> Esses valores são estimativas ilustrativas, baseadas em parâmetros médios do setor. O objetivo é demonstrar cenários de eficiência — não garantias de resultado.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final - Fixed Button */}
      {showResults && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF0000] to-[#FF5001] shadow-2xl"
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <div className="text-center md:text-left">
                <p className="text-white font-black text-lg md:text-2xl mb-0.5 md:mb-1">
                  🚀 Pronto para começar?
                </p>
                <p className="text-white/90 text-xs md:text-base">
                  Agende sua demonstração e veja a Rooster em ação
                </p>
              </div>
              <Link to="/contato">
                <Button className="bg-white hover:bg-white/90 text-[#FF0000] h-12 md:h-14 px-6 md:px-8 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                  Falar com especialista
                  <Zap className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      <div className={showResults ? "pb-32" : ""}>
        <Footer />
      </div>
    </div>
  );
};

export default Calculator;
