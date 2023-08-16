import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-10 bg-black text-white flex-between w-full py-3 sm:px-3">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text">Pretty Queen</p>
      </Link>
      <div className="footer--info w-full flex-between flex-col lg:flex-row gap-12">
        <div className="legal">
          <h4 className="footer_headings">Legal</h4>
          <Link href="/privacy">
            <p>Privacy Policy</p>
          </Link>
        </div>
        <div className="hours">
          <h4 className="footer_headings">Hours</h4>
          <p>Monday: Closed </p>
          <p>Tue-Sat: 8am-8pm </p>
          <p>Sunday: 10am-4pm</p>
        </div>
        <div className="location">
          <h4 className="footer_headings">Location</h4>
          <p>6129 Palisade Ave</p>
          <p>West New York, NJ</p>
          <p>07093</p>
        </div>
        <div className="contact">
          <h4 className="footer_headings">Contact</h4>
          <p>Instagram</p>
          <p>551-482-6634</p>
          <p>Email@email.com</p>
        </div>
      </div>
      <hr className="w-full bg-white" />
      <p>Copyright&copy; {year} Justin Diaz . All Rights Reserved. </p>
    </footer>
  );
}

export default Footer;
