import { MessageSquare, Image, Search, FileText, Mic } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chat Multi-Modelo",
    description: "Acesse GPT-4, Claude, Gemini e outros em uma única conversa. Troque entre modelos instantaneamente.",
  },
  {
    icon: Image,
    title: "Geração de Imagens",
    description: "DALL-E, Midjourney, Stable Diffusion. Crie imagens incríveis com os melhores modelos de IA.",
  },
  {
    icon: Search,
    title: "Pesquisa em Tempo Real",
    description: "Busque informações atualizadas na web diretamente nas suas conversas com IA.",
  },
  {
    icon: FileText,
    title: "Upload de Documentos",
    description: "Envie PDFs, Word, Excel e outros arquivos. Analise e extraia insights rapidamente.",
  },
  {
    icon: Mic,
    title: "Chat por Voz",
    description: "Converse com IA usando sua voz. Transcrição e síntese de voz em tempo real.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Recursos <span className="text-gradient-neon">Poderosos</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Tudo que você precisa para trabalhar com inteligência artificial em um só lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-neon flex items-center justify-center mb-6 glow-neon-blue group-hover:animate-pulse-glow">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient-neon transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
