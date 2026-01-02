const RestaurantDetailsCard = () => {
  return (
    <div className="full-width flex flex-col gap-3 mb-15 px-4 py-8 rounded-lg bg-green-50 shadow-lg shadow-gray-500">
      <h3 className="font-bold text-md">
        ✳️ 4.4 (5.2K+ ratings) <span className="text-gray-500">|</span> ₹350 for
        two
      </h3>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-px h-6 bg-gray-500"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <h4 className="text-black-500">
            Outlet <span className="text-gray-500">Gaur City</span>
          </h4>
          <h4 className="text-black-500">25-30 mins</h4>
        </div>
      </div>
    </div>
  );
};
export default RestaurantDetailsCard;
