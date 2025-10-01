import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
  } | null;
}

export default function ProductDialog({ open, onOpenChange, product }: ProductDialogProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" data-testid="dialog-product-details">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl" data-testid="text-dialog-product-name">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-dialog-product"
            />
          </div>
          <div className="space-y-4">
            <Badge data-testid="badge-dialog-category">{product.category}</Badge>
            <p className="text-muted-foreground" data-testid="text-dialog-description">
              {product.description}
            </p>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Fiyat</p>
              <p className="text-3xl font-bold text-primary" data-testid="text-dialog-price">
                ₺{parseFloat(product.price).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Teslimat:</span> 2-3 iş günü
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Garanti:</span> 2 yıl
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
