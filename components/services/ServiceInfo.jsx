import React from "react";

function ServiceInfo({ name, price }) {
  return (
    <div className="">
      <h2>{name}</h2>
      <p>from ${price}</p>
    </div>
  );
}

export default ServiceInfo;
