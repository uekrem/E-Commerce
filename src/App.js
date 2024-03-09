import { Home } from './components/Home.js';
import { ProductDetail } from './components/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import { Basket } from './components/Basket.js';
import { Footer } from './components/Footer.js';
import { NavBar } from './components/NavBar.js';
import { Checkout } from './components/Checkout.js';
import { MyOrders } from './components/MyOrders.js';
import { MyFavorites } from './components/MyFavorites.js';
import { SearchResults } from './components/SearchResults.js';
import { ChoiceToEnter } from './components/ChoiceToEnter.js';
import { Profile } from './components/Profile.js';
import { Provider } from './context/Context.js';
import './css/footer.css';
import './css/navBar.css';
import "./css/orderCard.css"
import "./css/wideCard.css"
import "./css/choiceToEnter.css"
import "./css/thumbGallery.css"
import "./css/rowsBoxes.css"
import "./css/multiCard.css"
import "./css/basketCard.css"
import "./css/basket.css"
import "./css/profile.css"
import "./css/productInfo.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

export default function App() {
  return (
    <Provider>
      <Routes>
          <Route path="/" element={ <><NavBar /><Home /><Footer /></>} />
          <Route path="/ProductDetail" element={ <><NavBar /><ProductDetail /><Footer /></> } />
          <Route path="/Basket" element={ <><NavBar /><Basket /><Footer /></> } />
          <Route path="/Payment" element={ <Checkout /> } />
          <Route path="/MyOrders" element={ <><NavBar /><MyOrders /><Footer /></> } />
          <Route path="/MyFavorites" element={ <><NavBar /><MyFavorites /><Footer /></> } />
          <Route path="/SearchResults" element={ <><NavBar /><SearchResults /><Footer /></> } />
          <Route path="/ChoiceToEnter" element={ <><NavBar /><ChoiceToEnter /><Footer /></> } />
          <Route path="/Profile" element={ <><NavBar /><Profile /><Footer /></> } />
      </Routes>
    </Provider>
  );
}
