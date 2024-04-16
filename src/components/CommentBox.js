import React, {useState} from 'react'
import { Grid, Avatar, Rating, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { useDispatch } from 'react-redux';
import { addComment } from '../stores/personalSpaces.js';

export function CommentBox(props) {

    const [text, setText] = useState("");
    const [rating, setRating] = useState("");
    let { data, orderDisplay } = props;
    const dispatch = useDispatch();

    function commentSave(){
        dispatch(addComment({data, orderDisplay, text, rating}))
    }

  return (
        <Grid sx={{border:"1px solid rgb(205, 215, 225)", borderRadius:"5px", padding:"15px 10px"}} item xs={12}>
            <Grid sx={{display:"flex"}} item xs={12}>
                <Grid item xs={3} md={2}>
                    <Avatar sx={{ width: 60, height: 60 }} alt="productName" src={data.data.image}/>
                </Grid>
                <Grid item xs={9} md={10}>
                    <h4>{data.data.title}</h4>
                    <Rating name="no-value" onChange={(e) => setRating(e.target.value)} value={parseFloat(rating)} />
                </Grid>
            </Grid>
            <Grid sx={{marginTop:"5px"}} item xs={12}>
                <Textarea
                    placeholder='You can share your experiences in this area'
                    value={text}
                    minRows={4}
                    maxRows={6}
                    onChange={(e) => setText(e.target.value)}
                />
            </Grid>
            <Grid sx={{display:"flex", alignItems:"center", justifyContent:"center"}} item xs={12}>
                <Button disabled={rating === ""} sx={{backgroundColor:"rgb(241, 122, 26)", color:"white", marginTop:"10px", "&:hover":{color:"rgb(241, 122, 26)", backgroundColor:"rgb(241, 241, 241)"}}} onClick={commentSave}>SEND</Button>
            </Grid>
        </Grid>
  )
}
