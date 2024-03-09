import React, { useContext, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchBar from '@mkyy/mui-search-bar';
import { Context } from '../context/Context.js';

export function NavBar() {

    const {inform, setInform, navigate} = useContext(Context);

    async function fetchData() {
        const response = await fetch('https://fakestoreapi.com/products');
        const fetchedData = await response.json();
        setInform(fetchedData);
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    function CategRoute(categ){
        const list = inform.filter((elemant) => elemant.category.includes(categ))
        navigate('/SearchResults', { state: { filterSearch: list } })
    }

    return (
        <nav>
            <div className="redirects">
            <NavLink to="/"><img src='https://cdn.dsmcdn.com/web/logo/ty-web.svg' alt=""></img></NavLink>
            <SearchBar 
                style={{
                border:"1px solid black",
                }}
                width="calc(100% / 2.5)"
            />
            <div className="rightButtons">
                <NavLink to="/ChoiceToEnter">
                <button>
                    <PersonIcon />Sign-In
                </button>
                </NavLink>
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
