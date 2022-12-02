import React from "react";

export default function NavBar() {
  return (
    <div className="bg-current font-sans flex items-center justify-between p-4 sticky top-0">
      <ul className="hidden md:flex md:items-center md:justify-end md:gap-6 md:pt-8 pb-8 pr-8 bg-transparent md:text-3xl text-white">
        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <h2 className="text-xl md:text-4xl text-slate-400 uppercase tracking-wider">
        <span className="font-semibold">Wajahat</span> Ali
      </h2>
    </div>
  );
}
