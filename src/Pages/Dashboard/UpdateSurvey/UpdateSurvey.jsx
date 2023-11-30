import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from "sweetalert2"
import { useLoaderData } from "react-router-dom"
const UpdateSurvey = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { _id, title, description, options, category, vote } =
    useLoaderData()
  const AxiosSecure = useAxiosSecure()

  const onSubmit = async (data) => {
    const mySurvey = {
      title: data.title,
      description: data.description,
      options: data.options,
      category: data.category,
      vote: data.vote,
      date: data.date,
    }

    const surveyRes = await AxiosSecure.patch(`/survey/${_id}`, mySurvey)
    console.log(surveyRes?.data)
    if (surveyRes?.data?.modifiedCount > 0) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${data.title} Updated successfully!`,
        showConfirmButton: false,
        timer: 2000,
      })
      reset()
    }
  }
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Survey Title
            </span>
          </label>
          <input
            {...register("title", { required: true })}
            defaultValue={title}
            type="text"
            placeholder="Survey Title"
            className="input input-bordered w-full"
          />
          {errors.title && (
            <span className="text-red-600">Title is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Description
            </span>
          </label>
          <textarea
            {...register("description", { required: true })}
            defaultValue={description}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <span className="text-red-600">Description is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label label-text text-lg font-semibold">
            Options:
          </label>
          <select
            {...register("options", { required: true })}
            defaultValue={options}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.options && (
            <span className="text-red-600">Options is required</span>
          )}
        </div>
        <div className="flex gap-6">
          {/* Category */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-lg font-semibold">Category</span>
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue={category}
              className="select select-bordered w-full"
              // defaultValue="default"
            >
              {" "}
              Select a Category
              <option disabled value="default">
                Select a Category
              </option>
              <option value="education">Education</option>
              <option value="productFeedback">Product Feedback</option>
              <option value="marketResearch">Market Research</option>
              <option value="customerSatisfaction">
                Customer Satisfaction
              </option>
              <option value="political">Political</option>
              <option value="financial">Financial</option>
            </select>
            {errors.options && (
              <span className="text-red-600">Options is required</span>
            )}
          </div>
        </div>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text text-lg font-semibold">Vote</span>
          </label>
          <div className="flex gap-5">
            <label htmlFor="field-wind flex">
              <input
                {...register("vote")}
                defaultValue={vote}
                type="radio"
                value="like"
                className="cursor-pointer"
                id="field-wind"
              />
              {errors.vote && (
                <span className="text-red-600">Vote is required</span>
              )}
              Like
            </label>
            <label htmlFor="field-sun">
              <input
                {...register("vote", { required: true })}
                defaultValue={vote}
                type="radio"
                value="dislike"
                className="cursor-pointer"
                id="field-sun"
              />
              {errors.vote && (
                <span className="text-red-600">Vote is required</span>
              )}
              Dislike
            </label>
          </div>
          {/* <div className="form-control w-full my-6">
            <label className="label-text text-lg font-semibold">Date:</label>
            <Controller
              {...register("date")}
              defaultValue={date}
              name="date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => <input type="date" {...field} />}
            />
            {errors.date && (
              <span className="text-red-600">Date is required</span>
            )}
          </div> */}
        </div>
        <button type="submit" className="btn bg-orange-500 text-gray-50">
          Update Survey
        </button>
      </form>
    </div>
  )
}

export default UpdateSurvey
