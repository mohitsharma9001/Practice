import React from 'react'

const Header = () => {
  return (
    <div style={{display:"flex",backgroundColor:"#0c0c0c", color:"white",alignItems:"center", justifyContent:"space-between",padding:"15px"}}>
        <div style={{marginLeft:"50px"}}>
        <img width={"120px"} src='https://vecros.com/static/media/logo.ffda51cadb3fb4901613.png' />
        </div>

        <div style={{display:"flex", gap:"40px", marginRight:"50px"}}>
          <div style={{}}>JETPEX AUTONOMY</div>
          <div>PRODUCTS</div>
          <div>SOLUTIONS</div>
          <div>RESOURCES</div>
          <div>SUPPORT</div>
          <div>ABOUT</div>
          <div>CONTACT US</div>
        </div>
    </div>
  )
}

export default Header