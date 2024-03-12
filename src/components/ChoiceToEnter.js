import React, {useState}from 'react'
import { SignIn } from './SignIn'
import Button from '@mui/material/Button';
import { RegisterIn } from './RegisterIn'

function choicePage(value){
    switch(value){
        case 1:
            return <SignIn />;
        case 2:
            return <RegisterIn />;
        default:
            return ;
    }
}

export function ChoiceToEnter() {

    const [page, setPage] = useState(1);

    function handleRegister(){
        if (page === 1)
            setPage(page + 1);
    };
      
    function handleSign() {
        setPage(page);
    };

  return (
    <div style={{
        width:"100%",  
        height:"100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"start",
        paddingBottom:"100px",
        backgroundColor:"rgb(250, 250, 250)",
        }}>
  
          <main style={{
            width:"75%",  
            height:"100%",
            display:'flex',
            alignItems:"center",
            justifyContent:"start",
            marginTop:"30px",
            flexDirection:"column",
            }}>
  
            {choicePage(page)}

            <div id="choiceButton">

                { page === 1 ? <Button size="large" variant="filled" onClick={handleSign}>Sign In</Button> : "" }

                <Button size="large" variant="filled" onClick={handleRegister}>Register In</Button>

            </div>
  
          </main>
  
      </div>
  )
}
