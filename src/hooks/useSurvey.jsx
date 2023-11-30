
import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useSurvey = () => {
//     const AxiosPublic = useAxiosPublic()
//     const { user } = useAuth()

//   const {
//     data: survey = [],
//     isPending: loading,
//     refetch,
//   } = useQuery({
//     queryKey: ["survey"],
//     queryFn: async () => {
//         const res = await AxiosPublic.get(`/survey?email=${user.email}`)
//         console.log(res.data);
//         return res?.data
//     },
//   })

    //   return [survey, loading, refetch]
    const axiosSecure = useAxiosSecure()
    // const AxiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { refetch, data: survey = [] } = useQuery({
      queryKey: ["survey", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/survey?email=${user.email}`)
        return res.data
      },
    })
    console.log(survey);
    return [survey, refetch]
}

export default useSurvey
