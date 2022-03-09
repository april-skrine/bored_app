import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ handleSelect, mood }) {
  const navigate = useNavigate();

  const pushRoute = () => {
    navigate(`/${mood}`);
  };

  const pushRouteFav = () => {
    navigate("/favorites");
  };

  return (
    <div>
      <img
        className="img-logo"
        src="https://res.cloudinary.com/april-skrine/image/upload/v1646748604/Phase%203%20Project/boredlogo2_quh7b5.jpg"
        alt="bored logo"
      />
      <div className="center">
        <select className="select" onChange={handleSelect} value={mood}>
          <option defaultValue={"mood"}>
            what kind of bored?
          </option>
          <option
            value={"chill"}
            style={{ fontFamily: "BhuTuka Expanded One" }}
          >
            chill
          </option>
          <option value={"adventurous"} style={{ fontFamily: "impact" }}>
            adventurous
          </option>
          <option value={"hungry"} style={{ fontFamily: "shizuru" }}>
            hungry
          </option>
          <option value={"creative"} style={{ fontFamily: "pacifico" }}>
            creative
          </option>
          <option value={"hype"} style={{ fontFamily: "bangers" }}>
            hype
          </option>
        </select>
      </div>
      <div className="center">
        <button className="button" onClick={pushRoute}>
          show me things to do!
        </button>
      </div>
      <div className="center">
        <button className="button" onClick={pushRouteFav}>
          show favorites
        </button>
      </div>
    </div>
  );
}

export default Home;
