import SingleBookDetail from "../components/SingleBookDetail";
import { useGetBooksQuery } from "../redux/feature/book/bookSlice";
import { IBook } from "../types/bookTypes";

const BookDetail = () => {
  const { data: books } = useGetBooksQuery(undefined);

  return (
    <div>
      <h3 className="text-3xl font-bold text-indigo-800 text-center">
        Your Book
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 ">
        {books?.map((book: IBook, index: number) => (
          <SingleBookDetail book={book} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BookDetail;
