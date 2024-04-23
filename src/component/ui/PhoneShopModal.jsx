import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const PhoneShopModal = ({ visible, onClose }) => {
  const phones = useSelector((store) => store.cart.products);
  if (!visible) return null;
  const handleOnClose = () => {
    // if (e.target.id === "modalContainer") {
    // }
    onClose();
  };

  return (
    <div onClick={handleOnClose} className="top-6" id="modalContainer">
      {phones.map((phone) => (
        <p key={phone.id}>{phone.title}</p>
      ))}
      <div className="h-24 w-12 bg-red-400"></div>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default PhoneShopModal;
