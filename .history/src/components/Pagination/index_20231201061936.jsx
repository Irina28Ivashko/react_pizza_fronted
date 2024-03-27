import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <ReactPaginate
      className={StyleSheet.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={handlePageClick}
      pageRangeDisplayed={8}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
