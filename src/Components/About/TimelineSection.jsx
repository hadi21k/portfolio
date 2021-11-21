import TimeLine from "../Timeline/TimeLine";

const TimelineSection = () => {
  return (
    <div className="py-1 teko">
      <div className="dark:text-[#FFCE45] text-[#111e27] text-3xl border-b-4 border-red-500 dark:border-[#6C757D] inline">
        Timeline
      </div>
      <TimeLine />
    </div>
  );
};

export default TimelineSection;
