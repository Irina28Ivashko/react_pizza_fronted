import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6567f9d69927836bd973f5c2.mockapi.io/items/` + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка ...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <p>fkjgfjglhkjlfk</p>
      <h4>{pizza.price} p</h4>
    </div>
  );
};

export default FullPizza;
