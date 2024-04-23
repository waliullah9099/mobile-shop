/* eslint-disable react/prop-types */
const CartComponent = ({ phone, handleRemove, handleQuantity }) => {
  return (
    <div key={phone.id} className="flex mb-2 pb-2 border-b border-gray-300">
      <div className="flex flex-col text-center mr-3 w-8 rounded-md">
        <button
          onClick={() => {
            handleQuantity("increment", phone.id);
          }}
          className="bg-primary border-primary rounded-t-md text-white text-xl "
        >
          +
        </button>
        <h3 className="text-gray-500 border-r-2 border-l-2 border-[#00000080] font-semibold text-2xl">
          {phone.quantity}
        </h3>
        <button
          onClick={() => {
            handleQuantity("decrement", phone.id);
          }}
          className="bg-primary border-primary -pt-4 rounded-b-md text-white text-xl"
        >
          -
        </button>
      </div>
      <div className="flex items-center gap-5 flex-[1] ">
        <img
          className="w-16 h-16 border shadow rounded bg-white"
          src={phone.image}
          alt="phone image"
        />

        <div>
          <h2 className="font-medium mb-1">{phone.title}</h2>
          <p className="">
            ({phone.ram}/{phone.rom} GB)
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-primary font-semibold text-lg">
            $ {Number(phone.price) * Number(phone.quantity)}
          </h1>
          <span className="text-sm">
            Avb. Qnt. {phone.available - phone.quantity} Pcs
          </span>
        </div>
        <button
          onClick={() => {
            handleRemove(phone.id);
          }}
          className="text-[#FF5F5F] font-semibold text-lg transition-all duration-150 size-8 rounded-full hover:bg-[#FF5F5F] hover:text-white"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
