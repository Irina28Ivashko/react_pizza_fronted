import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const [data, setData] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      const { data } = await axios.get(
        `https://6567f9d69927836bd973f5c2.mockapi.io/items/` + id
      );
    }
  }, []);

  return (
    <div className="container">
      <img src="" />
      <h2>222</h2>
      <p>fkjgfjglhkjlfk</p>
      <h4>250 p</h4>
    </div>
  );
};

export default FullPizza;
