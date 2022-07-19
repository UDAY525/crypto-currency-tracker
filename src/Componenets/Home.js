import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=EUR"
      )
      .then((res) => setData(res.data.coins));
  }, []);

  return (
    <>
      <div className="header">
        <input type="text" onChange={handler} placeholder="search for crypto" />
      </div>
      {data.length > 0 && (
        <div className="grid-container">
          {data
            .filter((crypto) =>
              crypto.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((crypto) => (
              <div>
                <ImgCard
                  key={crypto.id}
                  name={crypto.name}
                  url={crypto.icon}
                  rank={crypto.rank}
                  price={crypto.price}
                  marketCap={crypto.marketCap}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default Home;
