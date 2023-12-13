import { Link } from "react-router-dom"
import usePayment from "../../../hooks/usePayment"

const PaymentCart = () => {

    const [payment] = usePayment()
    console.log(payment)
    
  return (
    <div className="p-10 mt-20 ">
      <div className="text-center mb-5">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-[#2E3B55]">
          Make Payment to <span className="text-sky-500">Pro User</span>
        </h3>
      </div>
      {payment?.map((item) => (
        <div
          key={item._id}
          className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16"
        >
          <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
            {item?.level}
          </h3>
          <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
            <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
              ${item?.price}
            </p>
            <p
              className="box-border m-0 border-solid"
              // style="border-image: initial;"
            >
              / month
            </p>
          </div>
          <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              <svg
                className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Comment on a survey
            </li>

            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              <svg
                className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              SSL (HTTPS)
            </li>

            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              <svg
                className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Custom Domain
            </li>

            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              <svg
                className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              SiteFast Branding Removal
            </li>
          </ul>

          <Link
            to="/payment"
            href="#"
            className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
          >
            Start Now
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PaymentCart
