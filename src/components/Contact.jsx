import React from "react";

//import contact data
import { contact } from "../data";

function Contact() {
  return (
    <section id="section" className="section bg-primary">
      <div className="container mx-auto">
        {/* title section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title  before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vitae optio minima iste nostrum magnam officiis, quia tenetur ullam
            consectetur.
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, description, subtitle } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <h4 className="font-body text-xl mb-1">{title}</h4>
                  <p className="mb-1">{subtitle}</p>
                  <p className="text-accent fony-normal">{description}</p>
                </div>
              );
            })}
          </div>

          {/* form */}
          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="your name" />
              <input className="input" type="email" placeholder="your email" />
            </div>
            <input type="text" className="input" placeholder="Subject" />
            <textarea
              className="textarea"
              placeholder="Your Massege"
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover rounded-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
