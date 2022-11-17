import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {

    const button = {
        border: "0.5px solid black",
        borderRadius: "5px",
        height: "35px",
        width: "125px",
        backgroundColor: "none"
    }
    const button1 = {
        border: "0.5px solid white",
        color: "white",
        borderRadius: "5px",
        height: "35px",
        width: "125px",
        background: "none",
        marginRight: "30px",
        marginTop: "20px"
    }
    function MouseOver(event) {
        event.target.style.background = '#282828';
        event.target.style.color = 'white'
    }
    function MouseOut(event) {
        event.target.style.background = "";
        event.target.style.color = ""
    }
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://vecros.com/static/media/vecros_cloud_image.aab00eb9d4215ce672e7.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <div style={{ marginBottom:"200px",marginLeft:"-800px"}}>

<h2 style={{ fontSize: "0px", fontWeight: "600", color: "black",marginLeft:"-100px"}}>ATHERA</h2>
<h2 style={{ fontSize: "22px", color: "white" ,marginTop : "150px" }}> <span style={{ fontSize: "60px", fontWeight: "600", color: "white"}}>ATHERA</span> <br /> <br /> Smarter Drone and Scalable oprations</h2>


<button style={button1} >WATCH VIDEO</button>
<button style={button} onMouseOver={MouseOver} onMouseOut={MouseOut}>LEARN MORE</button>


</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://vecros.com/static/media/vecros_cloud_image.aab00eb9d4215ce672e7.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://vecros.com/static/media/vecros_cloud_image.aab00eb9d4215ce672e7.png"
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;