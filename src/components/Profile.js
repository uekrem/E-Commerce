import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../stores/auth';
import { update, auth, resetPassword, verifyProfile } from '../firebase';
import toast from 'react-hot-toast';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export function Profile() {

    const { user } = useSelector((state) => state.authR)
    const [name, setName] = useState();
    const [newEmail, setNewEmail] = useState();
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState({0:false,1:false,2:false})
    const [replacePass , setReplacePass] = useState();
    const [newPass, setNewPass] = useState();
    const [replaceNewPass, setReplaceNewPass] = useState();

    useEffect(() => {
        setName(user.displayName);
        setNewEmail(user.email);
    }, [user]);
    
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
            email: newEmail,
        })
        dispatch(userLogin({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
        }))
    }

  return (
    
    <div style={{
        width:"100%",  
        height:"100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"start",
        paddingBottom:"100px",
        }}>
  
        <main id="profile">

            <div id="leftProfile">
            <Typography sx={{color:"rgb(243, 121, 25)",paddingBottom:"10px"}} component="h1" variant="h6">
                My Membership Information
            </Typography>
                <div id="nameSurBlock">
                    <div id="nameBlock">
                        <label>Name</label>
                        <TextField
                        id="name"
                        name="name"
                        autoFocus
                        value={name || ""}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label>E-Mail</label>
                    <TextField
                    id="email"
                    name="email"
                    disabled
                    value={newEmail || ""}
                    // onChange={(e) => setNewEmail(e.target.value)}
                    />
                </div>
                <Button startIcon={1 ? <NewReleasesIcon /> : <MarkEmailReadIcon />} onClick={verifyProfile}>{1 ?  "Verify Email" : "Approved"}</Button>

                <Button onClick={handleInform} id="leftButton" size="large" variant="filled">UPDATE</Button>

            </div>

            <div id="rightProfile">

                <Typography sx={{color:"rgb(243, 121, 25)",paddingBottom:"10px"}} component="h1" variant="h6">
                    Password Update
                </Typography>

                <div>
                    <label>Current password</label>
                    <TextField
                    name="password"
                    type={showPassword[0] ? 'text' : 'password'}
                    id="password"
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
                </div>

                <div>
                    <label>New password</label>
                    <TextField
                    name="password"
                    type={showPassword[1] ? 'text' : 'password'}
                    id="password"
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
                </div>

                <div>
                    <label>New password (Again)</label>
                    <TextField
                    name="password"
                    type={showPassword[2] ? 'text' : 'password'}
                    id="password"
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

                    <Button onClick={handlePass} id="rightButton" size="large" variant="filled">UPDATE</Button>
                </div>
            </div>
        </main>
    </div>
  )
}
