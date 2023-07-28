import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/feature/user/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/allbooks">
                  <a>All Books</a>
                </Link>
              </li>
              <li>
                <Link to="/bookdetail">
                  <a>Book Detail</a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">Book Lover</a>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/allbooks">
                <a>All Books</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/bookdetail">
                <a>Book Detail</a>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <a>WishList</a>
              </Link>
            </li>
            {!user.email ? (
              <li>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </li>
            ) : (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-active btn-primary"
                >
                  Log Out
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// [
//   {
//     _id: "1",
//     author: "Sifat",
//     genre: "Bornomala",
//     publicationDate: "2021",
//     image: "https://i.ibb.co/ZN1t2RQ/Java-Script-logo.png",
//   },
//   {
//     _id: "2",
//     author: "Sayed",
//     genre: "Commerce",
//     publicationDate: "2022",
//     image: "https://i.ibb.co/k04fCtL/download-5.jpg",
//   },
//   {
//     _id: "3",
//     author: "Jhankar",
//     genre: "Adarsho",
//     publicationDate: "2023",
//     image: "https://i.ibb.co/qWwgKZN/download-4.jpg",
//   },
//   {
//     _id: "4",
//     author: "Rabbil Hasan",
//     genre: "Ostad",
//     publicationDate: "2024",
//     image: "https://i.ibb.co/BZXBqzN/atomic-kotlin.webp",
//   },
//   {
//     _id: "5",
//     author: "Hasin Hayder",
//     genre: "Haider",
//     publicationDate: "2025",
//     image: "https://i.ibb.co/SxTDWJX/download-2.jpg",
//   },
//   {
//     _id: "6",
//     author: "Sumit Shah",
//     genre: "Learn With Sumit",
//     publicationDate: "2025",
//     image: "https://i.ibb.co/xYkYGLQ/download.jpg",
//   },
//   {
//     _id: "7",
//     author: "Foyzul Karim",
//     genre: "Foyzul karim",
//     publicationDate: "2024",
//     image: "https://i.ibb.co/x3SsGFk/download-1.jpg",
//   },

//   {
//     _id: "8",
//     author: "Hm Nayem",
//     genre: "Stack Learner",
//     publicationDate: "2023",
//     image:
//       "https://i.ibb.co/G54QxxW/png-transparent-react-native-javascript-mobile-app-development-github-symmetry-mobile-app-developmen.png",
//   },
// ];
