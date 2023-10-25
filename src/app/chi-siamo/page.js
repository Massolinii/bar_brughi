import ChiSiamo from "@/components/chi-siamo/ChiSiamo";
import Contatti from "@/components/chi-siamo/Contatti";
import DoveSiamo from "@/components/chi-siamo/DoveSiamo";

export default function Page() {
  return (
    <div className="pt-10 mb:pt-20">
      <ChiSiamo />
      <DoveSiamo />
      <Contatti />
    </div>
  );
}
