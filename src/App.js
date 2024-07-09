
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heading from './Components/Heading/Heading';
import Images from './Components/Images/Images';
import Pages from './Components/Page/Pages';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Heading/>
      <Images/>
      <Pages/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
