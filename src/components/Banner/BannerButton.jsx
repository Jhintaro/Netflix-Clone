const BannerButton = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="cursor-pointer text-white outline-none border-none font-bold rounded-[0.2vw] pl-8 pr-8 mr-4 mt-2 bg-black/50 pb-2 hover:text-black hover:bg-white transition-all duration-200 pt-2"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default BannerButton;
