import React from 'react'

const CommonButton = ({ customButton }) => {
  return (
    <button className='transition-all duration-200 ease-linear hover:scale-95 rounded-full w-full  py-3 px-2  max-sm:px-1 border border-solid border-darkBlue font-normal text-sm text-darkBlue leading-5'>{customButton}</button>
  )
}

export default CommonButton