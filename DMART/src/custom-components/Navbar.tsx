import {
  AlarmClock,
  Bell,
  ChevronDown,
  MapPin,
  ShoppingCart,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md ">
      {/* upper part */}
      <div className="flex items-center justify-between p-1">
        {/* 1st div */}
        <div className="flex items-center">
          <img src="/dmart.svg" className="w-[90px] p-2 mx-6" />

          <div className="flex flex-col items-center text-sm bg-[#F2F6FF] rounded-tl-2xl rounded-br-2xl ">
            <div className="flex items-center gap-3">
              <MapPin className="w-[15px] text-green-700" />
              <span className="text-xs font-bold text-gray-800">400011</span>
              <ChevronDown className="w-[15px]" />
            </div>
            <span className="text-xs text-gray-700 font-bold">Mumbai</span>
          </div>

          <div className="grid gap-1 mx-4">
            <p className="text-xs">
              Earliest <span className="font-bold text-green-700">Pick Up</span>{" "}
              available
            </p>
            <p className="flex items-center gap-1 text-xs">
              <AlarmClock className="text-red-700 w-[20px]" />
              <span className="text-xs font-bold">
                Today 9:00 AM - 12:00 PM
              </span>
            </p>
          </div>
        </div>

        {/* 2nd div */}

        <div className="flex items-center">
          <input
            type="search"
            name="search"
            id="search"
            className="border-2 border-gray-200 shadow-md px-3 py-2 font-thin text-xs rounded-sm w-[30vw]"
            placeholder="Search here ..."
          />
          <button className="uppercase font-bold text-white bg-green-700 px-3 py-2 rounded-sm text-xs shadow-md -inset-5ml-1">
            Search
          </button>
        </div>

        {/* 3rd div */}

        <div className="flex items-center gap-6 mr-6">
          <div className="grid hover:bg-gray-300 mr-6 p-1 rounded-tl-2xl rounded-br-2xl">
            <span className="text-gray-700 text-xs font-medium">
              Hello Suraj
            </span>
            <span className="text-xs font-semibold">My Account</span>
          </div>

          <Bell className="text-green-700 w-[20px]" />

          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute top-0 left-0 bg-yellow-400 text-[10px] px-[4px] rounded-full">8</span>
              <ShoppingCart className="text-green-700 w-[25px]" />
            </div>
            <span className="font-bold mt-2.5">₹550</span>
          </div>
        </div>
      </div>

      {/* lower part */}
    </nav>
  );
};

export default Navbar;
