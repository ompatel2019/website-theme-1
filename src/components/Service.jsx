import React from 'react';
import { IoHourglassOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

/**
 * Single service card
 * @param {object} serviceInfo - contains { serviceActive, serviceDuration, serviceName, serviceDesc, serviceTools, serviceImg }
 */
const Service = ({ serviceInfo }) => {
  const topContainersClass = 'flex space-x-[2px] items-center p border-2 p-1 px-2 rounded-md';

  const IconImg = serviceInfo.serviceImg;

  return (
    <div
      className="
        service
        border-2 border-c4-0
        px-8 py-8
        flex flex-col items-center
        rounded-md space-y-6 lg:space-y-7 lg:justify-around
        
        transition-all duration-300 ease-in-out
        hover:-translate-y-[10px] hover:invert hover:bg-c1-0
      "
    >
      <div className="flex space-x-2">
        <div className={topContainersClass}>
          {serviceInfo.serviceActive ? (
            <>
              <GoDotFill className="text-green-400 glow" />
              <p>Active</p>
            </>
          ) : (
            <>
              <GoDotFill className="text-orange-400 glow" />
              <p>Coming Soon</p>
            </>
          )}
        </div>

        {serviceInfo.serviceDuration && (
          <div className={`${topContainersClass} bg-c4-0 text-c1-0`}>
            <IoHourglassOutline className="rotate" aria-hidden="true" />
            <p>{serviceInfo.serviceDuration}</p>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <IconImg className="w-12 h-12" aria-hidden="true" />
      </div>

      <div className="space-y-4">
        <h3 className="h5 text-center font-bold m1 font-dm-mono">
          {serviceInfo.serviceName.toUpperCase()}
        </h3>
        <p className="p text-center">{serviceInfo.serviceDesc}</p>
        
        <div className="flex space-x-1 justify-around items-center">
          {serviceInfo.serviceTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-c4-0 w-full text-c1-0 text-center rounded-sm font-normal text-base px-2 py-[4px] font-questrial"
            >
              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
