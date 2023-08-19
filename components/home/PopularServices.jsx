import ServiceInfo from "@components/ServiceInfo";
import ServicesList from "@components/services/ServicesList";
import Link from "next/link";
function PopularServices() {
  const popularServices = [
    {
      name: "Hair Extensions",
      price: 75,
      tag: "hair",
    },
    {
      name: "Blowout",
      price: 25,
      tag: "hair",
    },
    {
      name: "Keratin Treatment",
      price: 75,
      tag: "conditioning",
    },
  ];
  return (
    <div className="featured--services flex-center flex-col py-12 bg-white space-y-24">
      <h2 className="subheading_text font-normal">Popular Services</h2>
      <div className="lg:w-1/2">
        <ServicesList services={popularServices} name="Trending" />
      </div>

      <Link href="/services">
        <button className="outline_btn self-center">View All Services</button>
      </Link>
    </div>
  );
}

export default PopularServices;
