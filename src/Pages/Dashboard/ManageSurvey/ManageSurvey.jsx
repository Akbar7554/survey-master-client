import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSurvey from "../../../hooks/useSurvey";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete"
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline"

const ManageSurvey = () => {
    const [survey, refetch] = useSurvey()
    console.log(survey);
    const AxiosSecure = useAxiosSecure()
    const handleDeleteItem = (item) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await AxiosSecure.delete(`/survey/${item._id}`)
          // console.log(res.data)
          if (res?.data?.deletedCount > 0) {
            refetch()

            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted successfully!`,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            })
          }
        }
      })
    }
    return (
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead className="bg-orange-500">
            <tr className="text-base text-white text-center">
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Publish Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {survey.map((item, index) => (
              <tr key={item._id} className="text-center">
                <td>{index + 1}.</td>
                
                <td>{item.title}</td>
                <td className="w-48">{item.description.slice(0, 50)}</td>
                <td> {item.category}</td>
                <td> {item?.set?.createdAt}</td>
                <td>
                  <Link to={`/dashboard/updateSurvey/${item._id}`}>
                    <DriveFileRenameOutlineIcon
                      sx={{ color: "green", fontSize: 25, marginLeft: 2 }}
                    ></DriveFileRenameOutlineIcon>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDeleteItem(item)} className="">
                    <DeleteIcon
                      sx={{
                        color: "red",
                        fontSize: 25,
                        textAlign: "center",
                        marginLeft: 2,
                      }}
                    ></DeleteIcon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
};

export default ManageSurvey;