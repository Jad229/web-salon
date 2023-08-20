import ProductCard from "@components/ProductCard";
import FilterForm from "@components/products/FilterForm";
import React from "react";

function Products() {
  return (
    <section className="w-screen flex-center flex-col">
      <h2 className="heading_text">Products</h2>

      <div className="flex-center">
        <div className="w-1/3">
          <FilterForm />
        </div>
        <div className="w-1/2 gap-3 flex-start flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default Products;
