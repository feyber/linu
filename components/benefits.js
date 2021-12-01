import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Benefits(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap js-show-on-scroll ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div className="hover:-rotate-3 duration-500">
            <Image
              src={data.image}
              width="600"
              height="600"
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div id="benefit" className="flex flex-col w-full ">
              <h3 className="max-w-2xl -mt-8 md:text-3xl text-xl text-center md:text-left font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white drop-shadow-lg">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-xs leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 mb-5">
                {data.desc}
              </p>
            </div>

            <div className="w-full items-center -mt-8 text-md md:text-xl">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex  items-center mt-4 space-x-2">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-gradient-to-r from-green-400 via-purple-500 to-pink-400 rounded-full w-8 h-8 drop-shadow-lg">
          {/* {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })} */}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
