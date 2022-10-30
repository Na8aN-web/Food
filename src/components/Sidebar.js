import React from 'react'
import '../assets/stylesheet/sidebar.css'

import fork from '../assets/images/icons/fork.png'
import star from '../assets/images/icons/star.png'
import percent from '../assets/images/icons/percent.png'

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-icons'>
            <img src={fork} width="24px" height="24px" alt='fork' />
            <img src={star} width="24px" height="24px" alt='star' />
            <img src={percent} width="24px" height="24px" alt='percent' />
       </div>
    </div>
  )
}

export default Sidebar