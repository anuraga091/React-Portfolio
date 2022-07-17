import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/rageCoffee" element={<RageCoffee/>}></Route>
          <Route path="/rageCoffee/stores" element={<RageCoffeeStores/>}></Route>
          <Route path="/rageCoffee/locationdenypage" element={<LocationDenyPage/>}></Route>
          <Route path="/rageCoffee/storenotfound" element={<StoreNotFound/>}></Route>
          <Route path="/loading" element={<LoadingScreen/>}></Route> */}
          {/* <Route path="/home" element={<><Header /><Home/></>}></Route> */}
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
