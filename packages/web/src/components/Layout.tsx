import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Layout:FC = () => {
  const location = useLocation()
  return (
    <section className={`
    h-screen
    bg-white
    text-custom-dark
    `}>
        <Outlet/>
    </section>
  )
}

export default Layout

// md:h-[735px]
//     h-screen
// mx-auto
// max-w-[1080px]
// rounded-[10px]