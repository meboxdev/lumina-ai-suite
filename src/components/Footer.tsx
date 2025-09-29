import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Recursos", href: "#recursos" },
      { label: "Modelos de IA", href: "#modelos" },
      { label: "Planos", href: "#planos" },
      { label: "API", href: "#" },
    ],
    company: [
      { label: "Sobre", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#contato" },
    ],
    legal: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "LGPD", href: "#" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer id="contato" className="bg-darker-bg border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center glow-neon-blue">
                <span className="text-white font-bold text-xl">IA</span>
              </div>
              <span className="text-xl font-bold text-gradient-neon">Hub</span>
            </div>
            <p className="text-foreground/60 mb-6 max-w-sm">
              Todas as melhores IAs em um só lugar. Trabalhe mais rápido e de forma mais inteligente 
              com acesso a múltiplos modelos de IA.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-all duration-300 hover:glow-neon-blue group"
                  >
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Produto</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Fique por dentro
            </h4>
            <p className="text-foreground/60 mb-4 text-sm">
              Receba novidades e atualizações sobre novos modelos de IA
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button className="px-6 py-2 bg-gradient-neon text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>© {currentYear} IA Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
