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
import { RegisterIn } from './components/RegisterIn.js';
import { SignIn } from "./components/SignIn.js"
import { Profile } from './components/Profile.js';
import './css/footer.css';
import "./css/emptyPage.css"
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
import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
          <Route path="/" element={ <><NavBar /><Home /><Footer /></>} />
          <Route path="/ProductDetail" element={ <><NavBar /><ProductDetail /><Footer /></> } />
          <Route path="/Basket" element={ <><NavBar /><Basket /><Footer /></> } />
          <Route path="/Payment" element={ <Checkout /> } />
          <Route path="/MyOrders" element={ <><NavBar /><MyOrders /><Footer /></> } />
          <Route path="/MyFavorites" element={ <><NavBar /><MyFavorites /><Footer /></> } />
          <Route path="/SearchResults" element={ <><NavBar /><SearchResults /><Footer /></> } />
          <Route path="/SignIn" element={ <><NavBar /><SignIn /><Footer /></> } />
          <Route path="/RegisterIn" element={ <><NavBar /><RegisterIn /><Footer /></> } />
          <Route path="/Profile" element={ <><NavBar /><Profile /><Footer /></> } />
      </Routes>
    </Provider>
  );
}
