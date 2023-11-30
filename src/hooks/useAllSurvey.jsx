import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAllSurvey = () => {
  // const [survey, setSurvey] = useState([])
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //     fetch("https://survey-master-server-kappa.vercel.app/survey")
  //         .then(res => res.json())
  //         .then(data => {
  //             setSurvey(data)
  //             setLoading(false)
  //     })
  // }, [])

  // console.log(survey);

  // return [survey, loading ]

  // const AxiosPublic = useAxiosPublic()
  const AxiosSecure = useAxiosSecure()
  // const {user} = useAuth()

  const {
    data: survey = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/allSurvey")
      return res.data
    },
  })

  return [survey, loading, refetch]
}

export default useAllSurvey
