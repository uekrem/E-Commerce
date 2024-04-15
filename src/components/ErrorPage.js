import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate()

  return (
    <div className="errorPage">
        <ErrorIcon fontSize='' />
        <p>An error was encountered. To return to the home page</p>
        <Button onClick={() => navigate("/")}>Home Page</Button>
    </div>
  )
}
