import testimonials from "./testimonials";
import Testimonial from "./Components/Testimonial";
import { useState } from "react";

const App = () => {
  const [current, setCurrent] = useState(0);

  const goToNextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const goToPrevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <>
      <header className="sr-only">
        <h1>Testimonials</h1>
      </header>
      <main className="mx-auto min-h-screen w-full bg-Curve bg-contain bg-left-bottom bg-no-repeat p-6 font-Inter md:bg-auto md:p-40 md:pr-[72px] md:pt-12">
        {testimonials.map((testimonial) => (
          <section
            key={testimonial.id}
            className={`animate-fadeIn ${
              current === testimonial.id - 1 ? "block" : "hidden"
            }`}
          >
            <Testimonial
              {...testimonial}
              goToNextSlide={goToNextSlide}
              goToPrevSlide={goToPrevSlide}
            />
          </section>
        ))}
      </main>
    </>
  );
};

export default App;
