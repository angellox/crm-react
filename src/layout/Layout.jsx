import React, { Suspense } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';
// Components


const Layout = () => {

    const location = useLocation();
    const currentURL = location.pathname;

    return(
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/6 bg-blue-900 px-5 py-10'>
                <h2 className='text-2xl lg:text-4xl font-black text-center text-white'>
                    CRM - Clientes React
                </h2>

                <nav className='mt-10 text-center md:text-left'>
                    <Link
                        className={`${currentURL === '/clientes' ? 'text-blue-300 underline' : 'text-white'}  text-2xl block mt-2 hover:text-blue-300`}
                        to='/clientes'
                    >Clientes</Link>
                    <Link 
                        className={`${currentURL === '/clientes/nuevo' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
                        to='/clientes/nuevo'
                    >Nuevo Cliente</Link>
                </nav>
            </div>

            <div className='md:w-5/6 p-10 bg-slate-100 md:h-screen overflow-scroll'>
                <Outlet />
            </div>  
            
        </div>
    )
}

export default Layout;