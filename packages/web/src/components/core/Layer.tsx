
import React, { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import ConfirmCheckout from './ConfirmCheckout'
import Sidebar from './Sidebar'

const Layer: FC<{ children?: ReactElement }> = ({ children }) => {
    return (
        <div className='w-full'>
            <Sidebar />
            <div className='md:ml-[250px] h-screen'>
                <Outlet />
                {/* Right side bar, to confirm check out. */}
                <ConfirmCheckout />
            </div>
        </div>
    )
}

export default Layer