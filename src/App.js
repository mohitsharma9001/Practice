
import { Autonomous } from './components/LandingPage/Autonomous';
import { Capture } from './components/LandingPage/Capture';
// import CarouselFadeExample from './components/LandingPage/Carausol';
import Footer from './components/LandingPage/Footer';
import { Top } from './components/LandingPage/Top';
import Header from './components/Navbar/Header';
import { Orders } from './components/Navbar/Orders';


function App() {
  return (
    <div className="App">
      <Header/>
     {/* <CarouselFadeExample/> */}
      <Top/>
<Capture/>
<Autonomous/>
<Orders/>
<Footer/>
    </div>
  );
}

export default App;

