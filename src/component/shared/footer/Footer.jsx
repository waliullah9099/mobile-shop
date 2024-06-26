const Footer = () => {
  // get the current year by using JS.
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pb-[330px] md:pb-0 text-white bg-black">
      <h2 className="text-white text-lg md:text-xl text-center py-8 shadow-md">
        &copy; {currentYear}, Mobile Shop, All Right Reserved
      </h2>
    </footer>
  );
};

export default Footer;
