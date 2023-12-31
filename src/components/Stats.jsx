// import React from 'react'
import { Stats } from '../constants';
import styles from '../styles';

const stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {Stats.map((Stats) => (
            <div key={Stats.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{Stats.value}</h4>
                <p className='font-poppins font-normal xs:text-[20px] text-[50px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{Stats.title}</p>
            </div>
        ))}
    </section>
  )
}

export default stats