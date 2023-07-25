import sifat1 from "../assets/images/sifat1.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={sifat1}
            className=" lg:w-2/5 sm:w-4/5 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Selected Your Favourite Book!
            </h1>
            <p className="py-6">
              JavaScript is a programming language that adds interactivity to
              your website. This happens in games, in the behavior of responses
              when buttons are pressed or with data entry on forms; with dynamic
              styling; with animation, etc. This article helps you get started
              with JavaScript and furthers your understanding of what is
              possible.
            </p>
            <Link to="/allbooks">
              <button className="btn btn-primary">All Books</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
