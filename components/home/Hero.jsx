function Hero() {
  return (
    <div className="hero flex flex-col justify-center sm:px-24">
      <h1 className="heading_text">
        Always Look Your Best.
        <br />
        <span className="">
          Embrace Your Inner{" "}
          <span className="drop-shadow-lg rounded-full px-2 text-amber-500">
            Queen
          </span>
          .
        </span>
      </h1>
      <div className="flex-center sm:justify-start mt-5 gap-5">
        <button className="yellow_btn">Book</button>
        <button className="black_btn">Shop</button>
      </div>
    </div>
  );
}

export default Hero;
