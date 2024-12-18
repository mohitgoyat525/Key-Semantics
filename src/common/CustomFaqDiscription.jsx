import React from 'react'

const CommonFaqDiscription = ({ customFaqText }) => {
  return (
      <p className='text-base font-normal text-darkBlue leading-[28px] max-w-[552px] max-xl:max-w-none'>{customFaqText}</p>
  )
}

export default CommonFaqDiscription