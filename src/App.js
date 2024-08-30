import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Layout from './Componenets/Layout';
import Categories from './Componenets/Categories';
import SpecificProduct from './Componenets/SpecificProduct';
import Home from './Componenets/Home';
import SpecificCategory from './Componenets/SpecificCategory';
import AllProducts from './Componenets/AllProducts';
import SignUp from './Componenets/Signup';
import Login from './Componenets/Login';
import Cart from './Componenets/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<SpecificProduct />} />
                <Route path="/allProducts" element={<AllProducts/>} />
                <Route path="/category/:item" element={<SpecificCategory/>} />
              </Route>
            </Routes>
    </div>
  );
}

export default App;
