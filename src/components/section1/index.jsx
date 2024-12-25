import React from "react";
import rasm from "../../../public/rasm2.png";
import Section2 from "../section2";
import Section3 from "../section3";
import { useTranslation } from "react-i18next";

function Section1() {
    const {t} = useTranslation()
  return (
    <div className="m-auto w-[90%]">
      <div className="contiener h-[130px] m-auto relative bg-[#262d33]">
        <div className="w-[65px] h-[65px] left-[1050px] top-[30px] absolute">
          <img className="w-[65px] h-[65px] left-0 top-0 absolute" src={rasm} />
        </div>
        <div className="w-[155px] left-[880px] top-[25px] absolute text-white text-base font-bold font-['Roboto Slab'] leading-[25px]">
          {t("title2")}
        </div>
        <div className="w-px h-[75px] left-[854px] top-[25px] absolute">
          <div className="w-px h-[75px] left-0 top-0 absolute bg-[#4a5056]"></div>
        </div>
        <div className="w-[65px] h-[65px] left-[764px] top-[30px] absolute">
          <img className="w-[65px] h-[65px] left-0 top-0 absolute" src={rasm} />
        </div>
        <div className="w-[154px] left-[595px] top-[25px] absolute text-white text-base font-bold font-['Roboto Slab'] leading-[25px]">
          {t("title3")}
        </div>
        <div className="w-px h-[75px] left-[569px] top-[25px] absolute">
          <div className="w-px h-[75px] left-0 top-0 absolute bg-[#4a5056] img"></div>
        </div>
        <div className="w-[65px] h-[65px] left-[479px] top-[30px] absolute">
          <img className="w-[65px] h-[65px] left-0 top-0 absolute" src={rasm} />
        </div>
        <div className="w-[154px] left-[310px] top-[25px] absolute text-white text-base font-bold font-['Roboto Slab'] leading-[25px]">
          {t("title1")}
        </div>
        <div className="w-px h-[75px] left-[284px] top-[25px] absolute">
          <div className="w-px h-[75px] left-0 top-0 absolute bg-[#4a5056]"></div>
        </div>
        <div className="w-[65px] h-[65px] left-[479px] top-[30px] absolute">
          <img className="w-[65px] h-[65px] left-0 top-0 absolute" src={rasm} />
        </div>
        <div className="w-[65px] h-[65px] left-[194px] top-[30px] absolute"></div>
        <div className="w-[65px] h-[65px] left-[1050px] top-[30px] absolute">
          <img className="w-[65px] h-[65px] left-0 top-0 absolute" src={rasm} />
        </div>

        <div className="w-[154px] left-[25px] top-[25px] absolute text-white text-base font-bold font-['Roboto Slab'] leading-[25px]">
          {t("title")}
        </div>
      </div>
      <br />
      <Section2 />
      <br />
      <Section3 />
    </div>
  );
}

export default Section1;
