import "./home.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { About } from "./About";
export const Home = () => {
  return (
    <>
      <main className="hero-section main ">
        <div className="container">
          <div className=" banner-column ">
            <div className="banner-inner ">
              <h1 className="heading-xl">
                Explore the World,One Country at aTime.
              </h1>
              <p className="paragraph">
                Discover the history ,culture ,and beauty of every nation,search
                ,and filter through countries to find the details.
              </p>

              <button className="btn btn-darken btn-inline">
                Start Exploring
                <FaLongArrowAltRight />
              </button>
            </div>
            <div className="banner-img">
              <img
                className="banner-image"
                src="world.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </main>
      <About />
    </>
  );
};
