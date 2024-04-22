import React from "react";
import Sidebar from "../components/widgets/Sidebar";

const SolarSystemInfo = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen bg-sidebar md:w-72">
        <Sidebar />
      </div>
      <div className="md:pl-80 md:pr-4">
        <h1 className="text-5xl font-bold mb-4 text-white">About</h1>
        <h4 className="mb-4 text-2xl text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis
          velit assumenda ipsam exercitationem labore, nulla tempora illum,
          dolores similique illo deleniti deserunt dicta! Dolores optio
          cupiditate velit ratione tempore?
        </h4>
        <h4 className="text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque porro,
          enim quos ratione atque optio quis deserunt a cum rerum reprehenderit
          est recusandae asperiores eveniet sunt. Ad voluptates nam neque.
        </h4>
      </div>
    </>
  );
};

export default SolarSystemInfo;
