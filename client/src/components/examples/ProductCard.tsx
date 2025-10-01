import ProductCard from "../ProductCard";
import stethoscopeImage from "@assets/generated_images/Medical_product_-_stethoscope_238a0018.png";

export default function ProductCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <ProductCard
        id="1"
        name="Profesyonel Stetoskop"
        description="Yüksek kaliteli çift başlıklı stetoskop, mükemmel akustik performans"
        price="450.00"
        image={stethoscopeImage}
        category="Tanı Ekipmanları"
        onViewDetails={(id) => console.log('View details:', id)}
      />
    </div>
  );
}
