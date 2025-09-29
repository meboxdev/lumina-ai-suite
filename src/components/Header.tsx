import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Modelos de IA", href: "#modelos" },
    { label: "Recursos", href: "#recursos" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center glow-neon-blue transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-xl">IA</span>
            </div>
            <span className="text-xl font-bold text-gradient-neon">Hub</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-neon text-white hover:opacity-90 transition-all duration-300 glow-neon-mix animate-pulse-glow">
              Experimentar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-gradient-neon text-white w-full mt-2">
                Experimentar Agora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
