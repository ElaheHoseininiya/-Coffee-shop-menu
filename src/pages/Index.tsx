import { useState } from "react";
import { MenuItem } from "@/components/MenuItem";
import { CategoryNav } from "@/components/CategoryNav";
import { ItemDetailModal } from "@/components/ItemDetailModal";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import coldbrewImg from "@/assets/coldbrew.jpg";
import espressoImg from "@/assets/espresso.jpg";
import croissantImg from "@/assets/croissant.jpg";
import latteImg from "@/assets/latte.jpg";
import muffinImg from "@/assets/muffin.jpg";

interface MenuItemType {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: string;
  image: string;
  category: string;
}

const menuData: MenuItemType[] = [
  {
    id: "1",
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and velvety foam",
    fullDescription: "Our signature cappuccino features a perfect balance of bold espresso, creamy steamed milk, and a thick layer of microfoam. Topped with a delicate heart design by our skilled baristas. Made with premium Arabica beans sourced from sustainable farms.",
    price: "$4.50",
    image: cappuccinoImg,
    category: "Coffee",
  },
  {
    id: "2",
    name: "Café Latte",
    description: "Smooth espresso with steamed milk and latte art",
    fullDescription: "A classic favorite combining rich espresso with perfectly steamed milk, finished with beautiful latte art. Our baristas craft each cup with care, ensuring a smooth, creamy texture that coffee lovers adore. Available hot or iced.",
    price: "$4.75",
    image: latteImg,
    category: "Coffee",
  },
  {
    id: "3",
    name: "Espresso",
    description: "Bold and concentrated coffee shot",
    fullDescription: "Pure, intense, and aromatic. Our espresso is pulled to perfection using premium single-origin beans, resulting in a rich crema and complex flavor profile. Perfect on its own or as the base for your favorite coffee drink.",
    price: "$3.00",
    image: espressoImg,
    category: "Espresso",
  },
  {
    id: "4",
    name: "Double Espresso",
    description: "Two shots of bold espresso",
    fullDescription: "Double the intensity, double the pleasure. Two perfectly pulled shots of our premium espresso for those who need an extra kick. Rich, bold, and incredibly satisfying.",
    price: "$4.00",
    image: espressoImg,
    category: "Espresso",
  },
  {
    id: "5",
    name: "Cold Brew",
    description: "Smooth, refreshing cold-steeped coffee",
    fullDescription: "Slow-steeped for 16 hours to create a smooth, naturally sweet coffee with low acidity. Served over ice for a refreshing pick-me-up. Our cold brew is crafted using a special blend of beans selected specifically for cold brewing.",
    price: "$5.25",
    image: coldbrewImg,
    category: "Cold Drinks",
  },
  {
    id: "6",
    name: "Iced Latte",
    description: "Chilled espresso with cold milk over ice",
    fullDescription: "Cool, creamy, and refreshing. Our iced latte combines bold espresso shots with cold milk over ice, creating the perfect drink for warm days. Customize with your choice of milk and sweetener.",
    price: "$5.00",
    image: coldbrewImg,
    category: "Cold Drinks",
  },
  {
    id: "7",
    name: "Butter Croissant",
    description: "Flaky, buttery French pastry",
    fullDescription: "Made fresh daily using traditional French techniques, our croissants feature countless flaky layers and a rich, buttery taste. Perfect for breakfast or as an afternoon treat. Best enjoyed warm with your favorite coffee.",
    price: "$3.75",
    image: croissantImg,
    category: "Pastries",
  },
  {
    id: "8",
    name: "Chocolate Muffin",
    description: "Moist chocolate muffin with chocolate chips",
    fullDescription: "Indulgent and moist, our chocolate muffins are loaded with premium chocolate chips throughout. Baked fresh every morning with real butter and high-quality cocoa for a rich, satisfying treat.",
    price: "$4.25",
    image: muffinImg,
    category: "Pastries",
  },
];

const categories = [
  { id: "coffee", name: "Coffee" },
  { id: "espresso", name: "Espresso" },
  { id: "cold-drinks", name: "Cold Drinks" },
  { id: "pastries", name: "Pastries" },
];

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: MenuItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const getItemsByCategory = (category: string) => {
    return menuData.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-3">
            Cozy Corner Café
          </h1>
          <p className="font-inter text-lg md:text-xl text-primary-foreground/90">
            Artisan Coffee & Fresh Pastries
          </p>
        </div>
      </header>

      {/* Category Navigation */}
      <CategoryNav categories={categories} />

      {/* Menu Sections */}
      <main className="container mx-auto px-4 py-8">
        {categories.map((category) => {
          const items = getItemsByCategory(category.name);
          if (items.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="mb-16 scroll-mt-24">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item) => (
                  <MenuItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    onClick={() => handleItemClick(item)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Item Detail Modal */}
      <ItemDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </div>
  );
};

export default Index;
