import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string()
    .email("Email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres"),
  phone: z.string()
    .refine((value) => {
      if (!value) return true; // Campo opcional
      // Remove tudo exceto números
      const digitsOnly = value.replace(/\D/g, "");
      // Aceita 10 dígitos (fixo) ou 11 dígitos (celular com 9)
      return digitsOnly.length === 10 || digitsOnly.length === 11;
    }, "Telefone deve ter 10 ou 11 dígitos")
    .optional()
    .or(z.literal("")),
  message: z.string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          message: data.message,
        });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve.",
      });
      
      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#01203f]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Entre em <span className="text-red-600">Contato</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Fale com nossos especialistas e descubra como podemos transformar suas promoções.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl h-12 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Informações de Contato</h2>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-1">E-mail</h3>
                      <p className="text-sm md:text-base text-white/70">comercial@rooster.app</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-1">Telefone</h3>
                      <a href="tel:+5511976292960" className="text-sm md:text-base text-white/70 hover:text-white transition-colors">(11) 97629-2960</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-1">Endereço</h3>
                      <p className="text-sm md:text-base text-white/70">
                        São Paulo, SP<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-red-500/20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-1.5 md:space-y-2 text-sm md:text-base text-white/80">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

