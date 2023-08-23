"use client";

import { useState } from "react";

function FilterForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="w-full lg:hidden ">
      <button
        className="w-full p-6 bg-amber-400 rounded-t-lg"
        onClick={() => setIsFormOpen((prevState) => !prevState)}
      >
        Filters
      </button>
      {isFormOpen && (
        <form className="fixed top-0 left-0 w-screen h-screen z-30 bg-white flex-center flex-col gap-12">
          <div>
            <label htmlFor="shampoo">Shampoo</label>
            <input id="shampoo" name="shampoo" type="checkbox" />
          </div>
          <div>
            <label htmlFor="conditioner">Conditioner</label>
            <input id="conditioner" name="conditioner" type="checkbox" />
          </div>
          <div>
            <label htmlFor="wigs">Wigs</label>
            <input id="wigs" name="wigs" type="checkbox" />
          </div>
          <div>
            <label htmlFor="extensions">Extensions</label>
            <input id="extensions" name="extensions" type="checkbox" />
          </div>
          <div>
            <label htmlFor="oils">Oils</label>
            <input id="oils" name="oils" type="checkbox" />
          </div>
          <button
            type="button"
            className="outline_btn"
            onClick={() => setIsFormOpen((prevState) => !prevState)}
          >
            Close
          </button>
        </form>
      )}
    </div>
  );
}

export default FilterForm;
