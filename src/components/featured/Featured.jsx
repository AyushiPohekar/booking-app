import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { API } from "../global";

const Featured = () => {
  const { data, loading, error } = useFetch(
    `${API}/hotels/countByCity?cities=nagpur,delhi,chennai`
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://yometro.com/images/places/nagpur.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>nagpur</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://w.media/wp-content/uploads/chennai1-fb-IC-The-Indian-Express.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://content.r9cdn.net/rimg/dimg/0b/a6/b99dc19c-city-13827-164946c677a.jpg?crop=true&width=1020&height=498"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>chennai</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
