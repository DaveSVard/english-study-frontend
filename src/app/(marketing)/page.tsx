import { Hero, Stats, Testimonials, TestimonialsCarousel } from "./components";

export default function Homepage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Stats />
      <Testimonials />
      <TestimonialsCarousel />
    </div>
  );
}
