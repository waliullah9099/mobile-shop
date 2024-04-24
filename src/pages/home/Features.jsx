import PhoneIcon from "../../component/icons/PhoneIcon";
import RoundIcon from "../../component/icons/RoundIcon";
import UpArrow from "../../component/icons/UpArrow";

const Features = () => {
  return (
    <div className="width">
      {/* simple title and description  */}
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-3">Our Services </h2>
        <p className="w-2/3 mx-auto ">
          Our services encompass everything from expert product advice and
          personal recommend to seamless purchasing experiences, ensuring that
          you find the perfect device.
        </p>
      </div>
      {/* show 3 features in card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {/* first feature card  */}
        <div className="group cursor-pointer hover:scale-105 transition-all relative delay-75 ease-in-out duration-300 ">
          <div className="size-16 flex items-center justify-center rotate-45 left-[41%] -top-8 bg-white group-hover:bg-primary transition-all duration-300 ease-in-out absolute border-2 border-gray-500 hover:border-2 group-hover:border-primary group-hover:text-white rounded-[5px] p-5">
            {/* icons and icon box rotate 45 deg  */}
            <span className="-rotate-45 text-3xl text-primary group-hover:text-white transition-all duration-300 ease-in-out">
              <PhoneIcon />
            </span>
          </div>
          {/* main content of the feature card  */}
          <div className="h-60 text-center border-2 border-gray-500 hover:border-2 group-hover:border-primary rounded-[5px] p-6 pt-[70px]">
            <h1 className="font-medium text-xl mb-3">Latest Smart Phones</h1>
            <p className="text-">
              Our services encompass every thing from expert product advice and
              recommendation personal to seamless purchasing experiences. we
              provide extensive selection smartphones.
            </p>
          </div>
        </div>

        {/* second feature card  */}
        <div className="group cursor-pointer hover:scale-105  relative card-hover">
          <div className="size-16 flex items-center justify-center rotate-45 left-[41%] -top-8 bg-white group-hover:bg-primary transition-all duration-300 ease-in-out absolute border-2 border-gray-500 hover:border-2 group-hover:border-primary group-hover:text-white rounded-[5px] p-5">
            {/* icons and icon box rotate 45 deg  */}
            <span className="-rotate-45 text-4xl text-primary group-hover:text-white transition-all duration-300 ease-in-out">
              <UpArrow />
            </span>
          </div>

          {/* main content of the feature card  */}
          <div className="h-60 text-center border-2 border-gray-500 hover:border-2 group-hover:border-primary rounded-[5px] p-6 pt-[70px]">
            <h1 className="font-medium text-xl mb-2">Latest Smart Phones</h1>
            <p className="text-">
              Our services encompass every thing from expert product advice and
              recommendation personal to seamless purchasing experiences.
            </p>
          </div>
        </div>
        {/* third feature card  */}
        <div className="group cursor-pointer hover:scale-105  relative card-hover ">
          <div className="size-16 flex items-center justify-center rotate-45 left-[41%] -top-8 bg-white group-hover:bg-primary transition-all duration-300 ease-in-out absolute border-2 border-gray-500 hover:border-2 group-hover:border-primary group-hover:text-white rounded-[5px] p-5">
            {/* icons and icon box rotate 45 deg  */}
            <span className="-rotate-45 text-3xl text-primary group-hover:text-white card-hover">
              <RoundIcon />
            </span>
          </div>
          {/* main content of the feature card  */}
          <div className="h-60 text-center border-2 border-gray-500 hover:border-2 group-hover:border-primary rounded-[5px] p-6 pt-[70px]">
            <h1 className="font-medium text-xl mb-2">Latest Smart Phones</h1>
            <p className="text-">
              Our services encompass every thing from expert product advice and
              recommendation personal to seamless purchasing experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
