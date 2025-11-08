import Link from 'next/link'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebookF } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { PiPhone } from 'react-icons/pi'

import '@/components/ui/footer/footerStyles.css'

export const Footer = () => {
  return (
    <footer className='h-fit py-10'>

      <div className="mb-5 flex min-[990px]:flex-row max-[990px]:mx-auto min-h-max max-[990px]:w-fit flex-col justify-between mx-auto w-10/12 mt-10">
        <div>
          <h1 className="font-semibold max-[990px]:text-md min-[990px]:text-xl max-[990px]:text-center h-fit">¡RECIBI TODOS NUESTROS DESCUENTOS!</h1>
          <h3 className="text-sm text-gray-400 min-[990px]:block hidden">Enterate de las ultimas novedades y promociones</h3>
        </div>
        <div className="w-[0.5px] min-[990px]:block hidden min-h-full bg-gray-200"><h1></h1></div>
        <div className="flex justify-end align-middle h-full w-fit min-[1000px]:w-[400px] max-[990px]:mx-auto">
          <div className="mx-2 relative rounded-none border-[0.2px] w-fit border-gray-200 p-3 flex m-0">
            <input
              type="text"
              className="search-input "
              placeholder="Ingresa tu mail"
            />
          </div>
          <button className="p-4 px-6 w-fit bg-pink-700 bg-opacity-40 text-white font-semibold">
            SUSCRIBIRSE
          </button>
        </div>
      </div >

      <hr className='w-11/12 mx-auto' />

      <div className=' min-[750px]:p-20 p-5 grid max-[750px]:grid-cols-1 min-[990px]:grid-cols-4 grid-cols-2'>
        <div>
          <img src='/logomorena.png' className=' min-[990px]:w-2/5 m-auto w-3/5' />
          <div className='flex m-auto w-1/5 mt-5 gap5'>
            <Link className='m-2 size-10' href={"https:instagram.com/1laauu"}>
              <FaFacebookF className='size-6' />
            </Link>
            <Link className='m-2 size-10' href={"https:instagram.com/1laauu"}>
              <BsInstagram className='size-6' />
            </Link>
          </div>
        </div>


        <div className='flex flex-col align-baseline min-[990px]:'>
          <h1 className='font-semibold text-2xl '>CATEGORÍAS</h1>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0' style={{}}>
            <h4 className='text-sm'>Make Up</h4>
          </button>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0' style={{}}>
            <h4 className='text-sm'>Skincare</h4>
          </button>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0' style={{}}>
            <h4 className='text-sm'>Bijouterie</h4>
          </button>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0 ' style={{}}>
            <h4 className='text-sm'>Moda y Accesorios</h4>
          </button>
          <hr className='w-5/6 mx-auto my-2 min-[990px]:hidden block' />
        </div>

        <div className='flex flex-col'>
          <h1 className='font-semibold text-2xl '>INFORMACIÓN</h1>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0 ' style={{}}>
            <h4 className='text-sm'>Quienes somos</h4>
          </button>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0 ' style={{}}>
            <h4 className='text-sm'>Cómo comprar</h4>
          </button>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0 ' style={{}}>
            <h4 className='text-sm'>Envio & Devoluciones</h4>
          </button>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0 ' style={{}}>
            <h4 className='text-sm'>Compras mayoristas</h4>
          </button>
          <button className='mr-auto my-2 overflow-hidden relative inline-block text-gray-600 after:border-b-pink-300 after:bottom-0 after:mt-3 after:left-0 after:w-full after:h-[2px] after:bg-pink-300 after:-translate-x-full after:transition-transform after:ease-in after:absolute hover:after:translate-x-0 ' style={{}}>
            <h4 className='text-sm'>Preguntas frecuentes</h4>
          </button>
          <hr className='w-5/6 mx-auto my-2 min-[990px]:hidden block' />
        </div>
        <div className='flex flex-col'>
          <h1 className='font-semibold text-2xl '>CONTACTOS</h1>
          <div className='flex flex-row my-3'>
          <CiLocationOn />
            <h3 className='text-sm text-gray-500'>Ituzaingó, Provincia de Buenos Aires</h3>
          </div>
          <div className='flex flex-row my-3'>
            <PiPhone />
            <h3 className='text-sm text-gray-500'>Telefono: 123-456-7898</h3>
          </div>
          <div className='flex flex-row my-3'>
            <MdEmail />
            <h3 className='text-sm text-gray-500'>Email: info@morenamoraok.com</h3>
          </div>

        </div>
      </div>
      {/* <div className='w-10/12 mx-auto'>
        <h1 className='text-sm text-gray-500'>©2024 morenamora powered by <span className='cursor-pointer text-blue-300'>Software Arrow</span></h1>
      </div> */}


    </footer>
  )
}
