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
    <section className="flex-center flex-col lg:w-2/3 my-16 space-y-24">
      <div>
        <h1 className="heading_text">Services</h1>
      </div>
      <div className="flex-center flex-col lg:flex-row w-full space-y-24 md:space-y-0">
        <div className="lg:w-1/2 space-y-24">
          <ServicesList services={servicesData.hair} name="Hair" />
          <ServicesList services={servicesData.color} name="Color" />
          <ServicesList
            services={servicesData.conditioning}
            name="Conditioning"
          />
        </div>
        <div className="lg:w-1/2 space-y-24">
          <ServicesList services={servicesData.spa} name="Spa" />
          <ServicesList services={servicesData.nail} name="Nail" />
        </div>
      </div>
      <button className="yellow_btn">Get In Touch</button>
    </section>
  );
}

export default Services;
