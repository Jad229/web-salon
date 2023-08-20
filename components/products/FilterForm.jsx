import React from "react";

function FilterForm() {
  return (
    <form className="flex-start flex-col">
      <label htmlFor="shampoo">Shampoo</label>
      <input id="shampoo" name="shampoo" type="checkbox" />
      <label htmlFor="conditioner">Conditioner</label>
      <input id="conditioner" name="conditioner" type="checkbox" />
      <label htmlFor="wigs">Wigs</label>
      <input id="wigs" name="wigs" type="checkbox" />
      <label htmlFor="extensions">Extensions</label>
      <input id="extensions" name="extensions" type="checkbox" />
      <label htmlFor="oils">Oils</label>
      <input id="oils" name="oils" type="checkbox" />
    </form>
  );
}

export default FilterForm;
