import { useSelector } from "react-redux";
import TimeLineItem from "./TimeLineItem";

const TimeLine = () => {
  const data = useSelector((state) => state.data.timelineItemContent);
  return (
    <div className="relative pb-4 mt-6 firaSans">
      <div className="flex flex-col items-start space-y-4 time-container after:bg-red-500 dark:after:bg-[#ffce45] after:left-0 after:absolute after:w-[4px] after:h-full after:top-0 after:rounded-xl transition-all duration-500 sm:after:left-1/2">
        {data?.map((data, index) => (
          <TimeLineItem key={index} index={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
