import ServiceInfo from "@components/ServiceInfo";
import Link from "next/link";
function PopularServices() {
  return (
    <div className="featured--services flex-center flex-col py-12 bg-white space-y-12">
      <h2 className="subheading_text">Popular Services</h2>
      <div className="flex-center flex-col w-full gap-12">
        <ServiceInfo />
        <ServiceInfo />
        <ServiceInfo />
      </div>
      <Link href="/services">
        <button className="outline_btn self-center">View All Services</button>
      </Link>
    </div>
  );
}

export default PopularServices;
