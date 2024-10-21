import React from "react";
const Footer = () => {
  return (
    <div className="flex flex-col gap-10 m-8 items-center justify-center lg:flex lg:flex-row lg:justify-between">
      <div>
        <img src="./src/images/logo.svg" alt="" />
      </div>
      <div className="flex flex-row gap-4 lg:order-3">
        <a href="https://www.linkedin.com/in/ayush-pathak-662768245/"><img
          src="./src/images/icon-twitter.svg"
          alt=""
        /></a>
        <a href="https://www.linkedin.com/in/ayush-pathak-662768245/"><img
          src="./src/images/icon-linkedin.svg"
          alt=""
        /></a>
       <a href="https://www.linkedin.com/in/ayush-pathak-662768245/"> <img
          src="./src/images/icon-youtube.svg"
          alt=""
        /></a>
        <a href="https://www.linkedin.com/in/ayush-pathak-662768245/"><img
          src="/src/images/icon-instagram.svg"
          alt=""
        /></a>
      </div>
      <div className="text-gray-400">
        2023@DSA Revision
      </div>
    </div>
  );
};
export default Footer;
