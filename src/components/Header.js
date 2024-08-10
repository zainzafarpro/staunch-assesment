import logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="flex justify-center border-b-gray-300 border-b-[1px] py-4">
      <img src={logo} alt="Invocing" />
    </div>
  );
};

export default Header;
