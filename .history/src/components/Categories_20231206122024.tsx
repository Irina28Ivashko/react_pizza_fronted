import React from "react";

type CategoriesProps = {
  value: number;
  onCangeCategory: (i: number) => void;
  getCategories: (categories: string[]) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = ({
  value,
  getCategories,
  onCangeCategory,
}) => {
  getCategories(categories);

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onCangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
