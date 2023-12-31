import Hero from "@components/home/Hero";
import PopularProducts from "@components/home/PopularProducts";
import PopularServices from "@components/home/PopularServices";
import Testimonial from "@components/home/Testimonial";
import Image from "next/image";

function Home() {
  return (
    <section className="home w-screen flex flex-col space-y-12">
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
      <div className="home--intro bg-white space-y-24 mb-10">
        <Testimonial />
        <PopularProducts />
        <PopularServices />
      </div>
    </section>
  );
}

export default Home;
