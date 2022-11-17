import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div style={{backgroundColor: "#202020", color:"white"}}>
      <div style={{margin:"auto",marginLeft : "700px"}}>
        <img style={{marginTop: "40px",marginBottom:"10px"}} width={"130px"} src='data:image/png;base64,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' />
      </div>

      <div style={{fontSize:"15px",textAlign:"center"}}>We are pushing state of the art technology to combine machine intelligence with robust & reliable systems for <br /> solving every day problems in ways no one has ever imagined. </div>
      
      
      <div style={{display:"flex"}}>
      {/* add social media icons here */}
          <div><img src=''/></div>
          <div><img src=''/></div>
          <div><img src=''/></div>
          <div><img src=''/></div>
      </div>

      <div style={{display:"flex",gap:"100px",margin:"auto",width:"80%",lineHeight : '20px'}}>
          <div>
            <ul style={{listStyle:"none", textAlign:"left"}} >
              <li>Products</li>
              <li>ATHERA Enterprise</li>
              <li>Vecros Cloud</li>
            </ul>
          </div>

          <div>
          <ul style={{listStyle:"none", textAlign:"left"}} >
              <li>solutions</li>
              <li>Public Safety</li>
              <li>Construction</li>
              <li>Transportation</li>
              <li>Energy</li>
            </ul>
          </div>

          <div>
          <ul style={{listStyle:"none", textAlign:"left"}} >
              <li>Resources</li>
              <li>News</li>
              <li>Enterprise Customer</li>
              <li>Events</li>
              <li>Gallery</li>
              <li>Legal</li>
            </ul>
          </div>

          <div>
          <ul style={{listStyle:"none", textAlign:"left"}} >
              <li>Support</li>
              <li>FAQS</li>
              <li>Contact Support</li>
              <li>Vecros School</li>
              
            </ul>
          </div>

          <div>
          <ul style={{listStyle:"none", textAlign:"left"}} >
              <li>About Us</li>
              <li>Team</li>
              <li>Career</li>
               
            </ul>
          </div>
      </div>
      <div style={{display:"flex",gap:"100px",margin:"auto",width:"80%"}}>
          <div>
            <ul style={{listStyle:"none", textAlign:"left"}} >
              <li>Contact Us</li>
              <li> contact@vecros.com</li>
             
            </ul>
          </div>

          <div>
          <ul style={{listStyle:"none", textAlign:"left"}} >
              <li>Subscribe</li>
              <li>Be the first to hear about our new launch.</li>
              
            </ul>
          </div>
          </div>

    </div>
  )
}

export default Footer