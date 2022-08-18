import React, { FC, useState } from 'react'
import { useGlobal } from '~/context/GlobalProvider'

const ConfirmCheckout: FC = () => {
    const {state:{isCheckingOut}} = useGlobal()
    const [width, setWidth] = useState(400)
    return (
        <div className={`absolute ${!isCheckingOut && 'hidden'} top-0 right-0 w-[400px] h-full z-[1040] bg-white
        `}>
            {/* <div className='
            absolute
            h-full
            w-[1px]
            top-0
            left-0
            bg-transparent
            cursor-row-resize
            ' /> */}
            <h1>Check out</h1>
        </div>
    )
}

export default ConfirmCheckout