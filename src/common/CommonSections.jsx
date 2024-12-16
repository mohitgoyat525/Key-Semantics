import React from 'react';
import CommonHeading from './CommonHeading';
import CommonButton from './CommonButton';

const CommonSections = ({ CommonText, btnText, SectionList }) => {
    return (
        <div>
            <CommonHeading CustomHeading={CommonText} />
            <ul className=' list-disc translate-x-4'>
                {SectionList.map((obj, i) => (
                    <li className='text-base font-normal leading-[28px] text-darkBlue max-w-[552px] max-xl:max-w-none' key={i}>{obj}</li>
                ))}
                
            </ul>
            <div className='w-[113px] mt-6'>
                <CommonButton CustomButton={btnText} />
                </div>
        </div>
    );
};

export default CommonSections;
