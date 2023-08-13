import Hero from "@components/home/Hero";
import PopularProducts from "@components/home/PopularProducts";
import PopularServices from "@components/home/PopularServices";
import Testimonial from "@components/home/Testimonial";
import Image from "next/image";

function Home() {
  return (
    <section className="home flex flex-col ">
      <div className="bg-img-container">
        <Image
          src="/assets/images/crown-white-background.jpg"
          className="home-bg-img"
          layout="fill"
          objectFit="cover"
          sizes="100vw"
        />
      </div>
      <Hero />
      <Testimonial />
      <PopularProducts />
      <PopularServices />
    </section>
  );
}

export default Home;
