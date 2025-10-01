import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  onViewDetails?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  onViewDetails,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-product-${id}`}>
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          data-testid={`img-product-${id}`}
        />
        <Badge className="absolute top-2 left-2" data-testid={`badge-category-${id}`}>
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif font-semibold text-lg mb-2 line-clamp-1" data-testid={`text-product-name-${id}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3" data-testid={`text-product-description-${id}`}>
          {description}
        </p>
        <p className="text-2xl font-bold text-primary" data-testid={`text-product-price-${id}`}>
          ₺{parseFloat(price).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => onViewDetails?.(id)}
          data-testid={`button-view-details-${id}`}
        >
          Detayları Gör
        </Button>
      </CardFooter>
    </Card>
  );
}
