import React from "react";
const AboutSection = () => {
  return (
    <div className="mt-3 firaSans">
      <div className="dark:text-[#FFCE45] text-[#111e27] teko text-3xl border-b-4 border-red-500 dark:border-[#6C757D] inline">
        About
      </div>
      <div className="py-6 leading-6 tracking-wide text-[#111e27] dark:text-white dark:text-base sm:text-lg">
        <p className="font-semibold">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hadi is a student at Lebanese
          University faculty of sceince, studying Computer sceince based in
          Beirut, Lebanon. Started his journey in Web development in November,
          2020 before starting univeristy. He has passion to build websites for
          clients and companies.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
