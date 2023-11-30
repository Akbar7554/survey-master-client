import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "react-awesome-slider/dist/custom-animations/cube-animation.css"

import Banner01 from "../../../assets/banner1.jpg"
import Banner02 from "../../../assets/banner2.jpg"
import Banner03 from "../../../assets/banner3.jpg"


import { TypeAnimation } from "react-type-animation"

const Banner = () => {
  return (
    <div>
      <AwesomeSlider
        className="lg:mt-18 lg:mb-10 lg:h-[710px]"
        animation="cubeAnimation"
      >
        <div data-src={Banner02} />
        <div data-src={Banner01} />
        <div data-src={Banner03} />
      </AwesomeSlider>
      <div
        type="button"
        className="absolute top-60 left-28 z-30 w-[200px] md:w-[600px] lg:w-[1300px]"
        data-carousel-next
      >
        <h2 className="text-center text-md md:mb-10 font-bold text-gray-50 md:text-6xl">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Are my Employees Happy at Work?",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Do people like attending my events?",
              1000,
              "Will my product be a success or a flop?",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <p className="text-center font-semibold text-xs md:text-2xl md:mb-20 text-gray-200">
          A global leader in survey software. 20 million questions answered
          daily.
        </p>
        
        <div className="flex items-center justify-center  gap-5 md:gap-10">
          <button
            href=""
            className="flex uppercase text-gray-200 border-2 flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-[#2E3B55] leading-6  duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"
          >
            Explore More...
            <span className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
              >
                <path
                  fill="currentColor"
                  d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
