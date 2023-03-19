import React from "react";
// import Img
import MyImg from "../assets/img/myPhoto.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover ls:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div
            className="flex-1 
                    flex    
                    flex-col 
                    items-center 
                    lg:items-start"
          >
            <p className="text-lg text-accent mb-[22px]">
              Hi guys I'm Otabek Xakimov
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:track-[-2px]">
              I Building & websites <br /> are useful{" "}
            </h1>
            <p className=" pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              quibusdam ratione dolores nisi
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all ">
              Work with me
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full  ">
            <img
              style={{ width: "500px", height: "500px" }}
              src={MyImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
