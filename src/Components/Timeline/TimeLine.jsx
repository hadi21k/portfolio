import { useSelector } from "react-redux";
import TimeLineItem from "./TimeLineItem";

const TimeLine = () => {
  const data = useSelector((state) => state.data.timelineItemContent);
  return (
    <div className="relative pb-4 mt-6 firaSans">
      <div className="flex flex-col items-start space-y-4 time-container after:bg-red-500 dark:after:!bg-[#ffce45]">
        {data?.map((data, index) => (
          <TimeLineItem odd={index} key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
