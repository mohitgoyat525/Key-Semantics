import Lottie from 'lottie-react'
import React from 'react'
import semanticAnimation from './../lottie/infography.json';
import mobileSemanticsAnimation from '../lottie/mobile-infography.json'

const KeySemanticsLottie = () => {
  return (
    <div className='semanticsLottie-bg'>
      <div className='container '>
       
          <Lottie animationData={semanticAnimation} loop={true} className='max-md:hidden shadow-[0px_10px_40px_0px_#41566B0D]' />
        < Lottie animationData={mobileSemanticsAnimation} loop={true} className='md:hidden shadow-[0px_10px_40px_0px_#41566B0D]'/>  
      
      </div>
      </div>
  )
}

export default KeySemanticsLottie