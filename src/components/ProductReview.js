import { ReviewCard } from './ReviewCard';
import { db } from '../firebase';
import { collection, where, query, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

export function ProductReview({data}) {

  const [reviewList, setReviewList] = useState();

  useEffect(() => {
    onSnapshot(query(collection(db, "comment"), where("productId", '==', data.id)), (doc) => {
        setReviewList(
            doc.docs.reduce((elements, element) => [...elements, {...element.data(), id:element.id}], [])
        )
    })
  }, [data])

  return (
    <Grid container item id="productReview">
      {
        reviewList ? 
        reviewList.map((element, index) => {
          return  <Grid key={index} item container>
                    <ReviewCard key={index} data={element} />
                  </Grid>
        })
        : ""
      }
    </Grid>
  )
}
