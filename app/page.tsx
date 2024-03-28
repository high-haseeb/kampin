import FiberContainer from "@/components/FiberContainer";
import Logo from "@/components/Logo";
import ProgressBar from "@/components/ProgressBar";
import ProductConfig from "@/components/tabs/Product";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col overflow-hidden">
      <Logo/>
      <div className="flex flex-grow w-screen">
        <FiberContainer/>
        <ProductConfig />
      </div>
      <ProgressBar />
    </main>
  );
}
