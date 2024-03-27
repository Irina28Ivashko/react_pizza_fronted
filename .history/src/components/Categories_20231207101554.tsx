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

const Categories: React.FC<CategoriesProps> = 

export default Categories;
