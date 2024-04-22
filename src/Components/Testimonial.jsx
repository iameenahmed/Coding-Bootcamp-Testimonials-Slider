import Btn from "./Btn";

/* eslint-disable react/prop-types */
const Testimonial = ({
  name,
  role,
  quote,
  image,
  goToNextSlide,
  goToPrevSlide,
}) => {
  return (
    <div className="testimonial grid w-full gap-y-8 bg-Pattern bg-top bg-no-repeat text-center lg:grid-cols-2 lg:bg-contain lg:bg-right lg:px-[90px] lg:pb-[55px] lg:pt-[64px] lg:text-start">
      <blockquote className="grid gap-y-6 lg:place-content-center lg:gap-y-10">
        <p className="quote z-10 mt-4 bg-Quotes bg-auto bg-no-repeat pt-6 text-xl font-light text-DarkBlue lg:-mr-20 lg:pt-16 xl:text-[2rem] xl:leading-[1.4em]">
          &#8220; {quote} &#8221;
        </p>
        <footer>
          <cite className="flex flex-col font-bold not-italic lg:flex-row lg:gap-2 lg:text-xl">
            {name}
            <span className="text-GrayishBlue">{role}</span>
          </cite>
        </footer>
      </blockquote>
      <div className="relative row-start-1 flex justify-end p-8 lg:row-start-auto lg:p-0">
        <img
          src={image}
          alt="profile photo"
          className="rounded-lg drop-shadow-2xl"
        />
        <div className="absolute bottom-3 left-[40%] lg:-bottom-7 lg:left-20">
          <Btn goToNextSlide={goToNextSlide} goToPrevSlide={goToPrevSlide} />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
