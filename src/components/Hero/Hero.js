import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/restauranfood.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero">
      <section>
        <div className="banner">
          <h1 className="display textYellow">Little Lemon</h1>
          <h2 className="subTitle">Chicago</h2>
          <p className="paragraph">
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click" className="lead">
              Reserve Table
            </button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Food plate" />
        </div>
      </section>
    </header>
  );
};

export { Hero };
