import SVGIcons from "@/assets/SvgIcons";

export default function NavbarAddress() {
  return (
    <div className="bg-black w-full">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <a
            href="https://www.instagram.com/brughi_bar/"
            className="mr-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGIcons.Instagram />
          </a>
          <a href="mailto:brughibarsas@gmail.com" className="mr-5">
            <SVGIcons.Mail />
          </a>
          <a href="tel:+393450913688">
            <SVGIcons.Phone />
          </a>
        </div>
        <div className="flex items-center text-sm">
          <p className="m-0">Via Brughiera 18, Bareggio (MI)</p>
        </div>
      </div>
    </div>
  );
}
