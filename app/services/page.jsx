"use client";
import ServicesList from "@components/services/ServicesList";
import axios from "axios";
import { useEffect, useState } from "react";

function Services() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axios.get("/api/services");
        setServicesData(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    getServices();
  }, []);

  return (
    <section>
      <div>
        <h1>Services</h1>
      </div>
      <div>
        <div>
          <ServicesList services={servicesData.hair} name="Hair" />
          <ServicesList services={servicesData.color} name="Color" />
          <ServicesList
            services={servicesData.conditioning}
            name="Conditioning"
          />
        </div>
        <div>
          <ServicesList services={servicesData.spa} name="Spa" />
          <ServicesList services={servicesData.nail} name="Nail" />
        </div>
      </div>
    </section>
  );
}

export default Services;
