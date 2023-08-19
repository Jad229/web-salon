function ServiceInfo({ name, price }) {
  return (
    <div className="flex-between w-full gap-10">
      <h2>{name}</h2>
      <p>from ${price}</p>
    </div>
  );
}

export default ServiceInfo;
