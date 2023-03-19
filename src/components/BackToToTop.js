import React, { useState, useEffect } from "react";
//import Link
import { Link, animateScroll as scroll } from "react-scroll";
//import icons
import { ChevronUpIcon } from "@heroicons/react/outline";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const BackToToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scroolToTop = () => {
    scroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scroolToTop()}
        className="bg-accent w-12 h-12 hover:bg-accent-hover text-white
       rounded-full fixed right-24 bottom-24 
       cursor-pointer flex justify-center items-center
        transition-all"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToToTop;
