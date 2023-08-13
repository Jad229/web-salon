import ProductCard from "@components/ProductCard";
import React from "react";

function PopularProducts() {
  return (
    <div className="pt-12 sm:pt-0 featured bg-white space-y-12">
      <h1 className="subheading_text">Popular Products</h1>
      <div className="flex-center flex-wrap gap-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default PopularProducts;
