import "./about.css";
import countryData from "../api/countryData.json";
export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting fact
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {countryData.map((currElm) => {
          return (
            <div key={currElm.id} className="card">
              <div className="container-card bg-blue-box ">
                <p className="card-title">{currElm.countryName}</p>
                <p>
                  <span className="card-description">Capital: </span>
                  {currElm.capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {currElm.population}
                </p>
                <p>
                  <span className="card-description">InterstingFact:</span>
                  {currElm.interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
