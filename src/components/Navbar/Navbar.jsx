import { useEffect, useState } from "react";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` flex fixed top-0 p-3 w-full h-16 z-10 justify-between ease-in transition-all duration-500 ${
        isScrolled ? `bg-transparent` : "bg-black"
      }`}
    >
      <img
        className=" h-12 object-contain w-36 fixed left-[20px] bg-transparent"
        src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
        alt="USER"
      />
      <img
        className=" h-12 w-12 object-contain fixed right-[20px] bg-transparent"
        src="https://www.freepnglogos.com/uploads/dragon-ball-png/flying-dragon-ball-z-character-transparent-background-0.png"
        alt="AVATAR"
      />
    </div>
  );
}
export default Navbar;
