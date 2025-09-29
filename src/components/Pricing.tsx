import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      { text: "5 conversas por dia", included: true },
      { text: "Acesso a modelos básicos", included: true },
      { text: "Geração de 3 imagens/dia", included: true },
      { text: "Histórico de 7 dias", included: true },
      { text: "Suporte por email", included: true },
      { text: "Modelos avançados", included: false },
      { text: "Upload de documentos", included: false },
      { text: "API access", included: false },
    ],
    cta: "Começar grátis",
    highlight: false,
  },
  {
    name: "Pro",
    price: "R$ 49",
    period: "/mês",
    description: "Para profissionais e equipes",
    features: [
      { text: "Conversas ilimitadas", included: true },
      { text: "Todos os modelos de IA", included: true },
      { text: "Geração ilimitada de imagens", included: true },
      { text: "Histórico ilimitado", included: true },
      { text: "Suporte prioritário", included: true },
      { text: "Upload de documentos", included: true },
      { text: "API access", included: true },
      { text: "Workspace compartilhado", included: true },
    ],
    cta: "Começar agora",
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Escolha seu <span className="text-gradient-neon">Plano</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Comece gratuitamente ou desbloqueie todo o potencial com o plano Pro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border transition-all duration-300 animate-slide-up ${
                plan.highlight
                  ? "bg-card border-primary/50 shadow-2xl glow-neon-mix scale-105 hover:scale-110"
                  : "bg-card border-border hover:border-primary/30 hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlight && (
                <>
                  <div className="absolute inset-0 bg-gradient-neon opacity-10 rounded-3xl" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-neon text-white text-sm font-semibold rounded-full">
                    Mais Popular
                  </div>
                </>
              )}

              <div className="relative">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-gradient-neon">{plan.price}</span>
                  <span className="text-foreground/60 ml-2">{plan.period}</span>
                </div>

                <Button
                  className={`w-full mb-8 ${
                    plan.highlight
                      ? "bg-gradient-neon text-white hover:opacity-90 glow-neon-mix animate-pulse-glow"
                      : "bg-card border-2 border-primary hover:bg-card/50"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                      )}
                      <span className={feature.included ? "text-foreground" : "text-foreground/40"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
