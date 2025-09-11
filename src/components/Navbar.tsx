//lucide icons
import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-accent1 p-2">
      <h1 className="text-white text-[28px] font-medium mb-2">
        Ricardo Barrientos
      </h1>
      <h2 className="text-gray-200 text-lg">Full-Stack Developer</h2>
      <div className="flex flex-row gap-1">
        <MapPin className="text-white h-4 w-4" />
        <h2 className="text-gray-200 text-[14px]">Santa Cruz, Bolivia</h2>
      </div>
    </div>
  );
};

export default Navbar;
