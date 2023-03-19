import React from "react";

//import data
import { social } from "../data";

//import logo
import Logo from "../assets/img/logo.svg";

function Footer() {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* {socials icons} */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* {Logo} */}
          <div>
            <h1>Xakimov Otabek</h1>
          </div>
          {/* copy */}
          <p>&copy; 2022 developed by xakimovotabek200</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
