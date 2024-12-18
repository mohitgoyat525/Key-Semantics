import React, { useState } from 'react';
import CommonHeading from '../common/CustomHeading';
import { FAQ_ITEM_LIST, FAQ_TEXT } from '../utils/helper';
import CommonButton from '../common/CustomButton';
import CommonList from '../common/CustomList';
import CommonFaqDiscription from '../common/CustomFaqDiscription';

const FaqSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <div className='bg-offWhite'>
            <div className='container pt-[134px] max-xl:pt-32 max-lg:pt-20 max-md:pt-14 max-sm:pt-7'>
                <div className='flex gap-12 max-xl:gap-9 max-md:gap-6 max-xl:flex-wrap max-xl:justify-center'>

                    <div className='w-6/12 max-xl:w-full relative'>
                        <img
                            src="/assets/images/webp/working-girl-img.webp"
                            alt="working-girl"
                            className='w-full max-w-[600px] max-xl:mx-auto max-xl:max-w-none sticky top-0 pointer-events-none'
                        />
                    </div>
                    <div className='w-6/12 max-xl:w-full'>
                        <CommonHeading customHeading="Key Q&A" />
                        <div className='translate-x-[18px] max-lg:pt-4'>
                            {FAQ_TEXT.map((item, i) => (
                                <CommonList customListText={item} />
                            ))}
                        </div>


                        <div className='mt-4 max-w-[552px] max-xl:max-w-none'>
                            {FAQ_ITEM_LIST.map((obj, i) => (
                                <div key={i} className='border-t border-solid border-lightGrey p-4'>
                                    <div
                                        className='flex items-center justify-between cursor-pointer'
                                        onClick={() => toggleFAQ(i)}
                                    >
                                        <h3 className='text-lg text-darkBlue font-medium leading-[28px]'>
                                            {obj.title}
                                        </h3>
                                        <div>
                                            <p className={`transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : 'rotate-0'}`}> <img src="/assets/svg/arrow.svg" alt="arrow" /> </p>
                                        </div>
                                    </div>
                                    {expandedIndex === i && (
                                        <div className="mt-4">
                                            <CommonFaqDiscription customFaqText={obj.discriptionOne} />
                                            <CommonFaqDiscription customFaqText={obj.discriptionTwo} />
                                            <div className='flex items-center gap-4 my-4 max-sm:flex-col'>
                                                <img src={obj.imgOne} alt="key-semantics-img" />
                                                <img src={obj.imgTwo} alt="key-semantics-img" />
                                            </div>
                                            <CommonFaqDiscription customFaqText={obj.discriptionThree} />
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className='border-t border-solid border-lightGrey'></div>
                        </div>
                        <div className='w-[113px] mt-6'>
                            <CommonButton customButton='Get a demo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
