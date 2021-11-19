const TimeLineItem = ({ data, index }) => {
  return (
    <div
      key={index}
      className="relative flex w-full px-5 transition-all duration-500 sm:px-0 sm:justify-center sm:w-1/2 timeline-item "
    >
      <div className="h-full text-sm sm:text-lg border-2 border-[#111e27] dark:border-white text-[#111e27] font-semibold dark:text-[#ffce45] w-[90%] py-4 px-3 rounded relative">
        <span className="absolute top-1/2 sm:hidden w-[20px] h-[2px] bg-[#111e27] dark:bg-white left-[-20px]"></span>
        <h1>{data.year}</h1>
        <h3 className="flex-1">{data.description}</h3>
      </div>
    </div>
  );
};

export default TimeLineItem;
