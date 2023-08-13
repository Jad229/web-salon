import Nav from "@components/Nav";
import "@styles/globals.css";
export const metadata = {
  title: "Pretty Queen - Your Ultimate Hair Salon Experience",
  description:
    "Pretty Queen, where beauty meets elegance. We offer a range of premium hair care services tailored to your unique style and preferences. Our team of skilled stylists is dedicated to providing you with the ultimate salon experience, whether you're looking for a fresh haircut, stunning hair color, or a luxurious treatment. Book an appointment today and let us bring out your inner beauty and confidence.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
