import { useEffect, useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` flex fixed top-0 p-[20px] w-full h-[30px] z-[1] justify-between ease-in transition-all duration-500 ${
        show ? " bg-black" : ""
      }`}
    >
      <img
        className=" h-[30px] object-contain w-[90px] fixed left-[20px]"
        src=""
        alt="USER"
      />
      <img
        className=" h-[30px] object-contain fixed right-[20px]"
        src=""
        alt="AVATAR"
      />
    </div>
  );
}
export default Navbar;
