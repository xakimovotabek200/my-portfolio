import React from "react";

// import testimonials Sliders

import TestimonialSlider from "../components/TestimonialSlider";

function Testimonials() {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            My pairs in work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere
            dolore nisi doloribus, rem quaerat praesentium at laboriosam dolor
            doloremque.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonials;
