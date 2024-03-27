import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {Categories.map((value, i) => (
            <li onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : '' } 
        ))}
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
}

export default Categories;
