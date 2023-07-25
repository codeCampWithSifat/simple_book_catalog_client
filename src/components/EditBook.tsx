/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useEditBookMutation } from "../redux/feature/book/bookSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  console.log(id);
  const [editbook] = useEditBookMutation();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    const options = {
      id,
      title: data.title,
      author: data.author,
      genre: data.genre,
      publicationDate: data.publicationDate,
      image: data.image,
      review: data.review,
    };
    editbook(options);
    navigate("/");
    // console.log(data.author);
  };
  return (
    <div className="">
      <h2 className="text-indigo-800 text-3xl text-center font-bold">
        Edit Your Book Information
      </h2>
      <form
        className="grid grid-cols-1 justify-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Title"
          className="input input-bordered w-1/2 my-3"
          {...register("title", { required: true })}
        />
        <input
          placeholder="Author"
          className="input input-bordered w-1/2 my-3"
          {...register("author", { required: true })}
        />
        <input
          placeholder="Genre"
          className="input input-bordered w-1/2 my-3"
          {...register("genre", { required: true })}
        />
        <input
          placeholder="Publication Date"
          className="input input-bordered w-1/2 my-3"
          {...register("publicationDate", { required: true })}
        />
        <input
          placeholder="Image Url Link"
          className="input input-bordered w-1/2 my-3"
          {...register("image", { required: true })}
        />
        <input
          placeholder="Review"
          className="input input-bordered w-1/2 my-3"
          {...register("review", { required: true })}
        />
        <input
          className="input input-bordered w-1/2 my-3 btn-primary"
          type="submit"
          value="Edit Book"
        />
      </form>
    </div>
  );
};

export default EditBook;
