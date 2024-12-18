import React from 'react'

const CommonList = ({ customListText }) => {
  return (
      <ul className='list-disc'>
          <li className='text-base font-normal leading-[28px] text-darkBlue max-w-[552px] max-xl:max-w-none'>{customListText}</li>
    </ul>
  )
}

export default CommonList