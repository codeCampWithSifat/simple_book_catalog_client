import { addToWishList } from "../redux/feature/book/bookwishListSlice";
import { useAppDispatch } from "../redux/hooks";
import { IBook } from "../types/bookTypes";

interface IProps {
  book: IBook;
}

const SingleBook = ({ book }: IProps) => {
  const dispatch = useAppDispatch();
  const addWishList = (book: IBook) => {
    dispatch(addToWishList(book));
    console.log(book);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={book.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Author : {book.author}</h2>
        <h2 className="card-title">Title : {book.title}</h2>
        <p>Genre : {book.genre}</p>
        <p>Publication Date : {book.publicationDate}</p>
        <button onClick={() => addWishList(book)} className="btn btn-primary">
          Add Wish List
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
