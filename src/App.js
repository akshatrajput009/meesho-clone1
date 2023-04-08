
import './App.css';
import ForMobile from './components/ForMobile';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Promotion from './components/Promotion';
import Subnavbar2 from './components/Subnavbar2';

function App() {
  return (
  <>
  <div className="view">
    <Navbar/>
    <Subnavbar2/>
    <Promotion/>
    <Products/>
    </div>
    <ForMobile/>
  </>
  );
}

export default App;
