import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Apartments from "./components/Apartments"
import Homepg from './components/home/Homepg';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <Homepg />
      <Apartments/>
    </>
  )
}

export default App
