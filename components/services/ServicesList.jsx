import ServiceInfo from "@components/ServiceInfo";

function ServicesList({ services, name }) {
  return (
    <div>
      <h2>{name}</h2>
      <hr />
      {services.map((service, idx) => (
        <ServiceInfo key={idx} name={service.name} price={service.price} /> // Added key prop
      ))}
    </div>
  );
}

export default ServicesList;
