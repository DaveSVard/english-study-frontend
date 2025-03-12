import { Homepage } from "./homepage";
import { Header } from "./homepage/layouts/Header";
import { Footer } from "./homepage/layouts/Footer";

export default function Home() {
  return (
    <div className="h-[2000px]">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
