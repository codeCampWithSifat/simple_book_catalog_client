import { useAppSelector } from "../redux/hooks";

const WishList = () => {
  const { books } = useAppSelector((state) => state.book);
  console.log(books);
  return (
    <div>
      <h2>Set For WishList</h2>
      <div className="grid lg:grid-cols-3 md: grid-cols-2 sm:grid-cols-1 gap-5">
        {books.map((book) => (
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Author : {book.author}</h2>
              <p>Genre : {book.genre}</p>
              <p>Genre : {book.publicationDate}</p>
              <p>Review : {book.review}</p>
              <p>Title : {book.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
