import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ handleSelect, mood }) {
  const navigate = useNavigate();

  // push to mood pages
  const pushRoute = () => {
    navigate(`/${mood}`);
  };

  // push to favorites
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
          <option hidden defaultValue={'mood'}>
            what kind of bored?
          </option>
          <option
            value={"chill"}
            style={{ fontFamily: "BhuTuka Expanded One" }}>
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
      <div className="parent-buttons">
        <img className="home-page-buttons" onClick={pushRoute} src="https://res.cloudinary.com/april-skrine/image/upload/v1646924041/Phase%203%20Project/activitybutton2-removebg-preview_ebspw0.png"/>
        <img className="home-page-buttons" onClick={pushRouteFav} style={{marginTop: '70px', marginRight: '50px'}} src="https://res.cloudinary.com/april-skrine/image/upload/v1646924041/Phase%203%20Project/favbutton2-removebg-preview_z90ue0.png"/>
      </div>
    </div>
  );
}

export default Home;
