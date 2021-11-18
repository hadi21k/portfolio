import React from "react";
import TimeLineData from "../../Data";
import TimeLineItem from "./TimeLineItem";
const TimeLine = () => {
  return (
    <div className="relative pb-4 mt-6 firaSans">
      <div className="flex flex-col items-start space-y-4 time-container">
        {TimeLineData.map((data, index) => (
          <TimeLineItem key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
