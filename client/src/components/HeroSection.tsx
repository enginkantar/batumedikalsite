import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Medical_store_hero_image_486165a9.png";

interface HeroSectionProps {
  onViewProducts?: () => void;
}

export default function HeroSection({ onViewProducts }: HeroSectionProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-4" data-testid="text-hero-title">
            Batu Medikal
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-medium" data-testid="text-hero-subtitle">
            Sağlıkta Güvenilir Adres
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90" data-testid="text-hero-description">
            Sağlık ürünlerinde güvenilir çözüm ortağınız
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 border-white"
            onClick={onViewProducts}
            data-testid="button-view-products"
          >
            Ürünlerimizi İnceleyin
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
