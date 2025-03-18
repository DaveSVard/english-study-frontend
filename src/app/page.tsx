import { Homepage } from "./homepage";
import { Footer } from "./homepage/layouts/Footer";
import { Header } from "./homepage/layouts/Header";

export default function Home() {
  return (
    <div className="h-[2000px]">
      <Header />
      <Homepage />
      {/* <Footer /> */}
    </div>
  );
}
