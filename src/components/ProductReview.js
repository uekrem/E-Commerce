import { ReviewCard } from './ReviewCard';
import { db } from '../firebase';
import { collection, where, query, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

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
    <div id="productReview">
      {
        reviewList ? 
        reviewList.map((element, index) => {
          return <ReviewCard key={index} data={element} />;
        })
        : ""
      }
    </div>
  )
}
