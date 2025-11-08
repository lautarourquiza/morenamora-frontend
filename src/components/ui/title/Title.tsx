import React from 'react'

interface Props{
    title:string;
    subtitle?:string;
}

export const Title = ({title, subtitle}:Props) => {
  return (
    <div className='my-12'>
        <h1 className="text-xl font-semibold ml-0">{title}</h1>
        {
            subtitle&&(
                <h3 className='text-md font-semibold text-gray-700'></h3>
            )
        }
    </div>
  )}
