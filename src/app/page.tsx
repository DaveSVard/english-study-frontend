import { Homepage } from "./homepage";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

export default function Home() {
  return (
    <div className="h-[2000px]">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
