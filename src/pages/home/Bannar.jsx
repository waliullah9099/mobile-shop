import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SwiperPreBtn from "../../component/ui/SwiperPreBtn";
import SwiperNextBtn from "../../component/ui/SwiperNextBtn";
import image from "../../assets/Images/bannar-2.png";
import image2 from "../../assets/Images/bannar.png";

const Bannar = () => {
  return (
    <div className="bg-blue-400">
      <div className="width mt-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="relative h-[70vh]">
            {/* left side previous and next button  */}
            <div className="absolute left-0 top-[45%] space-y-1">
              <SwiperPreBtn />
              <SwiperNextBtn />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className=" text-white px-4 py-8 flex flex-col justify-center ml-0 md:ml-20 gap-10 items-center">
                <div className="text-center border-2 h-20 mt-6 rounded px-6 relative w-[360px]">
                  <div className="absolute -top-9">
                    <div className=" px-6 py-3 rounded font-bold bg-gradient-to-r from-[#5908FB] to-[#9728E9] flex items-center gap-3">
                      <span className="leading-5">
                        UP <br /> TO
                      </span>
                      <h1 className="text-3xl text-yellow-300">
                        TK. 1,25,500 OFF
                      </h1>
                    </div>
                  </div>
                  <p className="text-2xl tracking-wide absolute -bottom-3 right-[28px] bg-blue-400 px-[12px] font-medium">
                    on Flagship Smartphone
                  </p>
                </div>

                <div className="border-2 rounded px-8 relative text-center">
                  <h1 className="font-bold text-3xl absolute -top-5 right-14 bg-blue-400 px-2">
                    0% EMI
                  </h1>
                  <p className="text-2xl pb-1 pt-3"> Facility Available</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4 md:h-[70vh]">
                <img className="md:h-[64vh] " src={image2} alt="bannar image" />
              </div>
            </div>
            {/* right side previous and next button  */}
            <div className="absolute right-0 top-[45%] space-y-1">
              <SwiperNextBtn />
              <SwiperPreBtn />
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[70vh]">
            {/* left side previous and next button  */}
            <div className="absolute left-0 top-[45%] space-y-1">
              <SwiperPreBtn />
              <SwiperNextBtn />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className=" text-white px-4 py-8 flex flex-col justify-center ml-0 md:ml-20 gap-10 items-center">
                <div className="text-center border-2 h-20 mt-6 rounded px-6 relative w-[360px]">
                  <div className="absolute -top-9">
                    <div className=" px-6 py-3 rounded font-bold bg-gradient-to-r from-[#5908FB] to-[#9728E9] flex items-center gap-3">
                      <span className="leading-5">
                        UP <br /> TO
                      </span>
                      <h1 className="text-3xl text-yellow-300">
                        TK. 1,01,890 OFF
                      </h1>
                    </div>
                  </div>
                  <p className="text-2xl tracking-wide absolute -bottom-3 right-[28px] bg-blue-400 px-[12px] font-medium">
                    on Flagship Smartphone
                  </p>
                </div>

                <div className="border-2 rounded px-8 relative text-center">
                  <h1 className="font-bold text-3xl absolute -top-5 right-14 bg-blue-400 px-2">
                    0% EMI
                  </h1>
                  <p className="text-2xl pb-1 pt-3"> Facility Available</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4 md:h-[70vh]">
                <img className="md:h-[64vh] " src={image} alt="bannar image" />
              </div>
            </div>
            {/* right side previous and next button  */}
            <div className="absolute right-0 top-[45%] space-y-1">
              <SwiperNextBtn />
              <SwiperPreBtn />
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[70vh]">
            {/* left side previous and next button  */}
            <div className="absolute left-0 top-[45%] space-y-1">
              <SwiperPreBtn />
              <SwiperNextBtn />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className=" text-white px-4 py-8 flex flex-col justify-center ml-0 md:ml-20 gap-10 items-center">
                <div className="text-center border-2 h-20 mt-6 rounded px-6 relative w-[360px]">
                  <div className="absolute -top-9">
                    <div className=" px-6 py-3 rounded font-bold bg-gradient-to-r from-[#5908FB] to-[#9728E9] flex items-center gap-3">
                      <span className="leading-5">
                        UP <br /> TO
                      </span>
                      <h1 className="text-3xl text-yellow-300">
                        TK. 88,000 OFF
                      </h1>
                    </div>
                  </div>
                  <p className="text-2xl tracking-wide absolute -bottom-3 right-[28px] bg-blue-400 px-[12px] font-medium">
                    on Flagship Smartphone
                  </p>
                </div>

                <div className="border-2 rounded px-8 relative text-center">
                  <h1 className="font-bold text-3xl absolute -top-5 right-14 bg-blue-400 px-2">
                    0% EMI
                  </h1>
                  <p className="text-2xl pb-1 pt-3"> Facility Available</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4 md:h-[70vh]">
                <img className="md:h-[64vh] " src={image2} alt="bannar image" />
              </div>
            </div>
            {/* right side previous and next button  */}
            <div className="absolute right-0 top-[45%] space-y-1">
              <SwiperNextBtn />
              <SwiperPreBtn />
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative h-[70vh]">
            {/* left side previous and next button  */}
            <div className="absolute left-0 top-[45%] space-y-1">
              <SwiperPreBtn />
              <SwiperNextBtn />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className=" text-white px-4 py-8 flex flex-col justify-center ml-0 md:ml-20 gap-10 items-center">
                <div className="text-center border-2 h-20 mt-6 rounded px-6 relative w-[360px]">
                  <div className="absolute -top-9">
                    <div className=" px-6 py-3 rounded font-bold bg-gradient-to-r from-[#5908FB] to-[#9728E9] flex items-center gap-3">
                      <span className="leading-5">
                        UP <br /> TO
                      </span>
                      <h1 className="text-3xl text-yellow-300">
                        TK. 25,500 OFF
                      </h1>
                    </div>
                  </div>
                  <p className="text-2xl tracking-wide absolute -bottom-3 right-[28px] bg-blue-400 px-[12px] font-medium">
                    on Flagship Smartphone
                  </p>
                </div>

                <div className="border-2 rounded px-8 relative text-center">
                  <h1 className="font-bold text-3xl absolute -top-5 right-14 bg-blue-400 px-2">
                    0% EMI
                  </h1>
                  <p className="text-2xl pb-1 pt-3"> Facility Available</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4 md:h-[70vh]">
                <img className="md:h-[64vh] " src={image} alt="bannar image" />
              </div>
            </div>
            {/* right side previous and next button  */}
            <div className="absolute right-0 top-[45%] space-y-1">
              <SwiperNextBtn />
              <SwiperPreBtn />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Bannar;
