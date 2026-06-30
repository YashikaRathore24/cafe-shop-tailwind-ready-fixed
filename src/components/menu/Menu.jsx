import "./menu.css";
import { useState } from "react";
import { Coffee } from "lucide-react";
import { menu } from "../../lib/menu-data";

const icons = {
  Coffee,
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menu[0].title);

  const selectedCategory = menu.find(
    (category) => category.title === activeCategory
  );

  const Icon = icons[selectedCategory?.icon] || Coffee;

  const getCategoryEmoji = () => {
    switch (activeCategory) {
      case "Chai":
        return "☕";
      case "Mocktails":
        return "🍹";
      case "Frappes":
        return "🥤";
      case "Shakes":
        return "🥛";
      case "Pizza":
        return "🍕";
      case "Fries":
        return "🍟";
      case "Sandwiches":
        return "🥪";
      case "Burgers":
        return "🍔";
      case "Maggi":
        return "🍜";
      default:
        return "☕";
    }
  };

  return (
    <section id="menu" className="menu">
      <div className="menu-container">

        <h2 className="section-title">Our Menu</h2>

        <p className="section-subtitle">
          From soulful chai to cheesy pizzas — crafted fresh, served with love.
        </p>

        {/* Category Tabs */}

        <div className="menu-tabs">
          {menu.map((category) => (
            <button
              key={category.id}
              className={`menu-tab ${
                activeCategory === category.title ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Selected Category */}

        {selectedCategory && (
          <div className="menu-section">

            <h3 className="category-title">
              <Icon size={28} />
              {selectedCategory.title}
            </h3>

            <div className="menu-grid">
              {selectedCategory.items.map((item) => (
                <div className="menu-card" key={item.name}>

                  <div className="menu-left">

                    <div className="drink-circle">
                      {getCategoryEmoji()}
                    </div>

                    <span>{item.name}</span>

                  </div>

                

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Menu;