import InstagramIcon from "@/assets/InstagramIcon";
import MailIcon from "@/assets/MailIcon";
import PhoneIcon from "@/assets/PhoneIcon";

export default function NavbarAddress() {
  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <a
            href="https://www.instagram.com/brughi_bar/"
            className="mr-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a href="mailto:example@brughi.com" className="mr-5">
            <MailIcon />
          </a>
          <a href="tel:+393271666666">
            <PhoneIcon />
          </a>
        </div>
        <div className="flex items-center text-sm">
          <p className="m-0">Via Brughiera 18, Bareggio (MI)</p>
        </div>
      </div>
    </div>
  );
}
