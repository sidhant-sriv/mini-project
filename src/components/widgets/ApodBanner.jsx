import React from "react";

const ApodBanner = ({ apod }) => {
  return (
    <div>
      {apod && (
        <div className="relative">
          <img
            src={apod.url}
            alt={apod.title}
            className="w-full h-auto"
            style={{ maxHeight: "500px" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold">{apod.title}</h1>
              <p className="text-lg mt-4">{apod.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApodBanner;
