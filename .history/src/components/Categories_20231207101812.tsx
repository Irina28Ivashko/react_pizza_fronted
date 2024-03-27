import React from "react";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

type CategoriesProps = {
  value: number;
  onCangeCategory: (i: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onCangeCategory }) => {
    useWhyDidYouUpdate("Categories", {
      value,
      onCangeCategory,
    });
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
  }
);

export default Categories;
