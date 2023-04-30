import React from "react";
import './featuredProperties.css';
import useFetch from "../../hooks/useFetch";
import { API } from "../global";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(`${API}/hotels?featured=true&limit=4`);
  return (
    <div className="fp">
    {loading ? (
      "Loading"
    ) : (
      <>
        {data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img
              src={item.photos[0].src}
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from Rs.{item.cheapestPrice}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
        ))}
      </>
    )}
  </div>
  );
};

export default FeaturedProperties;
