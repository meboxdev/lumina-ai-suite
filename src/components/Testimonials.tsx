import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Designer UX/UI",
    content: "Incrível ter acesso a todas as IAs em um só lugar. Economizo tempo e dinheiro usando o IA Hub para meus projetos.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Desenvolvedor",
    content: "A interface é super intuitiva e a possibilidade de comparar respostas de diferentes modelos é sensacional!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Gerente de Marketing",
    content: "Uso diariamente para criar conteúdo, analisar dados e gerar imagens. Ferramenta essencial para minha equipe.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            O que nossos <span className="text-gradient-neon">usuários dizem</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Milhares de profissionais já confiam no IA Hub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
