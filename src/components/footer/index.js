import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className=" bg-[#12445B] ">
      <div className="max-w-7xl flex text-white/80   mx-auto  flex-col py-10 ">
        <div className="flex">
          <img
            className="h-20"
            src={require(`../../assets/images/gerLogo.png`)}
            alt="gerLogo"
          />
          <div className="h-20 w-20 bg-[#0083BF] absolute"></div>
          <div>
            <div className="mt-4 font-bold text-2xl">Myhuduu.mn</div>
            <p className="text-xs">малчин та нэг л удаа бүртгүүл</p>
          </div>
        </div>
        <div className="flex flex-col">
          <Link>
            <a>Бидний тухай</a>
          </Link>
          <Link>Хүргэлт</Link>
          <Link>Хамтын ажиллагаа</Link>
        </div>

        <div className="w-full h-4  border-t-2 border-white mt-10"></div>
      </div>
    </div>
  );
};
export default footer;
