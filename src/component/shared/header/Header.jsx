import { useState } from "react";
import logo from "../../../assets/Images/Screenshot_21.png";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const phones = useSelector((store) => store.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between h-24 w-11/12 mx-auto">
      <div className="text-white">
        <img className="w-52 text-white bg-red-600" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-6">
        <ul
          className={`nav-links duration-200 absolute flex md:static ${
            isMenuOpen
              ? "top-[14%] ml-2 pb-2 rounded bg-white w-1/2 pl-4 pr-6 space-y-4"
              : "top-[-999999px]"
          } left-0 flex-col md:flex-row justify-between md:items-center md:space-x-8 text-xl z-20`}
        >
          <li className="hover-border menuItem">
            <a href="/"> Home </a>
          </li>
          <li className="hover-border menuItem">
            <a href="/"> Latest Phones </a>
          </li>
          <li className="hover-border menuItem">
            <a href="/"> Top Phones </a>
          </li>
          <li className="hover-border menuItem">
            <a href="/"> News </a>
          </li>
          <li className="hover-border menuItem cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </li>
          <li className="hover-border menuItem relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <span className="absolute size-6 text-sm rounded-full bg-primary text-white -top-2 left-4 md:-top-[10px] md:-right-3 flex items-center justify-center">
              {phones?.length}
            </span>
          </li>
          <li>
            <button className="px-4 py-2 bg-primary rounded-md text-white flex items-center gap-1">
              <span className="text-3xl mt-1">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              Logout
            </button>
          </li>
        </ul>
        <span
          className="text-3xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
        </span>
      </div>
    </nav>
  );
};

export default Header;
