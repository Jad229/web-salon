import ServiceInfo from "@components/ServiceInfo";

function ServicesList({ services, name }) {
  return (
    <div className="w-screen px-10 lg:w-full flex-center flex-col gap-3">
      <h2 className="text-4xl">{name}</h2>
      <hr className="w-full h-0.5 bg-amber-400 border-0"></hr>
      {services &&
        services.map((service, idx) => (
          <ServiceInfo key={idx} name={service.name} price={service.price} /> // Added key prop
        ))}
    </div>
  );
}

export default ServicesList;
