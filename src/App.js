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
import { AuthLoginPermission } from './components/AuthLoginPermission.js';
import { AuthNotAccess } from './components/AuthNotAccess.js';
import { AuthGhost } from './components/AuthGhost.js';
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
import "./css/loading.css"
import "./css/profile.css"
import "./css/productInfo.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./css/reviewPopup.css"
import 'swiper/css';
import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
  return (
      <Provider store={store}>
        <Routes>
            <Route path="/Payment" element={ <><Checkout /></> } />
            <Route path="/SearchResults" element={ <><NavBar /><SearchResults /><Footer /></> } />
            <Route path="/ProductDetail" element={ <AuthGhost><NavBar /><ProductDetail /><Footer /></AuthGhost> } />
            <Route path="/" element={ <AuthGhost><NavBar /><Home /><Footer /></AuthGhost>} />
            <Route path="/SignIn" element={ <AuthNotAccess><NavBar /><SignIn /><Footer /></AuthNotAccess> } />
            <Route path="/RegisterIn" element={ <AuthNotAccess><NavBar /><RegisterIn /><Footer /></AuthNotAccess> } />
            <Route path="/MyFavorites" element={ <AuthLoginPermission><NavBar /><MyFavorites /><Footer /></AuthLoginPermission> } />
            <Route path="/Basket" element={ <AuthLoginPermission><NavBar /><Basket /><Footer /></AuthLoginPermission> } />
            <Route path="/Profile" element={ <AuthLoginPermission><NavBar /><Profile /><Footer /></AuthLoginPermission> }/>
            <Route path="/MyOrders" element={ <AuthGhost><NavBar /><MyOrders /><Footer /></AuthGhost> } />
        </Routes>
      </Provider>
  );
}
