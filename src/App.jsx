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
      <main className="min-h-screen w-full bg-Curve bg-contain bg-left-bottom bg-no-repeat p-6 font-Inter md:bg-auto xl:px-[74px] xl:pt-12">
        {testimonials.map((testimonial) => (
          <section
            key={testimonial.id}
            className={`mx-auto animate-fadeIn min-[440px]:w-[25rem] lg:w-full ${
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
