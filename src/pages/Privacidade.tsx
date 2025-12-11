import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Users, Cookie, Server, UserCheck, Mail, RefreshCw } from "lucide-react";

const Privacidade = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#01203f] pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">Compromisso com sua privacidade</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Política de Privacidade
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A Rooster Fidelidades valoriza a confiança que você deposita em nós. 
              Este documento explica como coletamos, usamos e protegemos seus dados pessoais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          
          {/* 1. Apresentação e Objetivo */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">1. Apresentação e Objetivo</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                A Rooster Fidelidades, plataforma de software de fidelidade e cashback para estabelecimentos 
                comerciais e consumidores finais, apresenta esta Política de Privacidade com o objetivo de 
                informar de forma clara e transparente como tratamos os dados pessoais de nossos usuários.
              </p>
              <p>
                Esta política aplica-se a todas as pessoas que acessam nosso site, aplicativo ou utilizam 
                nossos serviços de cashback e fidelidade. Nosso compromisso é garantir que seus dados sejam 
                tratados com respeito, segurança e em conformidade com a legislação vigente.
              </p>
            </div>
          </motion.div>

          {/* 2. Base Legal */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">2. Base Legal</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                O tratamento de dados pessoais realizado pela Rooster Fidelidades está fundamentado na 
                Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018), bem como em outras 
                normas aplicáveis, incluindo o Marco Civil da Internet (Lei nº 12.965/2014) e o Código 
                de Defesa do Consumidor (Lei nº 8.078/1990).
              </p>
              <p>
                As bases legais utilizadas para o tratamento de seus dados incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Execução de contrato ou de procedimentos preliminares relacionados a contrato</li>
                <li>Cumprimento de obrigação legal ou regulatória</li>
                <li>Legítimo interesse da Rooster Fidelidades</li>
                <li>Consentimento do titular, quando aplicável</li>
              </ul>
            </div>
          </motion.div>

          {/* 3. Tipos de Dados Coletados */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">3. Tipos de Dados Coletados</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p><strong>Dados Cadastrais:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Nome completo</li>
                <li>CPF</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone celular</li>
                <li>Data de nascimento (opcional)</li>
                <li>Endereço (quando necessário)</li>
              </ul>

              <p><strong>Dados de Transações de Cashback:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Histórico de transações de pontos</li>
                
                <li>Dados de notas fiscais (quando utilizadas para validação)</li>
                <li>Estabelecimentos frequentados</li>
              </ul>

              <p><strong>Informações de Navegação e Dispositivo:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Endereço IP</li>
                <li>Tipo de navegador e sistema operacional</li>
                <li>Páginas acessadas e tempo de permanência</li>
                <li>Identificadores de dispositivo</li>
                <li>Dados de geolocalização (quando autorizado)</li>
              </ul>

              <div className="bg-[#01203f]/5 rounded-lg p-4 border-l-4 border-[#01203f]">
                <p className="font-medium text-[#01203f]">
                  <strong>Importante:</strong> A Rooster Fidelidades não coleta dados sensíveis (origem racial 
                  ou étnica, convicção religiosa, opinião política, dados de saúde, etc.), salvo quando 
                  estritamente exigido por lei ou com seu consentimento expresso.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Formas de Coleta */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">4. Formas de Coleta</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>Seus dados pessoais podem ser coletados das seguintes formas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cadastro:</strong> Quando você cria uma conta em nosso aplicativo ou site, 
                  fornecendo seus dados diretamente.
                </li>
                <li>
                  <strong>Uso do Aplicativo ou Site:</strong> Durante sua navegação e interação com 
                  nossa plataforma, coletamos informações automaticamente.
                </li>
                <li>
                  <strong>Registros de Compra:</strong> Ao realizar transações em estabelecimentos 
                  parceiros e registrar notas fiscais para acúmulo de cashback.
                </li>
                <li>
                  <strong>Cookies e Tecnologias Similares:</strong> Utilizamos cookies e outras 
                  tecnologias de rastreamento para melhorar sua experiência.
                </li>
                <li>
                  <strong>Atendimento:</strong> Quando você entra em contato conosco por e-mail, 
                  telefone ou outros canais de suporte.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 5. Finalidades do Uso dos Dados */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">5. Finalidades do Uso dos Dados</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
              
              <p><strong>Prestação dos Serviços de Cashback e Fidelidade:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Criar e gerenciar sua conta de usuário</li>
                <li>Processar e registrar transações de cashback</li>
                <li>Creditar valores em sua carteira digital</li>
                <li>Permitir o resgate de créditos em estabelecimentos parceiros</li>
              </ul>

              <p><strong>Comunicação:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Enviar notificações sobre transações e saldo</li>
                <li>Responder a dúvidas e solicitações de suporte</li>
                <li>Informar sobre novidades, promoções e estabelecimentos parceiros</li>
              </ul>

              <p><strong>Segurança e Prevenção de Fraudes:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Verificar sua identidade e autenticar acessos</li>
                <li>Detectar e prevenir atividades fraudulentas</li>
                <li>Proteger a integridade da plataforma</li>
              </ul>

              <p><strong>Melhoria da Experiência:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Personalizar conteúdos e ofertas</li>
                <li>Analisar padrões de uso para aprimorar nossos serviços</li>
                <li>Desenvolver novas funcionalidades</li>
              </ul>

              <p><strong>Marketing (com seu consentimento):</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Enviar comunicações promocionais</li>
                <li>Oferecer benefícios personalizados</li>
              </ul>

              <p><strong>Cumprimento de Obrigações Legais:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Atender exigências de autoridades competentes</li>
                <li>Cumprir obrigações fiscais e regulatórias</li>
              </ul>
            </div>
          </motion.div>

          {/* 6. Compartilhamento dos Dados */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">6. Compartilhamento dos Dados</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                A Rooster Fidelidades pode compartilhar seus dados pessoais nas seguintes situações:
              </p>
              
              <p><strong>Parceiros Comerciais (Estabelecimentos):</strong></p>
              <p className="mb-4">
                Compartilhamos informações necessárias para a execução das transações de cashback, 
                como identificação do usuário e valor da transação.
              </p>

              <p><strong>Provedores de Infraestrutura e Serviços:</strong></p>
              <p className="mb-4">
                Contratamos empresas para serviços como hospedagem de dados, processamento de pagamentos, 
                envio de comunicações e análise de dados, sempre mediante contratos que garantem a 
                proteção de suas informações.
              </p>

              <p><strong>Autoridades Competentes:</strong></p>
              <p className="mb-4">
                Quando exigido por lei, decisão judicial ou solicitação de autoridade competente.
              </p>

              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="font-medium text-green-800">
                  <strong>Garantia:</strong> A Rooster Fidelidades NÃO vende, aluga ou cede seus dados 
                  pessoais para terceiros com finalidades comerciais ou publicitárias sem seu 
                  consentimento expresso.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 7. Cookies e Tecnologias de Rastreamento */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">7. Cookies e Tecnologias de Rastreamento</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nossa 
                plataforma. Cookies são pequenos arquivos de texto armazenados em seu dispositivo.
              </p>
              
              <p><strong>Categorias de Cookies:</strong></p>
              
              <div className="space-y-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-[#01203f]">Cookies Essenciais</p>
                  <p className="text-sm">
                    Necessários para o funcionamento básico do site e aplicativo. Sem eles, 
                    algumas funcionalidades não estarão disponíveis.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-[#01203f]">Cookies de Desempenho</p>
                  <p className="text-sm">
                    Coletam informações sobre como você utiliza nossa plataforma, ajudando-nos 
                    a identificar problemas e melhorar a performance.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-[#01203f]">Cookies Funcionais</p>
                  <p className="text-sm">
                    Permitem lembrar suas preferências e personalizar sua experiência, como 
                    idioma e configurações de exibição.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-[#01203f]">Cookies de Marketing</p>
                  <p className="text-sm">
                    Utilizados para exibir anúncios relevantes e medir a eficácia de campanhas 
                    publicitárias. Requerem seu consentimento.
                  </p>
                </div>
              </div>

              <p><strong>Como gerenciar cookies:</strong></p>
              <p>
                Você pode configurar seu navegador para recusar cookies ou alertá-lo quando um 
                cookie estiver sendo enviado. Note que, ao desativar cookies, algumas funcionalidades 
                podem não funcionar corretamente.
              </p>
            </div>
          </motion.div>

          {/* 8. Medidas de Segurança */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">8. Medidas de Segurança</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                A Rooster Fidelidades adota medidas técnicas e organizacionais para proteger seus 
                dados pessoais contra acessos não autorizados, alteração, divulgação ou destruição:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Criptografia:</strong> Utilizamos protocolos de criptografia (SSL/TLS) 
                  para proteger a transmissão de dados.
                </li>
                <li>
                  <strong>Controle de Acesso:</strong> Acesso aos dados pessoais restrito a 
                  colaboradores autorizados, mediante autenticação e registro de atividades.
                </li>
                <li>
                  <strong>Armazenamento Seguro:</strong> Dados armazenados em servidores seguros, 
                  com backups regulares e proteção contra invasões.
                </li>
                <li>
                  <strong>Monitoramento:</strong> Sistemas de detecção de vulnerabilidades e 
                  monitoramento contínuo de segurança.
                </li>
              </ul>

              <p><strong>Tempo de Retenção:</strong></p>
              <p>
                Seus dados pessoais são mantidos pelo tempo necessário para cumprir as finalidades 
                descritas nesta política, respeitando obrigações legais e regulatórias. Após esse 
                período, os dados são eliminados ou anonimizados de forma segura.
              </p>
            </div>
          </motion.div>

          {/* 9. Direitos do Titular */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">9. Direitos do Titular</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                Em conformidade com a LGPD, você tem os seguintes direitos em relação aos seus 
                dados pessoais:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Confirmação de existência:</strong> Confirmar se tratamos seus dados pessoais.
                </li>
                <li>
                  <strong>Acesso:</strong> Acessar os dados pessoais que mantemos sobre você.
                </li>
                <li>
                  <strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.
                </li>
                <li>
                  <strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar a anonimização, 
                  bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.
                </li>
                <li>
                  <strong>Portabilidade:</strong> Solicitar a portabilidade de seus dados a outro 
                  fornecedor de serviço.
                </li>
                <li>
                  <strong>Eliminação:</strong> Solicitar a eliminação de dados tratados com base 
                  em seu consentimento.
                </li>
                <li>
                  <strong>Informação sobre compartilhamento:</strong> Ser informado sobre as 
                  entidades com as quais compartilhamos seus dados.
                </li>
                <li>
                  <strong>Revogação de consentimento:</strong> Revogar o consentimento a qualquer 
                  momento, sem afetar a legalidade do tratamento anterior.
                </li>
              </ul>

              <p><strong>Como exercer seus direitos:</strong></p>
              <p>
                Para exercer qualquer um desses direitos, entre em contato conosco pelo canal 
                indicado na seção "Canal de Contato". Responderemos sua solicitação no prazo 
                estabelecido pela legislação.
              </p>
            </div>
          </motion.div>

          {/* 10. Canal de Contato */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">10. Canal de Contato e Encarregado de Dados</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                Para dúvidas, solicitações ou exercício de direitos relacionados à privacidade 
                e proteção de dados, entre em contato:
              </p>
              
              <div className="bg-[#01203f]/5 rounded-lg p-6 space-y-3">
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#01203f]" />
                  <span><strong>E-mail:</strong> privacidade@rooster.app.br</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center text-[#01203f]">📞</span>
                  <span><strong>Telefone:</strong> (11) 97629-2960</span>
                </p>
              </div>

              <p>
                O Encarregado de Dados (DPO) da Rooster Fidelidades está disponível para atender 
                suas solicitações e garantir o cumprimento da legislação de proteção de dados.
              </p>
            </div>
          </motion.div>

          {/* 11. Atualizações da Política */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#01203f]/10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-[#01203f]" />
              </div>
              <h2 className="text-2xl font-bold text-[#01203f]">11. Atualizações da Política</h2>
            </div>
            <div className="pl-13 space-y-4 text-[#01203f]/80 leading-relaxed">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir 
                mudanças em nossas práticas ou na legislação aplicável. Sempre que houver 
                alterações significativas, notificaremos você por meio de nossos canais de 
                comunicação.
              </p>
              <p>
                Recomendamos que você revise esta política regularmente para se manter informado 
                sobre como protegemos seus dados.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="font-medium text-[#01203f]">
                  <strong>Última atualização:</strong> 11 de dezembro de 2024
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacidade;
