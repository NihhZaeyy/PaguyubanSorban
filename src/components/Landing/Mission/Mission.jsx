import React, { useState } from "react";
import "./mission.css";

import { FaHandshakeSimple } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";

//image
import mission from "/src/data/mission.json";

const Mission = () => {
  return (
    <div className="px-6 flex flex-col gap-6 mt-16 lg:px-20">
      <div className="text-center">
        <h1 className="font-medium text-3xl mb-4">Our Mission</h1>
        <p className="md:px-10 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla viverra lacinia. Vestibulum fermentum sodales luctus.
          Vivamus volutpat vehicula ex nec consectetur.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {mission.map((item) => (
          <div
            className=" border border-[#333333] p-4 rounded-xl"
            key={item.id}
          >
            <img className="rounded-lg" src={item.url} alt={item.name} />

            <div className="mt-4 flex flex-col gap-2">
              <div className="flex gap-2">
                <h2 className="text-2xl font-bold">{item.name}</h2>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
