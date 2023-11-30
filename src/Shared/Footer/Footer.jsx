import logo from '../../assets/logo.webp';


const Footer = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-[#2E3B55] text-gray-200">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <span className="ml-2 text-3xl font-bold tracking-wide ">
              SURVEY MASTER
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm ">
              Surveys serve different purposes, such as measuring customer
              satisfaction, understanding market trends, assessing public
              opinion, gathering feedback, or conducting academic research. Once
              the survey responses are collected, researchers analyze the data
              to identify patterns, trends, or correlations. Statistical methods
              are often used to draw meaningful conclusions from the survey
              results.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide ">
            Key elements of surveys
          </p>
          <a href="#">Data Collection</a>
          <a href="#">Telephone Surveys</a>
          <a href="#">Questionnaire</a>
          <p className="text-base font-bold tracking-wide ">Popular Surveys</p>
          <a href="#">National Survey on Drug Use and Health (NSDUH)</a>
          <a href="#">Health and Nutrition Examination Survey (NHANES)</a>
          <a href="#">World Values Survey (WVS)</a>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide ">
            SURVEY MASTER IS ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-1 px-2 py-3">
            <a href="#" className="w-full min-w-xl">
              <img
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                className="h-10"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center py-2 px-4 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
            >
              <svg className="w-8 h-6 fill-current mr-2" viewBox="0 0 24 24">
                <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
              </svg>
              <span>Subscribe</span>
            </a>
          </div>
          <p className="text-base font-bold tracking-wide ">Contacts</p>
          <div className="flex">
            <p className="mr-1">Email:</p>
            <a href="#" title="send email">
              SURVEY@MASTER.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm ">
          © Copyright 2023 SURVEY MASTER. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
