import { Hero, Stats, Testimonials, TestimonialsCarousel, FAQ, Features } from "./components";

export default function Homepage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <TestimonialsCarousel />
      <FAQ />
    </div>
  );
}
