import React from "react";
import rasm12 from "../../../public/rasm12.png";
import rasm1 from "../../../public/rasm1.png";
import { useTranslation } from "react-i18next";
import "../../locale";
import { Button } from "antd";
function Navbar() {
  const { t, i18n } = useTranslation();

  const change = (e) => {
    i18n.changeLanguage(e);
  };

  return (
    <div className="w-[1366px]  h-[190px] relative contiener overflow-hidden">
      <div className="w-[1137px] !text-black h-5 left-[113px] top-[152px] absolute overflow-hidden">
        <div className="left-[1052px]  top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Education
        </div>
        <div className="left-[948px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Health
        </div>
        <div className="left-[847px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          People
        </div>
        <div className="left-[744px] top-0 absolutetext-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Sports
        </div>
        <div className="left-[597px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Art & Design
        </div>
        <div className="left-[487px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Moneys
        </div>
        <div className="left-[385px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Travel
        </div>
        <div className="left-[308px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Life
        </div>
        <div className="left-[201px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Science
        </div>
        <div className="left-[89px] top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          Opinion
        </div>
        <div className="left-0 top-0 absolute text-black text-sm font-normal font-['Lato'] uppercase leading-tight tracking-wide">
          News
        </div>
      </div>

      <button
        onClick={() => change("en")}
        className="left-[811px] top-[27px] absolute text-black text-xs font-normal font-['Inter']"
      >
        Eng
      </button>
      <button
        onClick={() => change("ru")}
        className="left-[846px] top-[27px] absolute text-black text-xs font-normal font-['Inter']"
      >
        Ru
      </button>
      <button
        onClick={() => change("uz")}
        className="left-[885px] top-[27px] absolute text-black text-xs font-normal font-['Inter']"
      >
        Uz
      </button>
      <div className="left-[1209px] top-[83px] absolute text-[#4a5056] text-sm font-normal font-['Lato'] leading-tight">
        - 23 °C
      </div>
      <div className="w-5 h-5 left-[1179px] top-[83px] absolute"></div>
      <div className="w-[195px] left-[961px] top-[83px] absolute text-[#4a5056] text-sm font-normal font-['Lato'] leading-tight">
        Monday, January 1, 2018
      </div>
      <div className="w-[184px] h-10 left-[591px] top-[73px] absolute"></div>
      <div className="left-[258px] top-[83px] absolute text-[#4a5056] text-sm font-normal font-['Lato'] leading-tight">
        Boston and New York Bear Brunt
      </div>
      <div className="w-[100px] h-[84px] left-[143px] top-[51px] absolute">
        <img
          className="w-[100px] h-[84px] left-0 top-0 absolute"
          src={rasm12}
        />
      </div>
      <div className="w-[1140px] h-px left-[113px] top-[50px] absolute">
        <div className="w-[1140px] h-px left-0 top-0 absolute bg-[#d9dadb]"></div>
      </div>
      <div className="left-[1211px] top-[15px] absolute text-[#4a5056] text-sm font-normal font-['Lato'] leading-tight">
        Sign In
      </div>
      <div className="w-5 h-5 left-[1181px] top-[15px] absolute"></div>
      <div className="w-[119px] left-[1037px] top-[26px] absolute text-[#929599] text-xs font-normal font-['Lato'] leading-[15px]">
        3 month for $19
      </div>
      <div className="w-[119px] left-[1037px] top-[11px] absolute text-[#262c33] text-xs font-normal font-['Lato'] leading-[15px]">
        {t("subs")}
      </div>
      <div className="w-[66px] h-11 left-[961px] top-[7px] absolute">
        <div className="w-[66px] h-11 left-0 top-0 absolute bg-[#bbbec1]"></div>
        <img
          className="w-[60.07px] h-[41px] left-[3px] top-[3px] absolute"
          src={rasm1}
        />
      </div>
      <div className="left-[283px] top-[15px] absolute text-[#929599] text-sm font-normal font-['Lato'] leading-tight">
        {t("search")}
      </div>
      <div className="w-5 h-5 left-[253px] top-[15px] absolute"></div>
      <div className="w-px h-[50px] left-[227px] top-0 absolute">
        <div className="w-px h-[50px] left-0 top-0 absolute bg-[#d9dadb]"></div>
      </div>
      <div className="left-[148px] top-[15px] absolute text-[#262c33] text-sm font-normal font-['Lato'] leading-tight">
        {t("section")}
      </div>
      <div className="w-5 h-5 left-[113px] top-[15px] absolute"></div>
    </div>
  );
}

export default Navbar;
