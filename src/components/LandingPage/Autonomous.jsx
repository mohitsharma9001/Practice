import React from 'react'
import { Button } from './Button'

export const Autonomous = () => {
  return (
    <div style={{background : "black" , color : "white"}}>
        <div style={{display : "flex",justifyContent : "space-around", lineHeight : "30px",padding : "2%"}}>
            <div style={{marginTop : "30px"}}>
               <h1>Autonomous 3D Capture</h1>
               <p>Just click a button to automate your entire</p>
               <p>inspection pipeline</p>
               <Button/>
            </div>
            <div >
                <img src="https://vecros.com/static/media/autonomous-3d-capture.dd736dcca60b8f9dcc64.png" alt="" width="584" height="328"/>
            </div>
        </div>
    </div>
  )
}
