//lucide icons
import { Github, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-accent1 p-2">
      <h3 className="text-[16px] text-white">Contact Info</h3>
      <div className="p-2">
        <a
          href={`https://wa.me/${+59175577695}`}
          className="text-white flex flex-row gap-2"
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm">+591-75577695</span>
        </a>
        <a
          href={"www.linkedin.com/in/ricardo-barrientos-montalvan-3b530827b"}
          className="text-white flex flex-row gap-2"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm">
            ricardo-barrientos-montalvan-3b530827b
          </span>
        </a>
        <a
          href={"https://github.com/ricbm710"}
          className="text-white flex flex-row gap-2"
        >
          <Github className="w-4 h-4" />
          <span className="text-sm">ricbm710</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
