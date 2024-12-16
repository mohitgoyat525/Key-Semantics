import React from 'react'

const PrimaryInput = () => {
  return (
      <input value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          className='bg-[#24254B] w-[320px] mx-auto py-4 px-5 border border-solid border-offPurple rounded-full outline-none placeholder:text-lightPurple text-lightPurple font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2'></input>
  )
}

export default PrimaryInput