import React from "react";
import { getPageArray } from "../../utils/pages";

export const Pagination = ({ setPage, totalPage, page }) => {
  const pageArray = getPageArray(totalPage);

  return (
    <div className="wrapper">
      {pageArray.map((p) => (
        <span
          key={p}
          onClick={() => setPage(p)}
          className={page === p ? "page page-current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
