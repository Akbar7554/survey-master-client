import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useSurveyDetails = ({id}) => {

    const AxioPublic = useAxiosPublic()
    

    const {
      data: survey = {},
      isLoading: loading,
      refetch,
    } = useQuery({
      queryKey: ["surveyDetails"],
      queryFn: async () => {
          if (id) {
              const res = await AxioPublic.get(`/allSurvey/${id}`)
              console.log(res)
              return res.data
          }
      },
    })


    return [survey, loading, refetch]
};

export default useSurveyDetails;