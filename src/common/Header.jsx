import React from 'react'
import CommonButton from './CustomButton'

const Header = () => {
  return (
    <div className='bg-transparent pt-[47px] max-xl:pt-7 max-md:pt-6'>
      <nav className='flex items-center justify-between max-sm:gap-4'>
        <a href='/'><img src="/assets/images/png/logo-img.png" alt="logo" className='w-full max-w-[248px] max-sm:max-w-[170px]' /></a>
        <div className='min-w-[146px] max-sm:min-w-[136px]'><CommonButton customButton='Request a demo' /></div>
      </nav>
    </div>
  )
}

export default Header