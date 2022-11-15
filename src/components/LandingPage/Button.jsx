import React from 'react'

export const Button = () => {
    const button = {
        border : "0.5px solid black",
        borderRadius: "5px",
        height : "35px",
        width : "125px",
        backgroundColor : "none"
       }
       function MouseOver(event) {
           event.target.style.background = '#282828';
           event.target.style.color = 'white'
         }
         function MouseOut(event){
           event.target.style.background="";
           event.target.style.color = ""
         }
  return (
    <div>
        <button style={button} onMouseOver={MouseOver} onMouseOut={MouseOut}>LEARN MORE</button>
    </div>
  )
}
