import React, { useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBar from '@mkyy/mui-search-bar';
import { useSelector, useDispatch } from 'react-redux';
import { setInform } from '../stores/productHierarchy';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Toaster } from 'react-hot-toast';
import { fetchLogoutUser } from '../stores/auth';

export function NavBar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {inform} = useSelector((state) => state.productHierarchy);
    const {user, isAuthenticated} = useSelector((state) => state.authR);
    
    async function fetchData() {
        const response = await fetch('https://fakestoreapi.com/products');
        const fetchedData = await response.json();
        dispatch(setInform(fetchedData));
    };

    useEffect(() => {
        fetchData();
    }, [user]);

    function CategRoute(categ){
        const list = inform.filter((elemant) => elemant.category.includes(categ))
        navigate('/SearchResults', { state: { filterSearch: list } })
    }

    async function handleLogout(){
        dispatch(fetchLogoutUser())
        navigate("/", { replace:true });
    }

    return (
        <nav>
            <div className="redirects">
            <Toaster position='top-right' />
            <NavLink to="/"><img src='https://cdn.dsmcdn.com/web/logo/ty-web.svg' alt=""></img></NavLink>
            <SearchBar 
                style={{
                border:"1px solid black",
                }}
                width="calc(100% / 2.5)"
            />
            <div className="rightButtons">
                
                {
                    isAuthenticated ? 
                    <NavLink to="/Profile">
                        <button>
                            <PersonIcon />{user.displayName}
                        </button>
                    </NavLink> : 
                    <NavLink to="/SignIn">
                        <button>
                            <LoginIcon />Sign-In
                        </button>
                    </NavLink>
                }
                <NavLink to="/MyFavorites">
                <button>
                    <FavoriteIcon />Favorites
                </button>
                </NavLink>
                <NavLink to="/Basket">
                <button>
                    <ShoppingCartIcon />Basket
                </button>
                </NavLink>
                {
                    isAuthenticated ? 
                    <button onClick={handleLogout}>
                        <LogoutIcon />Log-Out
                    </button>
                    : 
                    ""
                }
            </div>
            </div >

            <div className="categories">
                <button onClick={() => CategRoute("electronics")}>
                    Electronic
                </button>
                <button onClick={() => CategRoute("clothing")}>
                    Clothing
                </button>
                <button onClick={() => CategRoute("jewelery")}>
                    Jewelery
                </button>
            </div>
            
    </nav>
    )
}
