import React, { useState } from 'react'

export default function Products() {
const[display,setDisplay]= useState("none");
const[displayGender,setDisplayGender]= useState("none");
const[displayColor,setDisplayColor]= useState("none");
const[displayFabric,setDisplayFabric]= useState("none");
const[displayOxfords,setDisplayOxfords]= useState("none");
const[displayPrice,setDisplayPrice]= useState("none");

const handleDropdown=()=>{
  if (display==="none"){
    setDisplay("");
  }else{
    setDisplay("none");
  }
}

const handleDropdownGender=()=>{
  if (displayGender==="none"){
    setDisplayGender("");
  }else{
    setDisplayGender("none");
  }
}
const handleDropdownColor=()=>{
  if (displayColor==="none"){
    setDisplayColor("");
  }else{
    setDisplayColor("none");
  }
}
const handleDropdownFabric=()=>{
  if (displayFabric==="none"){
    setDisplayFabric("");
  }else{
    setDisplayFabric("none");
  }
}

const handleDropdownOxfords=()=>{
  if (displayOxfords==="none"){
    setDisplayOxfords("");
  }else{
    setDisplayOxfords("none");
  }
}
  
const handleDropdownPrice=()=>{
  if (displayPrice==="none"){
    setDisplayPrice("");
  }else{
    setDisplayPrice("none");
  }
}
  return (
    <div>
      <div className ="products" style={{ height:"900px"}}>
        <div className="category" >
          <div className="sort">
          Sort by :
          </div>
          <div className="product-border">
        <div className="filter">
        FILTERS
        <p style={{fontSize : "12px" , fontWeight:400, color:"rgb(153, 153, 153)"}}>1000 + products</p>
        </div>
        <hr></hr>
        <div className="pro-category">
        <p onClick={handleDropdown}>Category</p>
        </div>
        <div className= "pro-category-dropdown" style={{display : display}}>



        <div className="form-check ">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
  Analog Watches
  </label>
  </div>

  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
  Bags & Backpacks
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
  Caps & Hats
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
  Electronic Toys
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
  Jackets % Coats
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Jeans
  </label>
  </div>
  
        
        </div>
        <hr></hr>
        <div className="pro-category" >
        <p onClick={handleDropdownGender}>Gender</p>
        </div>
        <div className= "pro-category-dropdown" style={{display : displayGender}}>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Men
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Women
  </label>
  </div>

          </div>
          <hr></hr>
        <div className="pro-category">
        <p onClick={handleDropdownFabric}>Fabric</p>
        </div>
        <div className= "pro-category-dropdown" style={{display : displayFabric}}>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Cotton
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Polyester
  </label>
  </div>

  
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Silk
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Wool
  </label>
  </div>
  </div>
  <hr></hr>
        <div className="pro-category">
        <p onClick={handleDropdownOxfords}>Oxfords</p>
        </div>
        <div className= "pro-category-dropdown" style={{display : displayOxfords}}>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Heels
  </label>
  </div>
  </div>
  <hr></hr>
        <div className="pro-category">
        <p onClick={handleDropdownColor}>Color</p>
        </div>
        
        <div className= "pro-category-dropdown" style={{display : displayColor}}>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Black
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Red
  </label>
  </div>

  
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Blue
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Brown
  </label>
  </div>
 
        </div>
        <hr></hr>
        <div className="pro-category">
        <p onClick={handleDropdownPrice}>Price</p> 
        </div>
        <div className= "pro-category-dropdown" style={{display : displayPrice}}>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Below Rs 100
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Rs 100 - Rs 500
  </label>
  </div>

  
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Rs 500 - Rs 1000
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" for="flexCheckDefault">
   Above Rs 1000
  </label>
  </div>
  </div>
  
        </div>
        
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div className="product-gallery" >
<div className="pro-show">
  <div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/249402736/a1hfj_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹393
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
4.7 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>
<div className="pro-show">
<div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/152823532/tjmx2_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹200
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
4.5 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>

<div className="pro-show">
<div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/109798766/mnjia_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹399
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
4.2 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>

<div className="pro-show">
<div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/258509996/kqgcb_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹205
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
3 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>
 










 <div className="pro-show">
 <div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/152597956/cyuvd_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹150
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
4.8 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>
<div className="pro-show">
<div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/117525209/c60tu_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹489
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
2.6 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>
<div className="pro-show">
<div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/138549014/zo795_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹280
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
4.6 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>
<div className="pro-show">
<div className="pro-border">
<div className="pro-img">
<img className="pro-img-style" src='https://images.meesho.com/images/products/41762967/s7ivr_400.webp' alt="product"></img>
</div>
<div className="pro-detail">
<div className="pro-link">
<a href= "app.js">Link to the product</a>
</div>
<div className="pro-price">
₹156
</div>
<div className="pro-delivery">
  <div className="pro-delivery-styling">
Free Delivery
</div>
</div>
<div className="pro-ratings">
  <div className="pro-ratings-styling">
3.9 <i className="fa-sharp fa-solid fa-star fa-2xs" ></i>
</div>
</div>
</div>
</div>
</div>
        </div>

      </div> 
    </div>
  )
}
