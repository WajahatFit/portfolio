import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function Footer() {
  return (
    <div className="w-full h-20">
      <div className="">
        <h2 className="text-xl pl-8">Other links</h2>
        <div className="flex justify-start p-8 space-x-6">
          <a
            href="https://www.linkedin.com/in/alicodes/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <img className="w-20" src={linkedin} alt="linkedin icon"></img>
              <h2 className="text-center p-2">likeddin</h2>
            </div>
          </a>
          <div>
            <a
              href="https://github.com/WajahatFit"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-20" src={github} alt="github icon"></img>
              <h2 className="text-center p-2">Github</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black h-20 text-white flex justify-center items-center">
        <span className="text-white text-xl pr-2">&copy;</span>
        <h3>2023 by Wajahat Ali</h3>
      </div>
    </div>
  );
}
