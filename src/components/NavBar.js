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
import { Grid, Container } from '@mui/material';
import jsCookie from 'js-cookie';

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
        dispatch(fetchLogoutUser());
        jsCookie.remove('auth');
        navigate("/", { replace:true });
    }

    return (
        <Container maxWidth="lg">
            <Grid container>

                <Grid container item className="redirects">

                    <Grid sx={{display:"flex", alignItems:"center", justifyContent:'space-evenly'}} container item xs={12} md={8}>
                        <Toaster position='top-right' />
                        <Grid className='NavbarItemCenter' item xs={12} md={3}>
                            <NavLink to="/"><img src='https://cdn.dsmcdn.com/web/logo/ty-web.svg' alt=""></img></NavLink>
                        </Grid>
                        <Grid className='NavbarItemCenter' item xs={12} md={9}>
                            <SearchBar 
                                style={{
                                border:"1px solid black",
                                }}
                                width="80%"
                            />
                        </Grid>
                    </Grid>

                    <Grid xs={12} md={4} container item className="rightButtons">

                        <Grid className='NavbarItemCenter' item xs={12} md={2}>
                            {
                                isAuthenticated ? 
                                <NavLink to="/Profile">
                                    <button>
                                        <PersonIcon />{JSON.parse(jsCookie.get("auth"))[0].displayName}
                                    </button>
                                </NavLink> : 
                                <NavLink to="/SignIn">
                                    <button>
                                        <LoginIcon />Sign-In
                                    </button>
                                </NavLink>
                            }
                        </Grid>
                        <Grid className='NavbarItemCenter' item xs={12} md={2}>
                            <NavLink to="/MyFavorites">
                                <button>
                                    <FavoriteIcon />Favorites
                                </button>
                            </NavLink>
                        </Grid>
                        <Grid className='NavbarItemCenter' item xs={12} md={2}>
                            <NavLink to="/Basket">
                                <button>
                                    <ShoppingCartIcon />Basket
                                </button>
                            </NavLink>
                        </Grid>
                        <Grid className='NavbarItemCenter' item xs={12} md={2}>
                            {
                                isAuthenticated ? 
                                <button onClick={handleLogout}>
                                    <LogoutIcon />Log-Out
                                </button>
                                : 
                                null
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container item className="categories">
                    <button onClick={() => CategRoute("electronics")}>
                        Electronic
                    </button>
                    <button onClick={() => CategRoute("clothing")}>
                        Clothing
                    </button>
                    <button onClick={() => CategRoute("jewelery")}>
                        Jewelery
                    </button>
                </Grid>

            </Grid>
        </Container>
    )
}
