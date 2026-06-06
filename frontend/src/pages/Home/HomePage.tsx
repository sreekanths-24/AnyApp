import PromptBar from "../../components/prompt/PromptBar";
import HeroSection from "../../components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-black text-white flex flex-col">
      <HeroSection />
      <PromptBar />
    </div>
  );
}