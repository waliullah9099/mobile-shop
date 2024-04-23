import { useSwiper } from "swiper/react";

const SwiperNextBtn = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => swiper.slideNext()}
        className="text-white p-[6px] rounded-sm bg-primary hover:bg-blue-500 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SwiperNextBtn;
