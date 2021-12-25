import TimeLine from "../Timeline/TimeLine";

const TimelineSection = () => {
  return (
    <div className="py-1 notoSans">
      <div className="dark:text-[#FFCE45] text-[#111e27] text-xl border-b-4 font-semibold border-red-500 dark:border-[#6C757D] inline">
        Timeline
      </div>
      <TimeLine />
    </div>
  );
};

export default TimelineSection;
