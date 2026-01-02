import restaurantLogo from "url:../../public/restaurant.jpg";
const MenuItemsWithCategory = ({ category, resInfo }) => {
  return (
    <div className="flex flex-col gap-5 pb-5 mb-5 rounded-lg bg-gray-200">
      <div className="w-full mx-auto">
        <details
          open={category === "Recommended"}
          className="group border rounded-lg border-gray-200 bg-white shadow-sm"
        >
          <summary className="flex justify-between items-center p-4 cursor-pointer focus:outline-none">
            <span className="font-bold text-gray-800">
              {category} ({resInfo.length})
            </span>
            <svg
              className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="www.w3.org"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>
          <div className="px-4 pb-8 bg-gray-50 border-t border-gray-200">
            {resInfo.map((item) => (
              <div
                className="flex justify-between border-b gap-15 py-10  border-gray-200"
                key={item.itemID}
              >
                <div className="flex flex-col gap-2">
                  <span>🟩</span>
                  <h2 className="font-bold text-black-900 text-lg">
                    {item?.itemName}
                  </h2>
                  <p className="text-black-900 font-semibold">
                    ₹{item?.itemPrice}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {item?.itemDescription}
                  </p>
                </div>
                <div className="relative">
                  <img
                    className="w-40 h-40 object-cover rounded-xl"
                    src={restaurantLogo}
                    alt={item?.itemName}
                  />
                  <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-green-600 shadow-md font-bold text-lg py-2 px-8 rounded-lg border border-gray-300 uppercase hover:shadow-lg transition-all w-32 hover:bg-gray-300 cursor-pointer">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};
export default MenuItemsWithCategory;
