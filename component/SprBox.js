import React, { Fragment } from 'react'
import CardSPR from './shared/CardSPR'

function SprBox() {
  return (
  
    <Fragment>
    <div className='w-[1140px] flex mx-auto justify-between'>

<CardSPR
icon={< i className = "fa-solid fa-truck-arrow-right" > </i>}
title='Free Shipping'
description='Capped at $39 per order'/>
<CardSPR
icon={< i className = "fa-regular fa-credit-card" > </i>}
title='Card Payments'
description='12 Months Installments'/>
<CardSPR
icon={< i className = "fa-solid fa-person-walking-arrow-loop-left" > </i>}
title='Easy Returns'
description='Shop With Confidence'/>
</div>


</Fragment>
  )
}

export default SprBox