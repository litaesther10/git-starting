import Link from "next/link";

import * as Icon from "react-feather";
import Image from "next/image";
import alone from "../../public/images/alone.jpg";
import developer from "../../public/images/developer.jpg";
import frustratedwoman from "../../public/images/frustratedwoman.jpg";
import BtnPrimary from "../buttons/BtnPrincipal";

export default function MainHome() {
  return (
    <div className="pt-40 pb-20 bg-neutral-100 text-zinc-800">
      <div className="px-6 mb-10 text-center">
        <h1 className="mb-8 text-5xl md:text-7xl ">Starting is easy</h1>

        <p className="md:text-lg text">
          ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
          relleno estándar de las industrias desde el año 1500,¿Qué es Lorem
          Ipsum? Lorem Ipsum es simplemente el texto de relleno de las imprentas
          y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
          de las industrias desde el año 1500,
        </p>
        <p className="mt-4 md:text-lg">
          ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
          relleno estándar de las industrias desde el año 1500,¿Qué es Lorem
          Ipsum? Lorem Ipsum es simplemente el texto de relleno de las imprentas
          y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
          de las industrias desde el año 1500,
        </p>
      </div>
      <div className="items-center justify-center mt-28">
        <div className="flex flex-col max-w-6xl px-6 mx-auto md:px-0 md:flex-row">
          <div className="p-4 mb-6 text-center bg-neutral-300 rounded-2xl md:mx-4 md:text-left md:p-8 min-w-4xl lg:m-auto">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-2xl uppercase lg:text-4xl">
              {" "}
              Every successful developer was once a newbie
            </h2>
            <p className="max-w-xl lg:text-lg">
              ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de
              relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500,
            </p>
          </div>
          <div className="hidden max-w-md ml-8 lg:block">
            <Image src={developer} alt="" className="rounded-2xl" />
          </div>
          <div className="hidden max-w-xs ml-1 lg:hidden md:block">
            <Image src={developer} alt="" className=" rounded-2xl" />
          </div>
        </div>{" "}
        <div className="my-10 md:my-20">
          <p className="text-center md:text-xl">
            ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno
            de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto
            de relleno estándar de las industrias desde el año 1500,
          </p>

          <div className="p-8 my-3 ">
            <h2 className="text-4xl text-center md:text-4xl ">
              We know what you feel
            </h2>
          </div>
        </div>
        <div className="relative max-w-6xl px-6 mx-auto md:my-32 md:flex-col md:py-11">
          <div>
            <div className="max-w-3xl m-auto">
              <Image
                src={frustratedwoman}
                alt=""
                className="rounded-2xl h-fit"
              />
            </div>
            <div className="px-4 md:flex-row md:flex md:justify-between md:bg-white md:rounded-2xl md:border-l-4 md:border-r-4 md:border-neutral-300 md:mt-40">
              <div className=" lg:bg-white lg:top-96 lg:absolute lg:left-0 md:py-5 md:pl-5 md:rounded-2xl">
                <h3 className="max-w-lg mt-10 mb-6 font-sans text-2xl text-center uppercase lg:mt-0">
                  {" "}
                  uncertainty
                </h3>
                <p className="max-w-md text-center ">
                  ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de
                  relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                  sido el texto de relleno estándar de las industrias desde el
                  año 1500,
                </p>
              </div>
              <div className=" lg:bg-white lg:top-0 lg:absolute lg:right-0 md:py-5 md:pl-5 md:rounded-2xl">
                <h3 className="max-w-lg mt-10 mb-6 font-sans text-2xl text-center uppercase lg:mt-0">
                  {" "}
                  Frustration
                </h3>
                <p className="max-w-md text-center">
                  ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de
                  relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                  sido el texto de relleno estándar de las industrias desde el
                  año 1500,
                </p>
              </div>
            </div>
            <div className=" md:bg-white md:top-96 md:absolute md:right-0 md:py-5 md:pl-5 md:rounded-2xl">
              <h3 className="max-w-lg mt-10 mb-6 font-sans text-2xl text-center uppercase md:mt-0">
                {" "}
                fear of failure
              </h3>
              <p className="max-w-md text-center ">
                ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de
                relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                sido el texto de relleno estándar de las industrias desde el año
                1500,
              </p>
            </div>
            <div className=" md:bg-white md:top-0 md:absolute md:left-0 md:rounded-2xl md:py-5 md:px-5">
              <h3 className="max-w-lg mt-10 mb-6 font-sans text-2xl text-center uppercase md:mt-0 ">
                {" "}
                expectations
              </h3>
              <p className="max-w-md text-center ">
                ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de
                relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                sido el texto de relleno estándar de las industrias desde el año
                1500,
              </p>
            </div>{" "}
          </div>
        </div>
        <div>
          <h3 className="my-10 text-2xl text-center md:text-4xl ">
            Not knowing what should be the next step can be overwhelming
          </h3>
          <p>
            ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno
            de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto
            de relleno estándar de las industrias desde el año 1500,
          </p>
        </div>
      </div>
    </div>
  );
}
