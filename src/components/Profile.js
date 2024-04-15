import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton, Typography, Grid, Button, Container} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../stores/auth';
import { update, auth, resetPassword } from '../firebase';
import toast from 'react-hot-toast';
import jsCookie from 'js-cookie';

export function Profile() {

    const { user } = useSelector((state) => state.authR)
    const [name, setName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState({0:false,1:false,2:false})
    const [replacePass , setReplacePass] = useState();
    const [newPass, setNewPass] = useState();
    const [replaceNewPass, setReplaceNewPass] = useState();

    useEffect(() => {
        setName(JSON.parse(jsCookie.get("auth"))[0].displayName);
        setNewEmail(JSON.parse(jsCookie.get("auth"))[0].email);
    }, []);
    
    function handleClickShowPassword(index){
        setShowPassword(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };      

    async function handlePass(){
        let check = false;

        if (newPass === replaceNewPass){
            check = await resetPassword(replacePass, newPass);
            if(check){
                setReplacePass('');
                setNewPass('');
                setReplaceNewPass('');
            }
        }
        else
            toast.error("Password does not match")
    }

    async function handleInform(){
        await update({
            displayName: name,
        })
        // dispatch(userLogin([{
        //     ...user, displayName: name, isAuthenticated:true,
        // }]))
        // jsCookie.remove("auth")
        jsCookie.set("auth", JSON.stringify([{...user, displayName: name}]));
    }

  return (
        <Container maxWidth="lg">
            <Grid container id="profile">
                <Grid id="leftProfile" container item xs={12} md={6}>
                    <Typography sx={{color:"rgb(243, 121, 25)",paddingBottom:"10px"}} component="h1" variant="h6">
                        My Membership Information
                    </Typography>
                    <Grid container item xs={6} md={6}>
                        <label>Name</label>
                        <TextField
                        id="name"
                        name="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>

                    <Grid container item xs={6} md={6}>
                        <label>E-Mail</label>
                        <TextField
                        id="email"
                        name="email"
                        disabled
                        value={newEmail}
                        />
                    </Grid>

                    <Grid container item xs={6} md={6}>
                        <Button onClick={handleInform} id="leftButton" size="large" variant="filled">UPDATE</Button>
                    </Grid>

                </Grid>

                <Grid id="rightProfile" container item xs={12} md={6}>

                    <Typography sx={{color:"rgb(243, 121, 25)",paddingBottom:"10px"}} component="h1" variant="h6">
                        Password Update
                    </Typography>

                    <Grid container item xs={6} md={6}>
                        <label>Current password</label>
                        <TextField
                        name="password"
                        type={showPassword[0] ? 'text' : 'password'}
                        className="password"
                        value={replacePass}
                        onChange={(e) => setReplacePass(e.target.value)}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword(0)}
                                edge="end"
                                sx={{backgroundColor:"rgb(250, 250, 250)"}}
                                >
                                {showPassword[0] ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Grid>

                    <Grid container item xs={6} md={6}>
                        <label>New password</label>
                        <TextField
                        name="password"
                        type={showPassword[1] ? 'text' : 'password'}
                        className="password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword(1)}
                                edge="end"
                                sx={{backgroundColor:"rgb(250, 250, 250)"}}
                                >
                                {showPassword[1] ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Grid>

                    <Grid container item xs={6} md={6}>
                        <label>New password (Again)</label>
                        <TextField
                        name="password"
                        type={showPassword[2] ? 'text' : 'password'}
                        className="password"
                        value={replaceNewPass}
                        onChange={(e) => setReplaceNewPass(e.target.value)}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword(2)}
                                edge="end"
                                sx={{backgroundColor:"rgb(250, 250, 250)"}}
                                >
                                {showPassword[2] ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Grid>

                    <Grid container item xs={6} md={6}>
                        <Button onClick={handlePass} id="rightButton" size="large" variant="filled">UPDATE</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
  )
}
