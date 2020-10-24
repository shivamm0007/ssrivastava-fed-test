import React from "react";
import "./card.css";

export default function Card(props)
{

    return(<div className="card-layout">
<div className="card-parent-container">
<div className="card-image">
<img className="card-pic" src={props.pic}></img>
</div>
<div className="card-details">
<h1 className="card-details-name">{props.name}</h1>
{props.id && <h2 className="card-details-other">Id {props.id}</h2>}
<h2 className="card-details-other">Gender: {props.gender}</h2>
<h3 className="card-details-other"> Email: {props.email}</h3>
<h2 className="card-details-other"> Cell: {props.cell}</h2>
<h3  className="card-details-other"> Location: {props.city},{props.country}</h3>

</div>
</div>
    </div>)

}