import AddIcon from "../icons/AddIcon";
import PlusIcon from "../icons/PlusIcon";
import HeartIcon from "../icons/HeartIcon";

import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";

/* eslint-disable react/prop-types */
const PhoneCard = ({ phone }) => {
  const dispatch = useDispatch();
  const selectedPhones = useSelector((store) => store.cart.products);

  if (selectedPhones !== undefined) {
    console.log(selectedPhones);
  }

  const handleAddToCart = (phone) => {
    dispatch(addToCart(phone));
  };
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "hsla(32, 100%, 50%, 1)",
  };
  return (
    <div className="group p-5 hover:border- hover:shadow-2xl rounded-md px-8 py-y relative h-[485px] md:h-[470px]">
      <div className="space-y-5 absolute right-5 top-3 hidden group-hover:block transition-all delay-200 duration-500 ease-in-out">
        <PlusIcon />
        <HeartIcon />
      </div>
      <img
        className="mx-auto group-hover:scale-110 transition-all ease-in-out duration-300 h-[240px]"
        src={phone?.image}
        alt="phones image"
      />
      <div className="text-center space-y-3 mt-2">
        <h2 className="font-medium text-2xl">
          {phone?.title} ({phone?.ram})
        </h2>
        <div className="flex gap-4 w-1/2 mx-auto items-center justify-center">
          <h3 className="text-primary font-bold text-lg">
            <span className="">$</span>
            {phone?.price}
          </h3>
          <del className="text-gray-400 ">
            <h3>$ {phone?.old_price}</h3>
          </del>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2">
              <Rating
                style={{ maxWidth: 140 }}
                className="space-x-[6px]"
                itemStyles={myStyles}
                value={phone?.rating}
                readOnly
              />
              <span className="text-gray-400">({phone?.totalRating})</span>
            </div>
          </div>
          <p className="text-gray-400">Qty: {phone.available} pcs</p>
        </div>
        <button
          onClick={() => handleAddToCart(phone)}
          className="absolute bottom-5 left-6 w-[88%] mx-auto group-hover:bg-primary transition-all duration-300 bg-blue-300 rounded py-3 font-semibold text-xl text-white flex justify-center gap-2 mb-0"
        >
          <AddIcon />
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default PhoneCard;
