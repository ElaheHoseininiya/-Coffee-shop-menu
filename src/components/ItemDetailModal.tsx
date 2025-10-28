import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ItemDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
    fullDescription?: string;
  } | null;
}

export const ItemDetailModal = ({ isOpen, onClose, item }: ItemDetailModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card">
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <DialogHeader>
          <div className="flex justify-between items-start mb-2">
            <DialogTitle className="font-playfair text-3xl text-foreground">
              {item.name}
            </DialogTitle>
            <span className="font-inter font-bold text-2xl text-accent">{item.price}</span>
          </div>
          <Badge variant="secondary" className="w-fit font-inter">
            {item.category}
          </Badge>
        </DialogHeader>
        <div className="mt-4">
          <p className="font-inter text-foreground leading-relaxed">
            {item.fullDescription || item.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
