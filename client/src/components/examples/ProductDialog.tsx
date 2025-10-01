import { useState } from "react";
import ProductDialog from "../ProductDialog";
import { Button } from "@/components/ui/button";
import stethoscopeImage from "@assets/generated_images/Medical_product_-_stethoscope_238a0018.png";

export default function ProductDialogExample() {
  const [open, setOpen] = useState(false);

  const product = {
    id: "1",
    name: "Profesyonel Stetoskop",
    description: "Yüksek kaliteli çift başlıklı stetoskop. Mükemmel akustik performans sağlar. Paslanmaz çelik göğüs parçası ve dayanıklı yapı.",
    price: "450.00",
    image: stethoscopeImage,
    category: "Tanı Ekipmanları",
  };

  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)}>Ürün Detaylarını Göster</Button>
      <ProductDialog open={open} onOpenChange={setOpen} product={product} />
    </div>
  );
}
