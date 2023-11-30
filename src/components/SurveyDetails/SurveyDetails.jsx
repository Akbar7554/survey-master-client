import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxiosPublic from "../../hooks/useAxiosPublic"
// import useSurveyDetails from "../../hooks/useSurveyDetails";
import { AiFillLike, AiFillDislike } from "react-icons/ai"
import { BiDislike } from "react-icons/bi"


const SurveyDetails = () => {
  const { id } = useParams()
  // const AxiosPublic = useAxiosPublic()
  const AxiosPublic = useAxiosPublic()

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await AxiosPublic.get(`/allSurvey/${id}`)
      setData(res?.data)
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                {data?.title}
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                {data?.description}
              </p>

              <form>
                <div className="max-w-xl mt-20 mx-auto">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Your Report
                    </label>
                    <textarea
                      rows="10"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                    >
                      Send Report
                    </button>
                  </div>
                  <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-10">
                    <div className="mt-3 rounded-lg sm:mt-0">
                      <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out border-white transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <AiFillLike className="text-2xl"></AiFillLike>
                      </button>
                    </div>
                    <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                      <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-blue-600 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <BiDislike className="text-2xl"></BiDislike>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default SurveyDetails
