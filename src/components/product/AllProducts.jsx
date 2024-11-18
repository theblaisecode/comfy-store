import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import { BsFillGridFill, BsList } from "react-icons/bs";

function AllProducts() {
  const { meta } = useLoaderData();

  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${pattern === layout ? "btn-primary text-primary-content" : "btn-ghost text-based-content"}`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} Product{totalProducts > 1 ? "s" : ""}
        </h4>

        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}>
            <BsFillGridFill />
          </button>

          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}>
            <BsList />
          </button>
        </div>
      </div>

      <div className="">
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products match your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
}

export default AllProducts;