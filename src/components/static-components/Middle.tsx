import React from 'react'
import { BiCreditCard } from 'react-icons/bi'
import { BsMegaphone, BsTruck } from 'react-icons/bs'

export const Middle = () => {
  return (
    <div className="h-fit flex flex-col w-11/12 mx-auto sm:mx-auto min-[767px]:flex-row">
          <div className="w-1/3 min-[767px]:py-8 max-[767px]:w-full flex flex-row justify-center align-middle max-[767px]:mx-auto">
            <div className="max-[767px]:flex-col min-[767px]:py-12 max-[767px]:my-2 flex justify-center align-middle min-[767px]:border-r-gray-300 border-r-[1px] w-full">
                <BsTruck className="size-12 max-[767px]:mx-auto max-[767px]:mb-2 text-pink-400 hover:text-pink-300 transition-all duration-300 ease-in-out hover:scale-105"/>
                <div className="flex flex-col ml-3 max-[767px]:mx-auto max-[767px]:text-center" >
                  <h1 className="text-lg font-bold text-black hover:text-pink-300 transition-all duration-300 ease-in-out">ENVIOS A TODO EL PAIS</h1>
                  <h3 className="text-sm text-gray-500 ">Envíos gratis con la compra superior a 5000</h3>
                </div>
            </div>
          </div>
          <div className="w-1/3 min-[767px]:py-8 max-[767px]:w-full flex flex-row justify-center align-middle sm:mx-auto">
            <div className="max-[767px]:flex-col min-[767px]:py-12 max-[767px]:my-2 flex justify-center align-middle min-[767px]:border-r-gray-300 border-r-[1px] w-full">
                <BiCreditCard className="size-12 max-[767px]:mx-auto max-[767px]:mb-2 text-pink-400 hover:text-pink-300 transition-all duration-300 ease-in-out hover:scale-105"/>
                <div className="flex flex-col ml-3 max-[767px]:mx-auto max-[767px]:text-center" >
                  <h1 className="text-lg font-bold text-black hover:text-pink-300 transition-all duration-300 ease-in-out">TODOS LOS MEDIOS DE PAGO</h1>
                  <h3 className="text-sm text-gray-500 ">Tarjetas de credito y debito de todos los bancos</h3>
                </div>
            </div>
          </div>
          <div className="w-1/3 min-[767px]:py-8 max-[767px]:w-full flex flex-row justify-center align-middle sm:mx-auto">
            <div className="min-[767px]:py-12 max-[767px]:my-2 flex justify-center align-middle max-[767px]:flex-col">
                <BsMegaphone className="size-12 max-[767px]:mx-auto max-[767px]:mb-2 text-pink-400 hover:text-pink-300 transition-all duration-300 ease-in-out hover:scale-105"/>
                <div className="flex flex-col ml-3 max-[767px]:mx-auto max-[767px]:text-center" >
                  <h1 className="text-lg font-bold text-black hover:text-pink-300 transition-all duration-300 ease-in-out">PROMOCIONES Y OFERTAS</h1>
                  <h3 className="text-sm text-gray-500 ">Increibles descuentos todos los dias</h3>
                </div>
            </div>
          </div>

        </div>
  )
}
