import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onCangeCategory = (id) => {
    dispatch(setCategoryId)(id);
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"; //Сортирока пицц
    const category = categoryId > 0 ? `category=${categoryId}` : ""; //отбор по категориям
    const search = searchValue ? `&search=${searchValue}` : ""; //поиск по бэкенду

    axios
      .get(
        `https://6567f9d69927836bd973f5c2.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onCangeCategory={onCangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
