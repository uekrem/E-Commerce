import React from 'react'

export function ProductDescriptions(props) {

  const {data} = props;

  return (
    <div id="productDescriptions">
        <h5>{data.title}</h5>
        <p>
          {data.description}
        </p>
 
    </div>
  )
}
