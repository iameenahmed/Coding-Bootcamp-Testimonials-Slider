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
    <div className="grid w-full gap-y-8 text-center md:grid-cols-2 md:text-start">
      <blockquote className="grid gap-y-6 md:place-content-center md:gap-y-11">
        <p className="quote z-10 bg-Quotes bg-auto bg-no-repeat pt-6 text-xl font-light text-DarkBlue md:-mr-16 md:pt-16 lg:text-4xl">
          &#8220; {quote} &#8221;
        </p>
        <footer>
          <cite className="flex flex-col font-bold not-italic md:flex-row md:gap-2 md:text-xl">
            {name}
            <span className="font-semibold text-GrayishBlue">{role}</span>
          </cite>
        </footer>
      </blockquote>
      <div className="relative row-start-1 flex aspect-square items-center justify-center bg-Pattern bg-contain bg-center bg-no-repeat px-2 py-8 md:row-start-auto md:px-6 md:py-12 ">
        <img
          className="aspect-square w-4/5 rounded-md drop-shadow-2xl md:w-10/12"
          src={image}
          alt="profile photo"
        />
        <div className="absolute bottom-3 left-28 md:bottom-6">
          <Btn goToNextSlide={goToNextSlide} goToPrevSlide={goToPrevSlide} />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
