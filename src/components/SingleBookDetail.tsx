import { useNavigate } from "react-router-dom";
import { IBook } from "../types/bookTypes";
import { useDeleteBookMutation } from "../redux/feature/book/bookSlice";

interface IProps {
  book: IBook;
}

const SingleBookDetail = ({ book }: IProps) => {
  const navigate = useNavigate();
  const [bookId] = useDeleteBookMutation();

  const handleEditBook = (id: string) => {
    navigate(`/editbook/${id}`);
  };

  const handleDeleteBook = (id: string) => {
    window.confirm("Are you sure you want to delete this book");
    bookId(id);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={book.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Author : {book.author}</h2>
          <p>Title : {book.title}</p>
          <p>Genre : {book.genre}</p>
          <p>Publication Date : {book.publicationDate}</p>
          <p>
            <strong className="text-indigo-800">Review</strong> : {book.review}
          </p>
          <div className="flex justify-between">
            <div>
              <button
                onClick={() => handleEditBook(book._id)}
                className="btn btn-primary mx-4"
              >
                Edit
              </button>
            </div>
            <div>
              <button
                onClick={() => handleDeleteBook(book._id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookDetail;
