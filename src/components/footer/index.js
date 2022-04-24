import React from "react";

import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className=" bg-[#12445B] ">
      <div className="max-w-7xl flex text-white/90   mx-auto  flex-col py-10 ">
        <div className="flex">
          <img
            className="h-20"
            src={require(`../../assets/images/gerWhite.png`)}
            alt="gerLogo"
          />

          <div>
            <div className="mt-4 font-bold text-2xl">Myhuduu.mn</div>
            <p className="text-xs">малчин та нэг л удаа бүртгүүл</p>
          </div>
        </div>
        <div className="flex justify-evenly items-end mt-10">
          {" "}
          <div className="flex flex-col mb-8 text-sm space-y-1">
            <Link>Бидний тухай</Link>
            <Link>Хүргэлт</Link>
            <Link>Хамтын ажиллагаа</Link>
          </div>
          <div className="flex flex-col text-sm ">
            <p className="text-lg">Тусламж</p>
            <ul className="space-y-1">
              <li>
                {" "}
                <Link>Түгээмэл асуулт, хариулт</Link>
              </li>
              <li>
                <Link>Бүртгэлийн үйлчилгээ</Link>
              </li>
              <li>
                <Link>Нууцлалны бодлого</Link>
              </li>
              <li>
                <Link>Баталгаат бүтээгдэхүүн авах</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-80 text-sm space-y-1 mb-4 ">
            <p className="text-lg">Холбоо барих</p>
            <div className="flex">
              <img
                className="h-8 mr-4"
                alt="loca"
                src={require(`../../assets/images/place.png`)}
              />
              <p>
                {" "}
                Улаанбаатар хот, Сүхбаатар дүүрэг 1-р хороо, Энхтайвны Өргөн
                Чөлөө 17. -{" "}
              </p>
            </div>
            <div className="flex">
              <img
                className="h-7 mr-4"
                alt="phone"
                src={require(`../../assets/images/phone_in_talk.png`)}
              />
              <p>885453, 985345</p>
            </div>
          </div>
        </div>
        <ul className="flex justify-center  space-x-10 mt-16 ">
          <li>
            <Link>
              <img
                alt="iglogo"
                className="h-10"
                src={require(`../../assets/images/Instagram.png`)}
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                className="h-10"
                alt="ytblogo"
                src={require(`../../assets/images/YouTube.png`)}
              />
            </Link>
          </li>
          <li>
            <Link>
              <img
                className="h-10"
                alt="twitterLogo"
                src={require(`../../assets/images/Twitter.png`)}
              />
            </Link>
          </li>
          <li>
            <img
              className="h-10"
              alt="fbLogo"
              src={require(`../../assets/images/Facebook.png`)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default footer;
