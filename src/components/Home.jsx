import "./Home.css";
import {Card } from './Card'
export const Home = () => {
  return (
    <div className="home">
      <div className="home_contianer"> <img className="home_img"
          src="https://m.media-amazon.com/images/I/61-fQPtiuGL._SX3000_.jpg"
          alt="img"
        />
        <div className="home_row">
          <Card/>
          <Card/>
        </div>
        <div className="home_row">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="home_row">
         <Card/> 
        </div>
      </div>
    </div>
  );
};
