import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCard = ({ curElm }) => {
  const { flags, name, population, region, capital } = curElm;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.png} alt={flags.alt} />
        <div className="countryInfo">
          <p className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region: </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital: </span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>
              Read more <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
