import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='absolute top-10 left-20'>
      <Image src="/logo/logo.png" alt='logo' width={150} height={100} />
    </div>
  )
}

export default Logo
