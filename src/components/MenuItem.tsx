import { Card } from "@/components/ui/card";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  onClick: () => void;
}

export const MenuItem = ({ name, description, price, image, onClick }: MenuItemProps) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair font-semibold text-lg text-foreground">{name}</h3>
          <span className="font-inter font-semibold text-accent">{price}</span>
        </div>
        <p className="font-inter text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Card>
  );
};
