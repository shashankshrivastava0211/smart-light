import Navbar from "./Navbar";
import LoginButton from "./LoginButton";
import streetlight from "..//assets/images/image_placeholder.png";
import homeImage3 from "..//assets/images/Frame 427320584 (1).png";
import footerImage from "..//assets/images/planet-earth-from-space 1.png";
import Ecosystem from "./Ecosystem";
import ProductButton from "./ProductButton";
import homeBackround from "..//assets/images/WhatsApp Image 2024-08-21 at 15.33.04_51996822.jpg";
import KnowMore from "./icons/KnowMore";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";
import SmartLogo from "./icons/SmartLogo";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen" style={{ color: "#ffffff" }}>
        <div
          className="w-full h-full  relative"
          style={{
            background: `url(${homeBackround})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />
          <div style={{ color: "gray", height: "10px" }} className="mt-2">
            <hr></hr>
          </div>
          <div className="flex px-[15%] gap-8 h-[84%] items-center mt-8 flex-col relative">
            <div className="flex gap-2 justify-center items-center flex-col px-[20%]">
              <div className="text-1xl text-center font-bold leading-relaxed ">
                Smart Lighting Solutions
              </div>
              <div className="text-3xl text-center font-bold leading-relaxed ">
                Bringing A New Perspective to the Street Lights And the Cities
                Of Tomorrow.
              </div>
            </div>
            <div className="mt-10" style={{ filter: "blur(0.5px)" }}>
              <LoginButton />
            </div>
          </div>
        </div>
        <div
          className="w-full h-full py-16 px-[15%] relative"
          style={{
            background:
              "radial-gradient(circle, rgba(237,244,251,1) 0%, rgba(163,205,221,1) 0%, rgba(255,255,255,1) 45 %)",
          }}
        >
          <div
            className="w-[150px] h-10  flex items-center px-4"
            style={{
              color: "blue",
              background:
                "linear-gradient(90deg, #0780FE 1%, rgba(255,255,255,1) 29%, rgba(255,255,255,1) 50%)",
            }}
          >
            Ecosystem
          </div>
          <div className="text-2xl my-3" style={{ color: "black" }}>
            <div>How does a smart street</div>
            <div>Light ecosystem works?</div>
          </div>
          <Ecosystem />
        </div>
        <div
          className="w-full h-full py-7 px-[15%] relative"
          style={{
            background:
              "linear-gradient(to right bottom, #99afc0, #aabdcc, #bccbd7, #cdd9e3, #dfe8ef)",
          }}
        >
          <div
            className="w-[150px] h-10  flex items-center px-4"
            style={{
              color: "blue",
              background:
                "linear-gradient(to right, #E9F2FC 0%, rgba(255, 255, 254, 0.5) 10%, transparent 50%)",
            }}
          >
            Products
          </div>
          <div className="text-2xl flex flex-col" style={{ color: "black" }}>
            <div className="flex flex-col my-4">
              <div className="font-bold">
                Cutting-edge hardware,
                <span className="font-normal">offerings</span>
              </div>
              <div>helping cities optimize resources and</div>
              <div>achieve smart development goals</div>
            </div>
            <div className="grid grid-cols-4 gap-1 justify-evenly">
              <ProductButton text={"Centralized Control & Monitoring System"} />
              <ProductButton text={"NEMA-Mounted VOLC 1160"} />
              <ProductButton
                text={"Retrofit Street Light Controller VOLC 2160"}
              />
              <ProductButton
                text={"Retrofit Street Light Controller VOLC 2180"}
              />
              <ProductButton
                text={"Retrofit Street Light Controller VOLC 4180"}
              />
            </div>
            <div className="grid grid-cols-2 mt-6 relative ">
              <div className=" min-w-[50%]">
                <img src={streetlight} alt="street light"></img>
              </div>
              <div
                className=" flex justify-center  relative  flex-col"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(142,201,247,1) 2%, rgba(255,255,255,1) 100%, rgba(93,167,235,1) 100%)",
                }}
              >
                <div className="w-[75%] px-5">
                  <div className="mb-0" style={{ fontSize: "10px" }}>
                    Product V5
                  </div>
                  <div className="text-md font-bold">Centralize control &</div>
                  <div className="text-md font-bold">Monitoring System</div>
                  <div className="text-xs">
                    Designed indigenously for street lighting projects, the CCMS
                    offers a complete feeder panel for a group of 30-50 street
                    lights.
                  </div>
                  <div className="flex gap-2 items-center mt-2">
                    <a href="#" className="text-sm" style={{ color: "blue" }}>
                      Know More
                    </a>
                    <KnowMore />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 flex left-[46.8%]">
                <div className="p-3" style={{ backgroundColor: "gray" }}>
                  <LeftArrow />
                </div>
                <div className="p-3" style={{ backgroundColor: "white" }}>
                  <RightArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full py-16 my-7 px-[15%] relative"
          style={{
            background: "white",
          }}
        >
          <div className="flex justify-center py-3 border-2 border-blue-700 items-center">
            <img className="h-[700px] w-[70%]" src={homeImage3} alt=""></img>
          </div>
        </div>
        <div
          className="w-full h-[450px] mt-1  relative"
          style={{
            background:
              "linear-gradient(to bottom, #010407, #02060a, #02070d, #03090f, #030b11)",
          }}
        >
          <div className="px-16 flex py-3 justify-around h-full flex-col">
            <div className="flex justify-between px-11 ">
              <div className="flex w-[50%] gap-2 z-10  justify-start items-center">
                <SmartLogo />
                <div className="text-1xl text-center font-bold ">
                  Smart Lights
                </div>
              </div>
              <div className="w-[50%] flex justify-around items-center gap-8 z-10 ">
                <div className="">
                  <a href="#" className="">
                    Product
                  </a>
                </div>
                <div>
                  <a href="#" className="">
                    Software Services
                  </a>
                </div>
                <div>
                  <a href="#" className="">
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-[50%]">
                <hr></hr>
              </div>
              <div className="flex gap-5">
                <div className="">
                  <a href="#" className="">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="">
                    Terms and Condition
                  </a>
                </div>
                <div>
                  <a href="#" className="">
                    Coockie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex z-0">
            <img
              className="h-[450px] absolute top-0 right-0"
              src={footerImage}
              alt="footer image"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
