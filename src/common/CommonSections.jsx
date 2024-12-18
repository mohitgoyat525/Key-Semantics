import React from 'react';
import CommonHeading from './CommonHeading';
import CommonButton from './CommonButton';

const CommonSections = ({ CommonText, btnText, SectionList, PeopleImg, myClass }) => {
    return (
        <div className={`${myClass} flex items-center gap-12 max-lg:flex-wrap max-lg:justify-center`}>
         <div className='w-6/12 max-lg:w-full'>
                <CommonHeading CustomHeading={CommonText} />
                <ul className=' list-disc translate-x-6 max-lg:pt-3'>
                    {SectionList.map((obj, i) => (
                        <li className='text-base font-normal leading-[28px] pt-2 text-darkBlue max-w-[552px] max-xl:max-w-none' key={i}>{obj}</li>
                    ))}
                </ul>
                <div className='w-[113px] mt-6'>
                    <CommonButton CustomButton={btnText} />
                </div>
            </div>
            <div className='w-6/12 max-lg:w-full'>
                <img src={PeopleImg} alt="keySemantics" className='w-full max-w-[600px] max-lg:mx-auto max-lg:max-w-none pointer-events-none'/>
            </div>
        </div>
       
    );
};

export default CommonSections;
