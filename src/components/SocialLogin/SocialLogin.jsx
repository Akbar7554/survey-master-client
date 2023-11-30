import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
      googleSignIn().then((result) => {
        console.log(result.user)
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        }
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data)
          navigate("/")
        })
      })
    }
    return (
      <div className="grid grid-cols-3 gap-3 px-5">
        <div>
          <button
            onClick={handleGoogleSignIn}
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FcGoogle className="text-2xl"></FcGoogle>
          </button>
        </div>
        <div>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaTwitter className="text-2xl text-[#1DA1F2]"></FaTwitter>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaFacebook className="text-2xl text-[#1877F2]"></FaFacebook>
          </a>
        </div>
      </div>
    )
};

export default SocialLogin;