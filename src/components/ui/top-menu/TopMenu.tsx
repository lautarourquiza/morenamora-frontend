import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import SearchBar from './SearchBar'
import { BiMenu } from 'react-icons/bi'

export const TopMenu = () => {
    return (
        <section className='mb-5'>
            <h1 className='px-6 py-4 text-gray-400 font-light text-sm min-[1000px]:block hidden'>¡Bienvenido!</h1>
            <nav className='h-fit flex px-5 justify-between items-center w-11/12 mx-auto sm:flex-row flex-col'>
                <div className=''>
                    <Link href={'/'} className='mx-auto flex justify-center align-middle'>
                        <img src="/logomorena.png" alt={'logo'} className='h-16 mb-5 mr-10' />
                    </Link>
                </div>
                <div className='flex w-full'>
                    <SearchBar />
                    <div className='min-w-fit hidden lg:block mx-5 h-fit my-auto'>
                        <div className='flex flex-row justify-between min-[1200px]:block hidden h-fit'>
                            <Link className='hover:text-pink-300 mx-4 transition-all duration-300 ease-in-out hover:scale-105' href={'/'}>HOME</Link>
                            <Link className='hover:text-pink-300 mx-4 transition-all duration-300 ease-in-out hover:scale-105' href={'/products'}>PRODUCTOS</Link>
                            <Link className='hover:text-pink-300 mx-4 transition-all duration-300 ease-in-out hover:scale-105' href={'/aboutus'}>ACERCA DE NOSOTROS</Link>
                        </div>
                    </div>
                    <button>
                        <BiMenu className='min-[1200px]:hidden block mx-5 text-pink-300' />
                    </button>
                    <Link href={'/cart'} className='align-middle h-min'>
                        <div className='h-fit my-auto hidden sm:block w-fit'>
                            <div className='relative'>

                                <span className='absolute right-8 -top-1 bg-pink-300 text-white rounded-full z-50 text-sm px-1.5'>3</span>
                                <IoCartOutline className='mx-10 text-pink-400 size-8 top-5' />

                            </div>
                        </div>
                    </Link>
                </div>


            </nav>
        </section>

    )
}
