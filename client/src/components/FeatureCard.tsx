import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6 pb-6">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="font-serif font-semibold text-lg mb-2" data-testid={`text-feature-title`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground" data-testid={`text-feature-description`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
