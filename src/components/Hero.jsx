import React from 'react'
import Header from '../common/Header'

const Hero = () => {
  return (
    <div className="bg-hero-image bg-cover bg-no-repeat bg-center h-[900px] max-xl:h-full">
      <div className='container'>
        <Header />
        <div className='flex items-center justify-center flex-col max-xl:py-28 max-lg:py-24 max-md:py-11'>
          <h1 className='text-[64px] text-darkBlue text-center max-w-[658px] leading-[72px] mx-auto font-bold max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl pt-[198px] max-xl:pt-0'>AI-Powered Search as a Service</h1>
          <p className='pt-10 text-center font-medium text-2xl text-darkBlue leading-[32px] max-xl:pt-8 max-lg:pt-7 max-md:pt-5'>Unlock your content with KeySemantics.</p>
            <div className='pt-12 max-xl:pt-10 max-lg:pt-8 max-md:pt-6 min-w-[154px] max-sm:w-[134px]'>
             <button className='py-5 px-[32px] rounded-full border border-solid  max-sm:px-6 max-sm:py-4 bg-darkBlue text-base font-medium text-white'>Get started</button>
              </div>
        </div>
      </div>
      </div>
  )
}

export default Hero