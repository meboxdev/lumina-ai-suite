import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Pause, Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isControlsVisible, setIsControlsVisible] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const showControls = () => {
    setIsControlsVisible(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setIsControlsVisible(false);
    }, 3000);
  };

  const handleMouseEnter = () => {
    showControls();
  };

  const handleMouseMove = () => {
    showControls();
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setIsControlsVisible(false);
  };

  const handleTouchStart = () => {
    showControls();
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

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
                onClick={() => window.open('https://www.iubenda.com/pt-br/help/146046-free-privacy-policy-generator', '_blank')}
              >
                Experimentar grátis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-primary hover:bg-card/50 text-lg px-8 py-6 backdrop-blur-sm"
                onClick={() => window.open('https://www.iubenda.com/pt-br/help/146046-free-privacy-policy-generator', '_blank')}
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
            <div 
              className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl glow-neon-mix animate-float"
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
            >
              <video
                ref={videoRef}
                src={heroVideo}
                playsInline
                className="w-full h-auto"
                aria-label="Vizer AI Dashboard Demo"
              />
              
              {/* Video Controls Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 backdrop-blur-sm transition-opacity duration-300 ${isControlsVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/40 transition-all duration-300 glow-neon-blue"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </button>

                  {/* Volume Controls */}
                  <div className="flex items-center gap-2 flex-1">
                    <button
                      onClick={toggleMute}
                      className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/20 transition-all duration-300"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-white/80" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white/80" />
                      )}
                    </button>

                    {/* Volume Slider */}
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(59,130,246,0.5)] [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                      aria-label="Volume"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
