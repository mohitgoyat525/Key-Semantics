import React from 'react'
import CommonHeading from '../common/CustomHeading'
import { KEY_SEMANTICS_LIST } from './../utils/helper'
import Lottie from 'lottie-react'

const KeySemanticsWork = () => {
    return (
        <div className='bg-white'>
            <div className='container mb-6 '>
                <div className='pt-24 max-xl:pt-20 max-lg:pt-14 max-md:pt-10 max-sm:pt-7 flex items-center justify-center text-center'>
                    <CommonHeading customHeading='How does KeySemantics work?' />
                </div>
                <div className='flex justify-evenly max-xl:flex-wrap mt-14 max-xl:mt-10 max-lg:mt-7 max-md:mt-5 max-lg:gap-6'>
                    {KEY_SEMANTICS_LIST.map((obj, i) => (
                        <div key={i}>
                            <Lottie animationData={obj.cardImg} loop={true} className='max-w-[278px]' />
                            <p className='font-normal text-base text-darkBlue max-w-[285px] text-center pt-6'>{obj.discription}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeySemanticsWork