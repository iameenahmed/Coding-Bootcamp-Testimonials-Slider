import iconNext from "../assets/icon-next.svg";
import iconPrevious from "../assets/icon-prev.svg";

// eslint-disable-next-line react/prop-types
const Btn = ({ goToNextSlide, goToPrevSlide }) => {
  return (
    <div className="z-20 flex h-10 w-20 overflow-hidden rounded-full bg-white drop-shadow-sm md:bottom-[21vh] md:right-[33vw] lg:h-14 lg:w-28">
      <button
        aria-label="next"
        onClick={goToNextSlide}
        className="inline-flex basis-1/2 items-center justify-center transition-colors duration-300 hover:bg-gray-200"
      >
        <img src={iconPrevious} alt="left arrow icon" />
      </button>
      <button
        aria-label="previous"
        onClick={goToPrevSlide}
        className="inline-flex basis-1/2 items-center justify-center transition-colors duration-300  hover:bg-gray-200"
      >
        <img src={iconNext} alt="right arrow icon" />
      </button>
    </div>
  );
};
export default Btn;
