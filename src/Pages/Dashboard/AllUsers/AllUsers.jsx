import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import DeleteIcon from "@mui/icons-material/Delete"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import Swal from "sweetalert2"
import { FaUserTag } from "react-icons/fa"

const AllUsers = () => {
  const axiosSecure = useAxiosSecure()
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users")
      return res.data
    },
  })

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data)
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: `${user.name} is now Admin`,
          showConfirmButton: false,
          timer: 1500,
        })
        refetch()
      }
    })
    }
    

  const handleMakeSurveyor = (user) => {
    axiosSecure.patch(`/users/surveyor/${user._id}`).then((res) => {
      console.log(res.data)
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: `${user.name} is now Surveyor`,
          showConfirmButton: false,
          timer: 1500,
        })
        refetch()
      }
    })
  }

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            })
            refetch()
          }
        })
      }
    })
  }
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl">All Users</h2>
        <h2 className="text-2xl">Total Users : {users?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role(Admin)</th>
              <th>Role(Surveyor)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <>
                      <AdminPanelSettingsIcon
                        sx={{ color: "green", fontSize: 25 }}
                      ></AdminPanelSettingsIcon>
                    </>
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)} className="">
                      <PeopleAltIcon
                        sx={{ color: "orange", fontSize: 25 }}
                      ></PeopleAltIcon>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "surveyor" ? (
                    <>
                      <FaUserTag
                        className="text-2xl text-blue-500"
                      ></FaUserTag>
                    </>
                  ) : (
                    <button
                      onClick={() => handleMakeSurveyor(user)}
                      className=""
                    >
                      <PeopleAltIcon
                        sx={{ color: "orange", fontSize: 25 }}
                      ></PeopleAltIcon>
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user)} className="">
                    <DeleteIcon
                      sx={{ color: "red", fontSize: 25 }}
                    ></DeleteIcon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
