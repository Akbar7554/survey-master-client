import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePayment = () => {
    const AxiosPublic = useAxiosPublic()


    const {
      data: getPayment = [],
      isLoading: loading,
      refetch,
    } = useQuery({
      queryKey: ["paymentCart"],
      queryFn: async () => {
        const res = await AxiosPublic.get("paymentCart")
        console.log(res)
        return res.data
      },
    })

    return [getPayment, loading, refetch]
};

export default usePayment;