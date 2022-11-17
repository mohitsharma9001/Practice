
import { Autonomous } from './components/LandingPage/Autonomous';
import { Capture } from './components/LandingPage/Capture';
import Footer from './components/LandingPage/Footer';
import { Top } from './components/LandingPage/Top';
import Header from './components/Navbar/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Top/>
<Capture/>
<Autonomous/>
<Footer/>
    </div>
  );
}

export default App;
