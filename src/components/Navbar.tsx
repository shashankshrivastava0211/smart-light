import SmartLogo from "./icons/SmartLogo";
import LoginButton from "./LoginButton";
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto py-4 flex px-[15%]  justify-between items-center">
        <div className="flex justify-center items-center gap-1">
          <SmartLogo />
          <div className="text-1xl text-center font-bold ">Smart Lights</div>
        </div>
        <div className="flex space-x-6 items-center">
          <div className="">
            <a href="#" className="">
              Home
            </a>
          </div>  
          <div>
            <a href="#" className="">
              Products
            </a>
          </div>
          <div>
            <a href="#" className="">
              Software Services
            </a>
          </div>
          <LoginButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
