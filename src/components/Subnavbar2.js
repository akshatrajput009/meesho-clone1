import React, { useState } from 'react'

export default function Subnavbar2() {
const[displayWomenDress,setDisplayWomenDress] =useState("none");
const[displayWomenWestern,setDisplayWomenWestern] =useState("none");
const[displayMen,setDisplayMen] =useState("none");
const[displayKids,setDisplayKids] =useState("none");
const[displayHome,setDisplayHome] =useState("none");
const[displayBeauty,setDisplayBeauty] =useState("none");
const[displayJewel,setDisplayJewel] =useState("none");
const[displayBags,setDisplayBags] =useState("none");
const[displayElectronics,setDisplayElectronics] =useState("none");
    const handleSubnavbarDropdown = (event)=>{
      
     if(event.target.innerHTML==="Women Dress"){
      setDisplayWomenDress("block");
      setDisplayWomenWestern("none");
      setDisplayMen("none");
      setDisplayKids("none");
      setDisplayHome("none");
      setDisplayBeauty("none");
      setDisplayJewel("none");
      setDisplayBags("none");
      setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Women Western"){
      setDisplayWomenDress("none");
        setDisplayWomenWestern("block");
        setDisplayMen("none");
        setDisplayKids("none");
        setDisplayHome("none");
        setDisplayBeauty("none");
        setDisplayJewel("none");
        setDisplayBags("none");
        setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Men"){
      setDisplayWomenDress("none");
        setDisplayWomenWestern("none");
        setDisplayMen("block");
        setDisplayKids("none");
        setDisplayHome("none");
        setDisplayBeauty("none");
        setDisplayJewel("none");
        setDisplayBags("none");
        setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Kids"){
      setDisplayWomenDress("none");
        setDisplayWomenWestern("none");
        setDisplayMen("none");
        setDisplayKids("block");
        setDisplayHome("none");
        setDisplayBeauty("none");
        setDisplayJewel("none");
        setDisplayBags("none");
        setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Home &amp; Kitchen"){
      setDisplayWomenDress("none");
        setDisplayWomenWestern("none");
        setDisplayMen("none");
        setDisplayKids("none");
        setDisplayHome("block");
        setDisplayBeauty("none");
        setDisplayJewel("none");
        setDisplayBags("none");
        setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Beauty &amp; Health"){
      setDisplayWomenDress("none");
      setDisplayWomenWestern("none");
      setDisplayMen("none");
      setDisplayKids("none");
      setDisplayHome("none");
      setDisplayBeauty("block");
      setDisplayJewel("none");
      setDisplayBags("none");
      setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Jewellery &amp; Accessories"){
      setDisplayWomenDress("none");
        setDisplayWomenWestern("none");
        setDisplayMen("none");
        setDisplayKids("none");
        setDisplayHome("none");
        setDisplayBeauty("none");
        setDisplayJewel("block");
        setDisplayBags("none");
        setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Bags &amp; Footwear"){
      setDisplayWomenDress("none");
      setDisplayWomenWestern("none");
      setDisplayMen("none");
      setDisplayKids("none");
      setDisplayHome("none");
      setDisplayBeauty("none");
      setDisplayJewel("none");
      setDisplayBags("block");
      setDisplayElectronics("none");
     }else if(event.target.innerHTML==="Electronics"){
      setDisplayWomenDress("none");
      setDisplayWomenWestern("none");
      setDisplayMen("none");
      setDisplayKids("none");
      setDisplayHome("none");
      setDisplayBeauty("none");
      setDisplayJewel("none");
      setDisplayBags("");
      setDisplayElectronics("block");
     }
    }

    const removeSubnavbarDropdown = ()=>{
     
      setDisplayWomenDress("none");
        setDisplayWomenWestern("none");
        setDisplayMen("none");
        setDisplayKids("none");
        setDisplayHome("none");
        setDisplayBeauty("none");
        setDisplayJewel("none");
        setDisplayBags("none");
        setDisplayElectronics("none");
    }
  return (
    <div>

      <div className="row1 bar-row">
        
      <div className="column col-bar-padding" onMouseOver={handleSubnavbarDropdown}    > 
               Women Dress
               </div>
               <div className="subnavbar-dropdown"onMouseOver={handleSubnavbarDropdown} onMouseLeave={removeSubnavbarDropdown}  style={{display :displayWomenDress }}>
            <div className="xrow">
                <div className="e-dropdown-content ">
                  <p row1-p>All Women Ethnic</p>
                  <a className="e-dropdown-link" href="app.js">View All</a>
                </div> 
             
               <div className="e-dropdown-content e-dropdown-content2">
                  <p>Sarees</p>
                  <a className="e-dropdown-link" href="app.js">Silk Sarees</a>
             
                  <a className="e-dropdown-link" href="app.js">Cotton Silk Sarees</a>
             
                  <a className="e-dropdown-link" href="app.js">Cotton Sarees</a>
                  
                  <a className="e-dropdown-link" href="app.js">Georgette Sarees</a>
                  <a className="e-dropdown-link" href="app.js">Chiffon Sarees</a>
                  <a className="e-dropdown-link" href="app.js">Satin Sarees</a>
              
              </div> 
               <div className="e-dropdown-content ">
                  <p>Kurtis</p>
                  <a className="e-dropdown-link" href="app.js">All Kurti</a>
             
                  <a className="e-dropdown-link" href="app.js">Anarkali Kurti</a>
             
                  <a className="e-dropdown-link" href="app.js">Rayon Kurti</a>
                
              
              </div> 
              
               <div className="e-dropdown-content e-dropdown-content2">
                  <p>Other Ethnic</p>
                  <a className="e-dropdown-link" href="app.js">Blouses</a>
             
                 
                </div> 
          </div>
        </div>
       
        
               <div className="column col-bar-padding" onMouseOver={handleSubnavbarDropdown} >
              Women Western
               </div>
               <div className="subnavbar-dropdown" onMouseLeave={removeSubnavbarDropdown} style={{display :displayWomenWestern }} >
        <div className="xrow">
            
         
           <div className="e-dropdown-content e-dropdown-content2">
              <p>Bottomwear</p>
              <a className="e-dropdown-link" href="app.js">Jeans</a>
         
              <a className="e-dropdown-link" href="app.js">Jeggings</a>
         
              <a className="e-dropdown-link" href="app.js">Palazzos</a>
              
              <a className="e-dropdown-link" href="app.js">Shorts</a>
              <a className="e-dropdown-link" href="app.js">Skirts</a>
              
          
          </div> 
           <div className="e-dropdown-content ">
              <p>Topwear</p>
              <a className="e-dropdown-link" href="app.js">Tops</a>
         
              <a className="e-dropdown-link" href="app.js">Dresses</a>
         
              <a className="e-dropdown-link" href="app.js">Jackets</a>
            
          
          </div> 
          
           <div className="e-dropdown-content e-dropdown-content2">
              <p>sleepwear</p>
              <a className="e-dropdown-link" href="app.js">Night Suit</a>
         
             
            </div> 
            </div>
        </div>
       
               <div className="column col-bar-padding" onMouseOver={handleSubnavbarDropdown} >
               Men
               </div>
               <div className="subnavbar-dropdown" onMouseLeave={removeSubnavbarDropdown} style={{display :displayMen }}>
        <div className="xrow">
            
         
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Bottomwear</p>
               <a className="e-dropdown-link" href="app.js">Jeans</a>
          
               <a className="e-dropdown-link" href="app.js">Pants</a>
          
               <a className="e-dropdown-link" href="app.js">Trousers</a>
               
               
               
           
           </div> 
            <div className="e-dropdown-content ">
               <p>Topwear</p>
               <a className="e-dropdown-link" href="app.js">T-Shirts</a>
          
               <a className="e-dropdown-link" href="app.js">Shirts</a>
          
               <a className="e-dropdown-link" href="app.js">All TopWear</a>
             
           
           </div> 
           
            <div className="e-dropdown-content e-dropdown-content2">
               <p>sleepwear</p>
               <a className="e-dropdown-link" href="app.js">Night Suit</a>
          
              
             </div> 
             </div>
        </div>
        
               <div className="column col-bar-padding"onMouseOver={handleSubnavbarDropdown}  >
               Kids
               </div>
               <div className="subnavbar-dropdown" onMouseLeave={removeSubnavbarDropdown} style={{display :displayKids }}>
        <div className="xrow">
                <div className="e-dropdown-content ">
                  <p row1-p>Boys & Girls 2+ Years</p>
                  <a className="e-dropdown-link" href="app.js">Dresses</a>
                </div> 
             
               <div className="e-dropdown-content e-dropdown-content2">
                  <p>Infant 0-2 Years</p>
                  <a className="e-dropdown-link" href="app.js">Rompers</a>
             
                 
              
              </div> 
               <div className="e-dropdown-content ">
                  <p>Toys & Accessories</p>
                  <a className="e-dropdown-link" href="app.js">Soft Toys</a>
             
                  <a className="e-dropdown-link" href="app.js">Footwear</a>
             
                  <a className="e-dropdown-link" href="app.js">Watches</a>
                  <a className="e-dropdown-link" href="app.js">Bags & Backpacks</a>
                  <a className="e-dropdown-link" href="app.js">All Baby Care</a>
                  <a className="e-dropdown-link" href="app.js">Stationery</a>
                
              
              </div> 
              
               
          </div>
        </div>
               <div className="column col-bar-padding"onMouseOver={handleSubnavbarDropdown}  >
               Home & Kitchen
               </div>
               <div className="subnavbar-dropdown" onMouseLeave={removeSubnavbarDropdown} style={{display :displayHome }}>
         <div className="xrow">
            
         
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Home Furnishing</p>
               <a className="e-dropdown-link" href="app.js">Bedsheets</a>
          
               <a className="e-dropdown-link" href="app.js">Doormats</a>
          
               <a className="e-dropdown-link" href="app.js">Curtains & Sheers</a>
               <a className="e-dropdown-link" href="app.js">Cushions & Cushion Covers</a>
               <a className="e-dropdown-link" href="app.js">Mattress Protectors</a>

               
               
               
           
           </div> 
            <div className="e-dropdown-content ">
               <p>Home Decor</p>
               <a className="e-dropdown-link" href="app.js">Stickers</a>
          
               <a className="e-dropdown-link" href="app.js">Clocks</a>
          
               <a className="e-dropdown-link" href="app.js">Show Pieces</a>
             
           
           </div> 
           
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Kitchen & Dining</p>
               <a className="e-dropdown-link" href="app.js">Kitchen Storage</a>
          
              
             </div> 
             </div>
        </div>
               <div className="column col-bar-padding" onMouseOver={handleSubnavbarDropdown} >
               Beauty & Health
               </div>
               <div className="subnavbar-dropdown" onMouseLeave={removeSubnavbarDropdown} style={{display :displayBeauty }}>
        <div className="xrow">
            
         
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Make up</p>
               <a className="e-dropdown-link" href="app.js">Face</a>
          
               <a className="e-dropdown-link" href="app.js">Eyes</a>
          
               <a className="e-dropdown-link" href="app.js">Lips</a>
               <a className="e-dropdown-link" href="app.js">Nails</a>
              

               
               
               
           
           </div> 
            <div className="e-dropdown-content ">
               <p>Wellness</p>
               <a className="e-dropdown-link" href="app.js">Sanitizers</a>
          
               <a className="e-dropdown-link" href="app.js">Oral Care</a>
          
              
             
           
           </div> 
           
            <div className="e-dropdown-content e-dropdown-content2">
               <p>SkinCare</p>
               <a className="e-dropdown-link" href="app.js">Deodorants</a>
          
              
             </div> 
             </div>
        </div>
               <div className="column col-bar-padding"onMouseOver={handleSubnavbarDropdown}  >
           
               Jewellery & Accessories
               </div>
               <div className="subnavbar-dropdown"onMouseLeave={removeSubnavbarDropdown}  style={{display :displayJewel }}>
        <div className="xrow">
            
         
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Jewellery</p>
               <a className="e-dropdown-link" href="app.js">Jewellery Set</a>
          
               <a className="e-dropdown-link" href="app.js">Earrings</a>
          
               <a className="e-dropdown-link" href="app.js">Mangalsutras</a>
               <a className="e-dropdown-link" href="app.js">Studs</a>
               <a className="e-dropdown-link" href="app.js">Bangles</a>
               <a className="e-dropdown-link" href="app.js">Necklaces</a>
               <a className="e-dropdown-link" href="app.js">Rings</a>
               <a className="e-dropdown-link" href="app.js">Anklets</a>
               

               
               
               
           
           </div> 
            <div className="e-dropdown-content ">
               <p>Women Accessory</p>
               <a className="e-dropdown-link" href="app.js">Bags</a>
          
               <a className="e-dropdown-link" href="app.js">Watches</a>
          
               <a className="e-dropdown-link" href="app.js">Sunglasses</a>
             
           
           </div> 
           
           
             </div>
        </div>
               <div className="column col-bar-padding"onMouseOver={handleSubnavbarDropdown}  >
               Bags & Footwear
               </div>
               <div className="subnavbar-dropdown" onMouseLeave={removeSubnavbarDropdown} style={{display :displayBags }}>
        <div className="xrow">
            
         
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Women Bags</p>
               <a className="e-dropdown-link" href="app.js">All Women Bags</a>
          
               <a className="e-dropdown-link" href="app.js">HandBag</a>
          
               <a className="e-dropdown-link" href="app.js">Clutches</a>
               <a className="e-dropdown-link" href="app.js">Slingbags</a>
              

               
               
               
           
           </div> 
            <div className="e-dropdown-content ">
               <p>Men Bags</p>
               <a className="e-dropdown-link" href="app.js">All Menbags</a>
          
               <a className="e-dropdown-link" href="app.js">Men Wallets</a>
          
              
             
           
           </div> 
           
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Women Footwear</p>
               <a className="e-dropdown-link" href="app.js">All Women Footwear</a>
               <a className="e-dropdown-link" href="app.js">Flats</a>
               <a className="e-dropdown-link" href="app.js">Bellies</a>
               <a className="e-dropdown-link" href="app.js">Jutties</a>
            </div> 

            <div className="e-dropdown-content ">
               <p>Men Footwear</p>
               <a className="e-dropdown-link" href="app.js">Sports Shoes</a>
               <a className="e-dropdown-link" href="app.js">Formal Shoes</a>
               <a className="e-dropdown-link" href="app.js">Casual Shoes</a>
               <a className="e-dropdown-link" href="app.js">Sandals</a>
            </div> 

             </div>
        </div>
               <div className="column col-bar-padding"onMouseOver={handleSubnavbarDropdown}  >
               Electronics
               </div>
               <div className="subnavbar-dropdown" onMouseLeave={removeSubnavbarDropdown} style={{display :displayElectronics }}>
        <div className="xrow">
            
         
            <div className="e-dropdown-content e-dropdown-content2">
               <p>Mobile & Accessories</p>
               <a className="e-dropdown-link" href="app.js">All Mobile & Accessories</a>
          
               <a className="e-dropdown-link" href="app.js">Smart Watches</a>
          
               <a className="e-dropdown-link" href="app.js">Mobile Holders</a>
               <a className="e-dropdown-link" href="app.js">Mobile cases and covers</a>
               </div> 
            <div className="e-dropdown-content ">
               <p>Appliances</p>
               <a className="e-dropdown-link" href="app.js">All Appliances</a>
          
               <a className="e-dropdown-link" href="app.js">Grooming</a>
          
               <a className="e-dropdown-link" href="app.js">Home Appliances</a>
             
           
           </div> 
           
           
             </div>
        </div>
      </div>
        
       
        
        
       
        
       
       
    </div>
  )
}
