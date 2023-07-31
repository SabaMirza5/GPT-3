import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Possibilitiesection from './components/Possibilitiesection';
import Featuresection from './components/Featuresection';
import Imaginationsection from './components/Imaginationsection';
import Happeningsection from './components/Happeningsection';
import Footer from './components/Footer';

function App() {
  return (
  <>
  <Navbar/>
  <Header/>
  <Possibilitiesection/>
  <Featuresection/>
  <Imaginationsection/>
  <Happeningsection/>
  <Footer/>
  </>
  );
}

export default App;
