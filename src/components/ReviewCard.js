import { Grid, Avatar, Rating } from "@mui/material";

export function ReviewCard({ data }) {

  let result = data.name.split(" ");

  function randomCensor(repeat) {
    let starLen = "*";

    for (let i = 1; i < repeat; i++) {
      starLen += "*"
    }
    return starLen;
  }

  return (
    <Grid container id="ReviewCard">
      <Grid item xs={12} md={1}>
        <Grid justifyContent="center" alignItems="center" item container>
          <Avatar sx={{bgcolor: "rgb(145, 145, 145)", width: 56, height: 56 }}>
            {`${result[0][0]}${result[1][0]}`}
          </Avatar>
        </Grid>
      </Grid>
      <Grid item xs={12} md={11} id="reviewBottom">
        <Grid  container item xs={12} md={12} id="reviewWho">
          <Grid item>
            <Rating name="half-rating-read" value={parseInt(data.rating)} size="small" precision={1} readOnly />
          </Grid>
          <Grid item>
            <p>{data.date}</p>
          </Grid>
          <Grid item>
            <p>{`${result[0][0]}${randomCensor(result[0].length - 1)} ${result[1][0]}${randomCensor(result[1].length - 1)}`}</p>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} id="reviewText">
          <p>{data.text}</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

