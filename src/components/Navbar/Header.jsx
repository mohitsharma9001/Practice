import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div style={{display:"flex",backgroundColor:"#0c0c0c", color:"white",alignItems:"center", justifyContent:"space-between",padding:"15px",position:"fixed",width:"100%"}}>
        <div style={{marginLeft:"50px"}}>
        <img width={"120px"} src='https://vecros.com/static/media/logo.ffda51cadb3fb4901613.png' />
        </div>

        <div style={{display:"flex", gap:"40px", marginRight:"50px"}}>
          
          <div style={{marginTop:"10x"}}>JETPEX AUTONOMY</div>
          <div className="dropdown">
  <button className="dropbtn">PRODUCTS</button>
  <div className="dropdown-content">
    <a href="/">ATHERA</a>
    <a href="/">VECROS CLOUD</a>
    
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">SOLUTIONS</button>
  <div className="dropdown-content">
    <a href="/">Oil and Gas</a>
    <a href="/">PUBLIC SAFETY</a>
    <a href="/">CONSTRUCTION</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">RESOURCES</button>
  <div className="dropdown-content">
    <a href="/">NEWS</a>
    <a href="/">EVENTS</a>
    <a href="/">GALLERY</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">SUPPORT</button>
  <div className="dropdown-content">
    <a href="/">FAQ</a>
    <a href="/">CONTACT SUPPORT</a>
    <a href="/">TRAINING SCHOOL</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">ABOUT</button>
  <div className="dropdown-content">
    <a href="/">TEAM</a>
    <a href="/">CAREERS</a>
   
  </div>
</div>
          <button style={{backgroundColor : "#005662",color:"white",borderRadius:"5px",fontSize:"14px",height:"32.5px",width:"100px"}}>CONTACT US</button>
        </div>
    </div>
  )
}

export default Header