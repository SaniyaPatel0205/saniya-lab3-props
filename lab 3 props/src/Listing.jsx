import React from 'react';
import "./App.css";
export default function Listing(props){
 const ratingStyle = {
    color: props.rating >=3.7 ? 'green' : 'blue',
    margin:4,
 }
 const priceStyle = {
    color:'pink',
    margin:4,
 }
 const locationStyle={
    color: 'pink',
    margin:4,
 }
const countryStyle={
    margin:4,
}
 const imgStyle={
    margin:20,
   
 }
 
 
 
 


    return(
        <div>
           <img style={imgStyle} src={props.pic}  height="250px" width="120px"/> 
           <h2 style={countryStyle}>{props.country}</h2>
           <p style={locationStyle}>{props.location}</p>
           <p style={ratingStyle}>{props.rating}★</p>
           <p style={priceStyle}>${props.price}/night</p>
        </div>
        
        
       

    )
    
}