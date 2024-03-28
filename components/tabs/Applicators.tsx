import React from 'react'
import { Button } from '../ui/Button'

const Applicators = () => {
  return (
    <><div>Choose an attachment</div>
    <div className='grid grid-cols-2 gap-4 text-[#3B3B3B] text-[1rem]'>
        <Button title='' imageUrl={'/images/attachments/attach-1.png'} setActive={(b) => {console.log(b)}}/>
        <Button title='' imageUrl={'/images/attachments/attach-2.png'} setActive={(b) => {console.log(b)}}/>
        <Button title='' imageUrl={'/images/attachments/attach-3.png'} setActive={(b) => {console.log(b)}}/>
        <Button title='' imageUrl={'/images/attachments/attach-4.png'} setActive={(b) => {console.log(b)}}/>
      </div></>
  )
}

export default Applicators
