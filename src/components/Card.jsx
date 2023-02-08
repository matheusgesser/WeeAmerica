import React from "react";

// ? Style
import "./Card.css"

export default function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img src={props.img} alt="Card Image" />
      <section className="info">
        <section className="geo">
          <span className="material-symbols-rounded">location_on</span>
          <span className="location">{props.location}</span>
          <a href={props.mapslink} target="_blank">View on Google Maps</a>
          <span className="material-symbols-rounded">map</span>
        </section>
        <strong className="title">{props.title}</strong>
        <div className="title-rate">
          <span className="material-symbols-rounded">star</span>
          <span className="rate">{props.rate}</span>
        </div>
        <p className="description">{props.description}</p>
        <span className="price"><strong>{`$${props.price}`}</strong>{` /night`}</span>
      </section>
    </div>
  )
}