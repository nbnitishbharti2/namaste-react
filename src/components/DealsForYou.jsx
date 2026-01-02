import { useRef } from "react";
import { deals } from "../utils/deals";

const DealsForYou = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl text-black-500">Deals for you</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="min-w-[300px] flex gap-4 p-4 border border-gray-200 rounded-2xl items-center hover:shadow-md transition-shadow bg-white shrink-0"
          >
            <img width={80} src={deal.image} alt="deal" />
            <div className="flex flex-col">
              <h3 className="font-bold text-lg text-gray-800">{deal.title}</h3>
              <p className="text-gray-500 text-sm font-semibold uppercase">
                {deal.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsForYou;
