import { useState } from "react";
import { useLocation } from "wouter";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import ProductDialog from "@/components/ProductDialog";
import { ShieldCheck, Truck, Headphones } from "lucide-react";
import stethoscopeImage from "@assets/generated_images/Medical_product_-_stethoscope_238a0018.png";
import bpMonitorImage from "@assets/generated_images/Blood_pressure_monitor_product_51791084.png";
import thermometerImage from "@assets/generated_images/Digital_thermometer_product_664d81a4.png";
import oximeterImage from "@assets/generated_images/Pulse_oximeter_product_2ec5799c.png";

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  //todo: remove mock functionality
  const featuredProducts = [
    {
      id: "1",
      name: "Profesyonel Stetoskop",
      description: "Yüksek kaliteli çift başlıklı stetoskop, mükemmel akustik performans",
      price: "450.00",
      image: stethoscopeImage,
      category: "Tanı Ekipmanları",
    },
    {
      id: "2",
      name: "Dijital Tansiyon Aleti",
      description: "Otomatik koldan tansiyon ölçüm cihazı, hafızalı",
      price: "320.00",
      image: bpMonitorImage,
      category: "Tansiyon Aletleri",
    },
    {
      id: "3",
      name: "Dijital Termometre",
      description: "Hızlı ve hassas ateş ölçümü, sesli uyarı",
      price: "85.00",
      image: thermometerImage,
      category: "Termometreler",
    },
    {
      id: "4",
      name: "Pulse Oksimetre",
      description: "Parmak tipi oksijen saturasyon ölçer, dijital ekran",
      price: "180.00",
      image: oximeterImage,
      category: "Oksimetreler",
    },
  ];

  const handleViewDetails = (id: string) => {
    const product = featuredProducts.find((p) => p.id === id);
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onViewProducts={() => setLocation("/products")} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={ShieldCheck}
              title="Kaliteli Ürünler"
              description="CE sertifikalı, uluslararası standartlara uygun medikal ürünler"
            />
            <FeatureCard
              icon={Truck}
              title="Hızlı Teslimat"
              description="2-3 iş günü içinde kapınızda, güvenli paketleme"
            />
            <FeatureCard
              icon={Headphones}
              title="Uzman Destek"
              description="7/24 müşteri desteği, ürün kullanım danışmanlığı"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-featured-title">
              Öne Çıkan Ürünlerimiz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-featured-description">
              En çok tercih edilen medikal ürünlerimizi keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        product={selectedProduct}
      />
    </div>
  );
}
