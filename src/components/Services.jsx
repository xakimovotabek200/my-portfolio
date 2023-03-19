import React from "react";
//import servisec data
import { services } from "../data";

function Services() {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col text-center items-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I Do clients
          </h2>
          <p className="subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            debitis id. Voluptates impedit fugiat expedita dolor eius nesciunt
            aliquid nihil!
          </p>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((services, index) => {
            const { icon, name, description } = services;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-accent -rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
