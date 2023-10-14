import InstagramIcon from "@/assets/InstagramIcon";
import MailIcon from "@/assets/MailIcon";
import PhoneIcon from "@/assets/PhoneIcon";

export default function NavbarAddress() {
  return (
    <div className="bg-gray-600 text-white w-full">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <a className="mr-5">
            <InstagramIcon />
          </a>
          <a className="mr-5">
            <MailIcon />
          </a>
          <a>
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
