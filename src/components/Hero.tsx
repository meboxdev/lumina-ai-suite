import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,6%)] via-[hsl(220,35%,8%)] to-[hsl(270,40%,10%)]" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Múltiplas IAs em uma plataforma</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Todas as melhores{" "}
              <span className="text-gradient-neon">IAs</span> em um só lugar
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed">
              Acesse GPT-4, Claude, Gemini, DALL-E e muito mais. Chat avançado, geração de imagens, 
              pesquisa em tempo real e upload de documentos em uma única interface moderna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-neon text-white hover:opacity-90 transition-all duration-300 glow-neon-mix text-lg px-8 py-6 group animate-pulse-glow"
              >
                Experimentar grátis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-primary hover:bg-card/50 text-lg px-8 py-6 backdrop-blur-sm"
              >
                Ver planos
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient-neon">50+</p>
                <p className="text-sm text-foreground/60">Modelos de IA</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient-neon">100k+</p>
                <p className="text-sm text-foreground/60">Usuários ativos</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient-neon">99.9%</p>
                <p className="text-sm text-foreground/60">Uptime</p>
              </div>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl glow-neon-mix animate-float">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                aria-label="Vizer AI Dashboard Demo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
