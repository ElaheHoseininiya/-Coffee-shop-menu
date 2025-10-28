import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
}

interface CategoryNavProps {
  categories: Category[];
}

export const CategoryNav = ({ categories }: CategoryNavProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || "");

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const category of categories) {
        const element = document.getElementById(category.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={cn(
                "font-inter whitespace-nowrap transition-all duration-300",
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-card text-foreground hover:bg-secondary"
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};
