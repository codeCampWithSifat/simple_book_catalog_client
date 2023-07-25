/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import SingleBook from "../components/SingleBook";
import { IBook } from "../types/bookTypes";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/feature/book/bookSlice";
const AllBooks = () => {
  const { data: books } = useGetBooksQuery(undefined);
  const [search, setSearch] = useState<IBook[]>([]);

  const searchResult = (e: { target: { value: string } }) => {
    const option = e.target.value;
    const filterOption = books.filter(
      (book: { genre: string; title: string; author: string }) =>
        book.genre.toLowerCase().includes(option) ||
        book.title.toLowerCase().includes(option) ||
        book.author.toLowerCase().includes(option)
    );
    setSearch(filterOption);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/books`)
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center text-2xl text-indigo-800  font-bold ">
          See All Your Favourite Books
        </h2>

        <div className="flex justify-center mt-10 ">
          <div className="form-control p-5 ">
            <input
              type="text"
              placeholder="Search Your Books........."
              className="input input-bordered w-full "
              onChange={searchResult}
            />
          </div>
          <div className="mt-5">
            <Link to="/addbook">
              <button className="btn btn-primary">Add A Book</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5">
        {search?.map((book: IBook, index: number) => (
          <SingleBook book={book} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
