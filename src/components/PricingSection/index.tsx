import React, { Children } from 'react'
import { Container } from '../studio/components/Container'
import Header from './header'

type Props = {
    children: React.ReactNode
}

const PricingSection = ({children}: Props) => {

  return (
    <>
    <div className='flex flex-col md:flex-row justify-center p-8 gap-6'>
        <div className="left w-full md:max-w-[40%]"></div>
        <div className="right flex flex-col items-start rounded-2xl border border-slate-200 bg-white w-full md:max-w-[60%] shadow-lg ">
        {children}
        </div>
       
    </div>
    </>
  )
}

export default PricingSection