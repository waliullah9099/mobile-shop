import image1 from "../../assets/Images/category/Rectangle 24.png";
import image2 from "../../assets/Images/category/Rectangle 25.png";
import image3 from "../../assets/Images/category/Rectangle 26.png";
import image4 from "../../assets/Images/category/Rectangle 27.png";
import image5 from "../../assets/Images/category/Rectangle 28.png";
import image6 from "../../assets/Images/category/Rectangle 29.png";
import RightArrow from "../../component/icons/RightArrow";

const Category = () => {
  return (
    <div className="width">
      <h1 className="text-center font-semibold text-2xl">Popular Category</h1>

      {/* All category card */}
      <div className="grid grid-cols-12 gap-8 mt-8">
        {/* two columns card in first row  */}
        <div className="col-span-12 lg:col-span-4 ">
          {/* first column card in first row  */}
          <div className="group bg-slate-700 px-8 pb:12 py-[60px] pb-8 pl-[66px] md:pl-8 rounded-md mb-3 relative">
            <div className="absolute top-1 right-3 group-hover:-rotate-45 card-hover group-hover:bg-primary group-hover:rounded-full p-2">
              {/* import svg icon */}
              <RightArrow />
            </div>
            <img className="" src={image1} alt="Category Image" />
            <h2 className="font-semibold text-2xl text-white pt-3 text-center">
              Smart Phones
            </h2>
          </div>
          {/* second column card in first row  */}
          <div className="group bg-blue-400 py-8 px-8 pl-14 md:pl-8 pb-4 md:pb-[22px] rounded-md relative">
            <div className="absolute top-0 right-2 group-hover:-rotate-45 card-hover group-hover:bg-primary group-hover:rounded-full p-2">
              {/* import svg icon */}
              <RightArrow />
            </div>
            <img className="" src={image2} alt="Category Image" />
            <h2 className="font-semibold text-2xl text-white pt-3 md:pt-4 text-center">
              Tablet
            </h2>
          </div>
        </div>

        {/* two columns card in second row  */}
        <div className="col-span-12 lg:col-span-4">
          {/* two rows in first column card in second row  */}
          <div className="grid grid-cols-2 gap-5">
            <div className="group bg-blue-400 rounded-md px-5 pt-8 pb-4 pl-[30px] md:pl-[22px]  relative">
              <div className="absolute top-0 right-1 group-hover:-rotate-45 card-hover group-hover:bg-primary group-hover:rounded-full p-2">
                <RightArrow />
              </div>
              <img className="" src={image5} alt="Category Image" />
              <h2 className="font-semibold text-2xl text-white pt-2 text-center">
                Ear Buds
              </h2>
            </div>
            <div className="group bg-primary rounded-md pl-[30px] md:pl-[22px] px-5 pt-8 relative">
              <div className="absolute top-0 right-1 group-hover:-rotate-45 card-hover group-hover:bg-primary group-hover:rounded-full p-2">
                <RightArrow />
              </div>
              <img className="" src={image6} alt="Category Image" />
              <h2 className="font-semibold text-2xl text-white pt-2 text-center">
                Charger
              </h2>
            </div>
          </div>

          <div className="group bg-gray-400 pl-14 md:pl-9 w-full mt-5 px-8 py-12 rounded-md relative">
            <div className="absolute top-2 right-3 group-hover:-rotate-45 card-hover group-hover:bg-primary group-hover:rounded-full p-2">
              <RightArrow />
            </div>
            <img className="" src={image3} alt="Category Image" />
            <h2 className="font-semibold text-2xl text-white pt-2 text-center">
              Popular Brands
            </h2>
          </div>
        </div>
        {/* one column card in third row  */}
        <div className="group col-span-12 lg:col-span-4 bg-blue-600 pt-12 pl-7  md:pl-6 rounded-md relative">
          <div className="absolute top-2 right-3 group-hover:-rotate-45 card-hover group-hover:bg-primary group-hover:rounded-full p-2">
            <RightArrow />
          </div>
          <img className="w-[94%]" src={image4} alt="Category Image" />
          <h1 className="font-semibold text-2xl text-white pt-3 pl-[35%] pb-5 md:pb-0 md:pl-28">
            Camera
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
