import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSort,
  setSort,
  Sort,
  SortPropertyEnum,
} from "../redux/slices/filterSlice";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortPopupProps = {
  value: Sort;
};

export const sortList: SortItem[] = [
  { name: "популярности (DESC)", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "популярности (ASC)", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "цене (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "цене (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "алфавиту (DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "алфавиту (ASC)", sortProperty: SortPropertyEnum.TITLE_ASC },
];

const SortPopup: React.FC<SortPopupProps> = 
export default SortPopup;
