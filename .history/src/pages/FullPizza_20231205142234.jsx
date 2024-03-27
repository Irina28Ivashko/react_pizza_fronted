import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const { id } = useParams();

  React.useEffect(() => {}, []);

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
