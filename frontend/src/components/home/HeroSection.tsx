import { BRAND } from "../../constants/brand";
import logo from "../../assets/images/logo.png";

export default function HeroSection() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <img src={logo} alt="AnyApp" className="w-28 h-28"/>

      <h1 className="text-5xl font-bold mb-4">
        {BRAND.name}
      </h1>

      <p className="text-gray-400">
        {BRAND.slogan}
      </p>
    </div>
  );
}