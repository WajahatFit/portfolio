import React from "react";
import orange from "../images/orange store.png";

export default function Projects() {
  return (
    <div id="projects" className="h-full rounded-xl mt-14 pb-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-xl text-center">My Recents Projects</h1>

        <img className="object-cover" src={orange} alt="orange-store" />
        <div>
          <h2 className="text-md text-center  ">
            This is a final project developed in Ironhack. It's a e-commerce
            store which sells tech products.{" "}
          </h2>
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
