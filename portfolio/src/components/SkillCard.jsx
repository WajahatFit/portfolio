import React from "react";

export default function SkillCard(props) {
  return (
    <div>
      <div className="bg-white border border-grey-200 rounded-xl shadow-2xl w-32 h-32 flex items-center justify-center">
        <img className="w-3/4" src={props.image} alt={"tech"} />
      </div>
    </div>
  );
}
