import React from "react";
import ProductTable from "../../Components/ProductTable";
import Pagination from "../../Components/Pagination";

const ProductList = ({ onNavigate }) => {
  return (
    <>
      <ProductTable onNavigate={onNavigate} />
      <Pagination />
    </>
  );
};

export default ProductList;
