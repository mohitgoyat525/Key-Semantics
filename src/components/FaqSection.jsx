import React, { useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import { FAQ_LIST, FAQ_TEXT } from './utils/helper';
import CommonButton from '../common/CommonButton';
import Lottie from 'lottie-react'
import semanticAnimation from './../lottie/infography.json';
import mobileSemanticsAnimation from '../lottie/mobile-infography.json'
import CommonList from '../common/CommonList';
import CommonFaqDiscription from '../common/CommonFaqDiscription';
const FaqSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className='bg-offWhite'>
            <div>
                <Lottie animationData={semanticAnimation} loop={true} className='max-md:hidden shadow-[0px_10px_40px_0px_#41566B0D] max-w-[1200px] mx-auto h-[558px]' />
                < Lottie animationData={mobileSemanticsAnimation} loop={true} className='md:hidden shadow-[0px_10px_40px_0px_#41566B0D]' />
            </div>

            <div className='container pt-[164px] max-xl:pt-32 max-lg:pt-20 max-md:pt-14 max-sm:pt-7'>
                <div className='flex gap-12 max-xl:gap-9 max-md:gap-6 max-xl:flex-wrap max-xl:justify-center'>

                    <div className='w-6/12 max-xl:w-full relative'>
                        <img
                            src="/assets/images/webp/working-girl-img.webp"
                            alt="working-girl"
                            className='w-full max-w-[600px] max-xl:mx-auto max-lg:max-w-none sticky top-0'
                        />
                    </div>


                    <div className='w-6/12 max-xl:w-full'>
                        <CommonHeading CustomHeading="Key Q&A" />
                        <div className='translate-x-[18px]'>
                            {FAQ_TEXT.map((item, i) => (
                                <CommonList CustomListText={item} />
                            ))}
                        </div>


                        <div className='mt-4'>
                            {FAQ_LIST.map((obj, i) => (
                                <div key={i} className='border-t border-solid border-[#C9CAD4] p-4'>
                                    <div
                                        className='flex items-center justify-between cursor-pointer'
                                        onClick={() => toggleFAQ(i)}
                                    >
                                        <h3 className='text-lg text-darkBlue font-medium leading-[28px]'>
                                            {obj.title}
                                        </h3>
                                        <div>
                                            <p className={`transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : 'rotate-0'}`}>{obj.arrowImg}</p>
                                        </div>
                                    </div>
                                    {expandedIndex === i && (
                                        <div className="mt-4">
                                            <CommonFaqDiscription CustomFaqText={obj.discriptionOne} />
                                            <CommonFaqDiscription CustomFaqText={obj.discriptionTwo} />
                                            <div className='flex items-center gap-4 my-4 max-sm:flex-col'>
                                                <img src={obj.imgOne} alt="key-semantics-img" />
                                                <img src={obj.imgTwo} alt="key-semantics-img" />
                                            </div>
                                            <CommonFaqDiscription CustomFaqText={obj.discriptionThree} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='w-[116px] mt-6'>
                            <CommonButton CustomButton='Get a demo' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
