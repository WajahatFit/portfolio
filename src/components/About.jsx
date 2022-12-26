import React from "react";
import details from "../images/undraw_profile_details_re_ch9r.svg";
import resume from "../images/resume.pdf";
export default function About() {
  return (
    <div id="About">
      <div className="flex flex-col text-center space-y-8 p-8 p-8">
        <h3 className="text-center text-lg">About</h3>
        <h1 className="font-serif text-2xl">
          Developing <span className="italic capitalize">top class</span>{" "}
          websites using modern tech!
        </h1>
        <p className="text-md text-gray-500">
          I'm Wajahat, enthusiastic about new technology that we are evolved
          around, made me dig deeper into web development which I felt in love
          with.
        </p>
        <button className="m-auto bg-sky-500 hover:bg-sky-700 p-4 rounded-xl text-white ">
          <a href={resume} download>
            Download Resume
          </a>
        </button>
        <img
          className="w-48 m-auto"
          src={details}
          alt={"avatar with some drawing"}
        />
      </div>
    </div>
  );
}
