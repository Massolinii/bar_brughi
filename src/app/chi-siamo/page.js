import ChiSiamo from "@/components/ChiSiamo";
import Contatti from "@/components/Contatti";
import DoveSiamo from "@/components/DoveSiamo";

export default function Page() {
  return (
    <div className="pt-10 mb:pt-20">
      <ChiSiamo />
      <DoveSiamo />
      <Contatti />
    </div>
  );
}
