import React from 'react'

var slideMovie = [
    "/Drive.png",
"/fleetHealth.png",
"/inspect.png",
"https://vecros.com/static/media/auto-ops.2ffceb9014c575eaa003.jpg",



];
export const Slider = () => {
    let [imageInd,setImageInd] = React.useState(0)
    React.useEffect(()=>{
        slide()
    },[])
    
    const image={
        borderTop : imageInd==0 ? "2px solid black" : null,
     
    }
   
    const image1={
       
        borderTop : imageInd==1 ? "2px solid black" : null,
        
    }
    const image2={
      
       
        borderTop : imageInd==2 ? "2px solid black" : null,
        
    }
    const image3={
        borderTop : imageInd==3 ? "2px solid black" : null,
    }
    
    function slide() {
        setInterval(slideShow, 1500);
    }
    
    function slideShow() {
        imageInd = imageInd % 4;
        console.log(imageInd)

    setImageInd(imageInd++)
}
  return (
    <div>
        <div >
            <div style={{margin : "auto",width:"65%",marginTop : "50px",marginBottom : "50px"}}>
                <div style={{textAlign : "center",marginBottom : "30px"}}>
                <h1 style={{fontSize : "45px",fontWeight : "600"}}>Vecros Cloud Service</h1>

                <p>Connected operations from anywhere in the world</p>
                </div>

            <img src={slideMovie[imageInd]} alt="" height="556px" width="950px" />

            </div>
            <div style={{width : "70%",margin : "auto",display : "flex",justifyContent : "space-around"}}>
                <p style={image}>DRIVE</p>
                <p style={image1}>FLEET OPS</p>
                <p style={image2}>INSPECT</p>
                <p style={image3}>WORKFLOWS</p>
            </div>
        </div>
    </div>
  )
}
