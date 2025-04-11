import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "./Loader";
import { CountryCard } from "./CountryCard.jsx";
import { SearchFilter } from "./SearchFilter.jsx";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setData(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterSort = (country) => {
    if (filter === "all") {
      return country;
    }
    return country.region === filter;
  };

  const filterCountry = data.filter(
    (country) => searchCountry(country) && filterSort(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        data={data}
        setData={setData}
      />
      <ul className="grid grid-four-cols">
        {filterCountry.map((curElm, index) => {
          return <CountryCard curElm={curElm} key={index} />;
        })}
      </ul>
    </section>
  );
};
