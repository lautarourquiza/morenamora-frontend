import { Product } from '@/interfaces/product.interface'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
    products: Product[];
}

export const ProductGrids = ({ products }: Props) => {
    return (

        <div className='grid grid-cols-2 sm:grid-cols-4  mb-10'>
            {
                products.map(product => (

                    <div className='rounded-md border border-gray-300 m-5 justify-center flex flex-col p-4' key={product.slug}>
                        <Link key={product.slug} href={`/product/${product.slug}`}>
                            <Image src={`/products/${product.images[0]}`} alt={product.title} width={1000} height={1000} className='w-2/3 mx-auto' />
                        </Link>
                        <h1 className='text-xl font-bold mx-auto'>{product.title}</h1>
                        <h3 className='mr-auto ml-2'>Marca:<span className='font-semibold'>{product.tags}</span></h3>
                        <div className='mx-5 justify-between ml-auto flex flex-row align-middle mt-auto'>
                            <h1 className='font-bold text-lg'>${product.price}</h1>
                            <button className='hover:bg-gray-200 rounded-md ml-2'><IoHeartOutline className='text-pink-300 size-7' /></button>
                            
                        </div>
                    </div>


                ))

            }
        </div>
    )
}
