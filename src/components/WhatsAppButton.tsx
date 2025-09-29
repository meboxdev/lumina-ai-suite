import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo seu número
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-60 animate-pulse-glow" />
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-float">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
