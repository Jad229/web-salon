import ProductCard from "@components/ProductCard";
import FilterForm from "@components/products/FilterForm";

function Products() {
  return (
    <section className="w-screen flex-center flex-col space-y-12 pt-5">
      <h2 className="heading_text">Products</h2>

      <div className="h-max flex flex-col lg:flex-row">
        <FilterForm />
        <div className="hidden lg:block h-full w-1/3">
          <form className="w-80 mx-auto flex flex-col gap-12 p-6 bg-white rounded-lg drop-shadow-xl">
            <div className="flex-between">
              <label htmlFor="shampoo">Shampoo</label>
              <input id="shampoo" name="shampoo" type="checkbox" />
            </div>
            <div className="flex-between">
              <label htmlFor="conditioner">Conditioner</label>
              <input id="conditioner" name="conditioner" type="checkbox" />
            </div>
            <div className="flex-between">
              <label htmlFor="wigs">Wigs</label>
              <input id="wigs" name="wigs" type="checkbox" />
            </div>
            <div className="flex-between">
              <label htmlFor="extensions">Extensions</label>
              <input id="extensions" name="extensions" type="checkbox" />
            </div>
            <div className="flex-between">
              <label htmlFor="oils">Oils</label>
              <input id="oils" name="oils" type="checkbox" />
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 gap-3 flex-center flex-col lg:flex-row flex-wrap">
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
