import axios from "axios"
const axiosPublic = axios.create({
  baseURL: "https://survey-master-server-kappa.vercel.app",
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
