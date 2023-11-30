import { Link } from "react-router-dom"
import useAllSurvey from "../../hooks/useAllSurvey"

const AllSurvey = () => {
  const [survey] = useAllSurvey()
  console.log(survey)
  return (
    <div className="mt-14 p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      {survey.map((item) => (
        <div
          key={item._id}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0"></div>
            <div className="p-8">
              <div className="uppercase tracking-wide font-bold  text-xl ">
                Survey Title :{" "}
                <span className="text-lg font-semibold">{item.title}</span>
              </div>
              <p className="mt-2 text-lg text-slate-500">
                <span className="font-bold">Description :</span>{" "}
                {item.description.slice(0, 200)}
              </p>
            </div>
          </div>
          <div className="py-6 px-5">
            <Link
              to={`/surveyDetails/${item._id}`}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              View Details...
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllSurvey
