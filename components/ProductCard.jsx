import Image from "next/image";

function ProductCard() {
  return (
    <div className="drop-shadow-2xl">
      <Image
        src="/assets/images/pretty-queen-logo.jpeg"
        width={300}
        height={300}
      />
      <div className="bg-zinc-100 flex-center flex-col p-6 gap-3">
        <h3 className="text-xl">Product Name</h3>
        <button className="yellow_btn">Price</button>
      </div>
    </div>
  );
}

export default ProductCard;
