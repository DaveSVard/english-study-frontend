import { Hero, Stats, Testimonials } from "./components";

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Testimonials />
    </div>
  );
}
