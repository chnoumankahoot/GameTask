
import './App.css';
import Swiper from 'swiper';
import  Section from './components/Section.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init(
  {
    duration: 1000,
    once:false
  }
);
function App() {
  return (
    <div className="App">
      <Section/>
    </div>
  );
}

export default App;
