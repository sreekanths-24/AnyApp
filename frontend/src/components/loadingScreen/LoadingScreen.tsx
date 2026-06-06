import { BRAND } from "../../constants/brand";
import logo from "../../assets/images/logo.png";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center">
      <img
        src={logo}
        alt="AnyApp"
        className="w-28 h-28"
      />

      <h1 className="text-5xl font-bold mb-4">
        { BRAND.name }
      </h1>

      <p className="text-gray-400 mb-8">
        { BRAND.slogan }
      </p>

      <div className="w-40 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full bg-white animate-pulse" />
      </div>
    </div>
  );
}