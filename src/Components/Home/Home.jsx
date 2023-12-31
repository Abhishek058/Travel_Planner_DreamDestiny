import React from "react";
import "./home.css";
import video from "../../asset/vid1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>{" "}
      <video src={video} autoPlay muted loop type="video/mp4"></video>
      <div className="homeContent">
        <div className="textDiv">
          <span className="smallText">Our package</span>
          <h1 className="homeTitle">Search your Holidays</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon"></GrLocation>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"></HiFilter>
            <span>MORE FILTER</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcon">
            <FiFacebook className="icon"></FiFacebook>
            <FaTripadvisor className="icon"></FaTripadvisor>
            <AiOutlineInstagram className="icon"></AiOutlineInstagram>
          </div>
          <div className="leftIcon">
            <BsListTask className="icon"></BsListTask>
            <TbApps className="icon"></TbApps>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
