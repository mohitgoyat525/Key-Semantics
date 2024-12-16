import React from 'react'

const CommonHeading = ({ CustomHeading }) => {
  return (
      <h2 className='text-[32px] font-bold leading-[72px] text-darkBlue max-lg:text-3xl max-md:text-2xl'>{CustomHeading}</h2>
  )
}

export default CommonHeading