import React from 'react'
import "./Sort.scss"

function Sort() {
  return (
    <div className='Sort'>
        <div className='Sort-btns-wrapper'>
            <button className='Sort-btn'>All</button>
            <button className='Sort-btn'>UI</button>
            <button className='Sort-btn'>UX</button>
            <button className='Sort-btn'>Enhancement</button>
            <button className='Sort-btn'>Bug</button>
            <button className='Sort-btn'>Feature</button>
        </div>
    </div>
  )
}

export default Sort