import React from "react";
import Container from "./container";
//import Link from "next/link";

export default function Cta() {
  return (
    <Container className=" relative js-show-on-scroll flex flex-col justify-end items-end mt-20 md:mt-40 md:mb-40 mb-72">
      <div
        //id="kontak"
        className="absolute right-0 -top-12 hidden md:block text-center w-full max-w-6xl text-white bg-gradient-to-r from-green-400 via-purple-500 to-pink-400 px-7 py-7 lg:px-4 lg:py-4 lg:flex-nowrap rounded-xl hover:shadow-2xl md:hover:translate-x-4 duration-700"
      >
        <div className="flex-grow text-right">
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            MINT ADDRESS : 41TWWURTUV4K8TUFXP1VFFYP9NOMBHXQTSCSE8XLM26V
          </p>
          {/* <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            TOKEN NAME : LITTLEINU TOKEN
          </p>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            TOKEN SYMBOL : LINU
          </p> */}
        </div>
      </div>
      <div
        //id="kontak"
        className="absolute right-0 -top-12 block md:hidden  text-center w-full max-w-6xl text-white bg-gradient-to-r from-green-400 via-purple-500 to-pink-400 px-7 py-7 lg:px-4 lg:py-4 lg:flex-nowrap rounded-xl hover:shadow-2xl md:hover:translate-x-4 duration-700"
      >
        <div className="flex-grow text-center">
          <p className="font-medium text-white text-opacity-90 ">
            MINT ADDRESS :
          </p>
          <p className="font-medium text-white text-opacity-90">
            41TWWURTUV4K8TUFXP1VFF
          </p>
          <p className="font-medium text-white text-opacity-90 ">
            YP9NOMBHXQTSCSE8XLM26V
          </p>
        </div>
      </div>
      <div
        //id="kontak"
        className="absolute right-0 md:top-10 top-24 -my-2 flex flex-wrap  text-center w-full max-w-5xl gap-5 text-white bg-gradient-to-r from-green-400 via-purple-500 to-pink-400 px-7 py-7 lg:px-4 lg:py-4 lg:flex-nowrap rounded-xl md:hover:shadow-2xl hover:translate-x-4 duration-700"
      >
        <div className="flex-grow text-center md:text-right">
          {/* <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            MINT ADDRESS : 41TWWURTUV4K8TUFXP1VFFYP9NOMBHXQTSCSE8XLM26V
          </p> */}
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            TOKEN NAME : LITTLEINU TOKEN
          </p>
          {/* <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            TOKEN SYMBOL : LINU
          </p> */}
        </div>
      </div>
      <div
        //id="kontak"
        className=" absolute right-0 top-44 md:top-28 my-2 md:my-0 flex flex-wrap  text-center w-full max-w-4xl gap-5 text-white bg-gradient-to-r from-green-400 via-purple-500 to-pink-400 px-7 py-7 lg:px-4 lg:py-4 lg:flex-nowrap rounded-xl hover:shadow-2xl md:hover:translate-x-4 duration-700"
      >
        <div className="flex-grow text-center md:text-right">
          {/* <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            MINT ADDRESS : 41TWWURTUV4K8TUFXP1VFFYP9NOMBHXQTSCSE8XLM26V
          </p>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            TOKEN NAME : LITTLEINU TOKEN
          </p> */}
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            TOKEN SYMBOL : LINU
          </p>
        </div>
      </div>
    </Container>
  );
}
