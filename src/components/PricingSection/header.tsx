import React from 'react'
import { Container } from '../studio/components/Container'

type Props = {
    title:string,
    description:string,
    price:string,
    tag?:string
}

const Header = ({title,description,price,tag}: Props) => {
  return (
    <div className='p-8 w-full border-b border-slate-200'>
        <div className="flex justify-between flex-wrap">
            <div className="flex flex-col items-start gap-1 min-w-60">
                <div className="flex items-center gap-2">
                <span className='font-semibold text-2xl text-gray-900 font-[Inter]'>{title}</span>

                </div>
            <span className='font-normal text-sm text-gray-600 font-[Inter]'>{description}</span>
            </div>
        <div className="PriceDiv flex items-end gap-[2px]">
        <div className='flex items-center gap-2 '>
            <span className='text-gray-900 text-4xl font-semibold tracking-[-0.72px]'>$</span>
            <span className="text-gray-900 font-inter text-[48px] font-semibold leading-[72px] tracking-[-0.96px]">
                {price}
            </span>
        </div>

        </div>

        </div>
    </div>

  )
}

export default Header