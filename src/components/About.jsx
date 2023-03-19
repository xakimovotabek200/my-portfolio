import React from "react";
import Image from "../assets/img/Image.jpg";

function About() {
  return (
    <section className=" section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-xol xl:flex-row gap-24">
          <img
            className="object-cover h-[556px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Xakimov & Otabek
              </h2>
              <p className="mb-4 text-accent">Junior Web development</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis saepe porro qui exercitationem eveniet optio rerum odit
                magni labore consequuntur. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                nemo!
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Connect me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
