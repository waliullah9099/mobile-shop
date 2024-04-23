/* eslint-disable no-undef */
import { useDispatch, useSelector } from "react-redux";
import BagIcon from "../../component/icons/BagIcon";
import { removeFromCard, updateQuantity } from "../../redux/features/cartSlice";
import CartComponent from "../../component/ui/CartComponent";

// eslint-disable-next-line react/prop-types
const AddCart = ({ openModal, onClose }) => {
  const dispatch = useDispatch();
  const phones = useSelector((store) => store.cart.products);
  if (!openModal) return null;

  const totalPrice = phones.reduce(
    (total, phone) => total + phone.price * phone.quantity,
    0
  );

  const handleQuantity = (type, id) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };
  const handleRemove = (id) => {
    dispatch(removeFromCard({ id }));
  };

  return (
    <div className=" w-[480px] -mr-10 bg-white shadow-2xl rounded-s-md p-6 pb-3">
      <div className="flex justify-between my-2 pb-6">
        <div className="flex gap-6 items-center ml-1">
          <BagIcon />
          <h3 className="font-semibold text-xl">{phones?.length} Items</h3>
        </div>
        <button
          onClick={onClose}
          className="bg-[#FF5F5F] py-1 px-3 text-white rounded"
        >
          X Close
        </button>
      </div>
      <div className="  max-h-[320px] overflow-x-scroll">
        {phones?.map((phone) => (
          <CartComponent
            key={phone.id}
            phone={phone}
            handleQuantity={handleQuantity}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        <button className="px-10 py-2 text-white bg-[#285BDB] rounded border border-primary">
          Place Order
        </button>
        <button className="px-14 text-2xl rounded border border-[#285BDB]">
          $ {totalPrice | 0}
        </button>
      </div>
    </div>
  );
};

export default AddCart;
