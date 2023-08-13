import Image from "next/image";

function Testimonial() {
  return (
    <div className="testimonial flex-center flex-col lg:flex-row lg:gap-24 bg-white md:py-24 ">
      <div className="testimonial-img-container">
        <Image
          src="/assets/images/pretty-queen-logo.jpeg"
          width={500}
          height={500}
        />
      </div>
      <div className="flex-start flex-col px-3 py-10 gap-12 lg:w-1/4">
        <h2 className="text-3xl font-bold">Why Our Clients Choose Us?</h2>
        <p className="text-xl">
          We provide only the best services to our clients
        </p>
        <p className="w-2/3 text-xl text-neutral-500">
          With years of expertise and client satisfaction we guarantee we can
          meet your every need
        </p>
        <button className="outline_btn">Learn About Us</button>
      </div>
    </div>
  );
}

export default Testimonial;
