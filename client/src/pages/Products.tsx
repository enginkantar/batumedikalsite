import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductDialog from "@/components/ProductDialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import stethoscopeImage from "@assets/generated_images/Medical_product_-_stethoscope_238a0018.png";
import bpMonitorImage from "@assets/generated_images/Blood_pressure_monitor_product_51791084.png";
import thermometerImage from "@assets/generated_images/Digital_thermometer_product_664d81a4.png";
import oximeterImage from "@assets/generated_images/Pulse_oximeter_product_2ec5799c.png";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  //todo: remove mock functionality
  const allProducts = [
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
    {
      id: "5",
      name: "Premium Stetoskop",
      description: "Kardiyo stetoskopu, üst düzey ses kalitesi",
      price: "650.00",
      image: stethoscopeImage,
      category: "Tanı Ekipmanları",
    },
    {
      id: "6",
      name: "Bilek Tansiyon Aleti",
      description: "Kompakt bilek tipi tansiyon ölçer, taşınabilir",
      price: "280.00",
      image: bpMonitorImage,
      category: "Tansiyon Aletleri",
    },
  ];

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (id: string) => {
    const product = allProducts.find((p) => p.id === id);
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-page-title">
            Ürünlerimiz
          </h1>
          <p className="text-muted-foreground mb-6" data-testid="text-page-description">
            Geniş medikal ürün yelpazemizi inceleyin
          </p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Ürün ara..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search"
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground" data-testid="text-no-results">
              Aradığınız kriterlere uygun ürün bulunamadı.
            </p>
          </div>
        )}
      </div>

      <ProductDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        product={selectedProduct}
      />
    </div>
  );
}
