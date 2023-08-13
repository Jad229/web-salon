import ProductCard from "@components/ProductCard";
import React from "react";

function PopularProducts() {
  return (
    <div className="featured--products pt-12 sm:pt-0  bg-white space-y-12">
      <h2 className="subheading_text">Popular Products</h2>
      <div className="flex-center flex-wrap gap-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default PopularProducts;
