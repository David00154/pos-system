import React, { FC, ReactElement, useState } from 'react'
import { IoLogOutOutline, IoSettingsOutline, IoDiamondOutline } from 'react-icons/io5'
import { RiArrowDownSLine, RiShoppingCartLine, RiHomeSmile2Line, RiPlayListAddLine } from 'react-icons/ri'

import { Link } from 'react-router-dom'
import { Link as NavLink, useSidebarLinks } from '~/context/hooks/useSidebarLinks'

const Sidebar: FC = () => {
    // 
    // const [routes, _] = useState<Link[]>(links)
    const [routes] = useSidebarLinks()
    return (
        <div className='fixed left-0 w-[250px] bg-custom-dark h-full md:flex md:flex-col hidden'>

            <div className='h-14 w-full bg-discord-dark flex flex-col justify-center px-3' />
            <div className="overflow-y-auto h-full py-4 px-3 bg-custom-dark">
                <ul className="space-y-2">
                    {routes.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </ul>
                <ul className="pt-4 mt-4 space-y-2 border-t border-gray-500">
                    <Link to={"#"} className="flex items-center p-[13px] text-base font-normal text-custom-gray rounded hover:bg-discord-dark">
                        <IoSettingsOutline size={23} className="text-custom-gray" />
                        <span className="ml-3">Settings</span>
                    </Link>
                    <Link to={"#"} className="flex items-center p-[13px] text-base font-normal text-custom-gray rounded hover:bg-discord-dark">
                        <IoDiamondOutline size={23} className="text-custom-gray" />
                        <span className="ml-3">Upgrade account</span>
                    </Link>
                </ul>

            </div>

            <div className='h-14 mt-6 w-full bg-discord-dark mb-auto flex flex-col justify-center px-3' >
                <Link to={'/logout'} replace className='flex items-center ml-3 text-base h-full w-full'>
                    <IoLogOutOutline size={23} className="text-custom-gray mr-2" />
                    <span className=' text-custom-gray text-sm'>Log Out</span>
                </Link>
            </div >
        </div >
    )
}

export default Sidebar

const Item: FC<{ item: NavLink }> = ({ item: { text, url, dropDown, icon } }) => {
    const [opened, setOpened] = useState(dropDown?.opened)
    return (
        <li key={Math.round(Math.random() * Date.now())}>
            {dropDown == undefined && (
                <Link to={url} className="flex items-center p-[13px] text-base font-normal text-custom-gray rounded hover:bg-discord-dark">
                    {icon && (icon)}
                    <span className="ml-3">{text}</span>
                </Link>
            )}
            {dropDown != undefined && (
                <>
                    <button onClick={() => setOpened(!opened)} type='button' className="flex items-center p-[13px] text-base font-normal text-custom-gray rounded hover:bg-discord-dark w-full">
                        {icon && (icon)}
                        <span className="ml-3">{text}</span>
                        <RiArrowDownSLine size={23} className="text-custom-gray ml-auto" />
                    </button>
                    {opened && (
                        <ul className='py-2 pl-5 space-y-2'>
                            {dropDown.items.map((__item, i) => (
                                <Item key={i} item={__item} />
                            ))}
                        </ul>
                    )}
                </>
            )}
        </li>
    )
}
