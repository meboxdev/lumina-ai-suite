import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MessageSquare, Image, FileText } from "lucide-react";
import fashionTransform from "@/assets/gallery/fashion-transform.png";
import houseConstruction from "@/assets/gallery/house-construction.png";
import flyingVehicle from "@/assets/gallery/flying-vehicle.png";
import womanTablet from "@/assets/gallery/woman-tablet.png";
import catSkateboard from "@/assets/gallery/cat-skateboard.png";
import photoRestoration from "@/assets/gallery/photo-restoration.png";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <section id="modelos" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Interface <span className="text-gradient-neon">Intuitiva</span>
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Trabalhe com múltiplas IAs simultaneamente. Troque entre modelos, compare respostas 
              e encontre a melhor solução para cada tarefa.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Múltiplos Modelos</h4>
                  <p className="text-foreground/60">Acesse todos os principais modelos em um único lugar</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Comparação em Tempo Real</h4>
                  <p className="text-foreground/60">Compare respostas de diferentes IAs lado a lado</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Histórico Organizado</h4>
                  <p className="text-foreground/60">Salve e organize todas as suas conversas</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive Demo */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-neon opacity-20 blur-3xl rounded-3xl" />
            <Tabs value={activeTab} onValueChange={setActiveTab} className="relative">
              <TabsList className="grid w-full grid-cols-3 bg-card border border-border mb-4">
                <TabsTrigger value="chat" className="data-[state=active]:bg-gradient-neon data-[state=active]:text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="image" className="data-[state=active]:bg-gradient-neon data-[state=active]:text-white">
                  <Image className="w-4 h-4 mr-2" />
                  Imagens
                </TabsTrigger>
                <TabsTrigger value="docs" className="data-[state=active]:bg-gradient-neon data-[state=active]:text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Docs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="bg-card border border-border rounded-2xl p-6 min-h-[400px] glow-neon-blue">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-neon flex-shrink-0" />
                    <div className="flex-1 bg-muted rounded-xl p-4">
                      <p className="text-sm">Olá! Posso te ajudar com qualquer pergunta. Tenho acesso a vários modelos de IA.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="flex-1 bg-primary/20 rounded-xl p-4 max-w-md">
                      <p className="text-sm">Como funciona a integração entre os modelos?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="image" className="bg-card border border-border rounded-2xl p-6 min-h-[400px] glow-neon-purple">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="aspect-square rounded-xl overflow-hidden border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <img src={fashionTransform} alt="Transformação de moda com IA" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <img src={houseConstruction} alt="Visualização de construção com IA" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <img src={flyingVehicle} alt="Veículo voador futurista gerado por IA" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <img src={womanTablet} alt="Interface de IA em ambiente urbano" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <img src={catSkateboard} alt="Gato em skate estilo cyberpunk gerado por IA" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <img src={photoRestoration} alt="Restauração de foto com IA" className="w-full h-full object-cover" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="docs" className="bg-card border border-border rounded-2xl p-6 min-h-[400px] glow-neon-mix">
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <div className="h-4 bg-foreground/10 rounded w-3/4 mb-2" />
                        <div className="h-3 bg-foreground/5 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
