import FeatureCard from "../FeatureCard";
import { ShieldCheck } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <FeatureCard
        icon={ShieldCheck}
        title="Kaliteli Ürünler"
        description="CE sertifikalı, uluslararası standartlara uygun medikal ürünler"
      />
    </div>
  );
}
