import { useState } from "react";
import PhoneCard from "../../component/ui/PhoneCard";
import { useGetAllPhonesQuery } from "../../redux/api/api";
import { useSelector } from "react-redux";
import BagIcon from "../../component/icons/BagIcon";
import AddCart from "./AddCart";

const Latest = () => {
  const [showAll, setShowAll] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const [availableQuantity, setAvailableQuantity] = useState([]);
  const { data: phones } = useGetAllPhonesQuery(undefined);
  const selectedPhones = useSelector((store) => store.cart.products);

  const displayedPhones = showAll ? phones : phones?.slice(0, 6);

  return (
    <>
      <div className="relative">
        <div className="fixed top-1/3 right-0 bg-gray-200 shadow-md rounded-s-md p-3 z-20">
          <button
            onClick={() => setOpenModal(true)}
            className="flex flex-col items-center"
          >
            <BagIcon />
            <h3 className="">{selectedPhones?.length} Items</h3>
          </button>
          <div className="absolute -top-24 right-10">
            <AddCart
              openModal={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>
        </div>
      </div>
      <div className="width">
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-3">Latest Phones </h2>
          <p className="w-[92%] md:w-5/12 mx-auto ">
            Capture every moment with precision using the triple-lens rear
            camera system a featuring enhanced photography and 4K video
            recording capabilities. With a sleek of the ergonomic design and
            advanced security features such as facial recognition and display
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {displayedPhones?.map((phone, index) => (
            <PhoneCard phone={phone} key={index} />
          ))}
        </div>

        <div className="text-center mt-6">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="bg-primary transition-all duration-300rounded px-8 py-3 rounded-md font-medium text-lg text-white"
            >
              View All Product
            </button>
          ) : (
            <span className="text-lg font-medium">
              No more content here. Please show
              <span className="text-primary text-xl">another</span> products
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Latest;
