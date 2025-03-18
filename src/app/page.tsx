import { Homepage } from "./homepage";
import { Footer } from "./homepage/layouts/Footer";
import { Header } from "./homepage/layouts/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
