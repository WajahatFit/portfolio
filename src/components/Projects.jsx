import React from "react";
import orange from "../images/orange store.png";

export default function Projects() {
  return (
    <div id="projects" className="pt-14">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-xl text-center">My Recents Projects</h1>
        <div className="w-11/12 h-72 bg-white border border-grey-500">
          <div>
            <img className="" src={orange} alt="orange-store"></img>
          </div>
          <div>
            <h2 className="p-4">
              This is a final project developed in Ironhack. It's a e-commerce
              store which sells tech products.{" "}
            </h2>
          </div>
        </div>
        <div className="flex w-full justify-evenly">
          <h1 className="text-xl">
            <a href="https://github.com/WajahatFit/Apple-Clone-Front-End">
              {"</>"}
            </a>
          </h1>
          <h1 className="text-xl">
            <a
              target={"_blank"}
              href="https://github.com/WajahatFit/Apple-Clone-Front-End"
              rel="noreferrer"
            >
              github
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
