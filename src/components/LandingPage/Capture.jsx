import React from 'react'
import { Button } from './Button'

export const Capture = () => {
    const h1style ={
        marginTop : "-3px",
        fontSize : "45px",
         fontWeight : "500"
        }
        const h2style ={
            fontSize : "16px",
             fontWeight : "700"
            }
   
  return (
    <div >
        <div style={{display : "flex",justifyContent : "space-around", lineHeight : "30px",padding : "2%"}}>
            <div style={{height : "328px",width : "584px"}}>
            <video src="https://vecros.com/static/media/jetpix_at_demo.71abd02da894336d8720.mp4"  width="584" height="328" borderRadius= "5px"/>
            </div>
            <div style={{width : "500px"}}>
                <h1 style={h1style}>Powered by JETPIX™</h1>
                <h2 style={h2style}>Sense the 3D world around you</h2>
                <p> <span style={{fontWeight : "700"}}>JETPIX™</span> is state of the art Operating System developed in house at VECROS.</p>
                <p style={{lineHeight : "25px"}}><span style={{fontWeight : "700"}}>JETPIX™</span> is equipped with vision aided navigation technology that enables a fail safe path planning and interactive experience to pilots and users.</p>
                <Button/>
            </div>
        </div>
    </div>
  )
}
