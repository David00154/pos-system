import React, { FC, ReactElement, useState } from 'react'
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5'
import { BsPalette, BsShopWindow } from 'react-icons/bs'
import { RiArrowDownSLine, RiShoppingCartLine, RiHomeSmile2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type DropDown = {
    opened: boolean;
    items: Link[]
}

type Link = {
    url: string;
    icon?: ReactElement;
    text: string;
    dropDown?: DropDown;
}

const links: Link[] = [
    {
        url: '',
        icon: <RiHomeSmile2Line size={23} className="text-custom-gray" />,
        text: 'Dashboard'
    },
    {
        url: 'orders',
        icon: <RiShoppingCartLine size={23} className="text-custom-gray" />,
        text: 'Orders'
    },
    {
        url: 'products',
        icon: <BsShopWindow size={23} className="text-custom-gray" />,
        text: 'Products'
    },
    {
        url: 'managers',
        icon: <></>,
        text: 'Managers'
    },
    {
        url: 'categories',
        icon: <BsPalette size={23} className="text-custom-gray" />,
        text: 'Categories',
        dropDown: {
            items: [
                {
                    text: 'Create category',
                    url: 'categories/create',
                },
                {
                    text: 'All categories',
                    url: 'categories/create'
                }
            ],
            opened: false
        }
    },
    {
        url: 'settings',
        icon: <IoSettingsOutline size={23} className="text-custom-gray" />,
        text: 'Settings'
    },
]

const Sidebar: FC = () => {
    // 
    const [routes, _] = useState(links)
    return (
        <div className='fixed left-0 w-[250px] h-full md:flex md:flex-col hidden'>

            <div className='h-14 w-full bg-discord-dark mb-auto flex flex-col justify-center px-3' />
            <div className="overflow-y-auto h-full py-4 px-3 bg-custom-dark">
                <ul className="space-y-2 mb-auto">
                    {routes.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </ul>
                <div id="dropdown-cta" className="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
                    <div className="flex items-center mb-3">
                        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
                            <span className="sr-only">Close</span>
                            {/* <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                        </button>
                    </div>
                    <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                        Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                    </p>
                    <a className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                </div>

            </div>
            <div className='h-14 w-full bg-discord-dark mb-auto flex flex-col justify-center px-3' >
                <Link to={'/logout'} replace className='flex items-center ml-3 text-base h-full w-full'>
                    <IoLogOutOutline size={23} className="text-custom-gray mr-2" />
                    <span className=' text-custom-gray text-sm'>Log Out</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar

const Item: FC<{ item: Link }> = ({ item: { text, url, dropDown, icon } }) => {
    const [opened, setOpened] = useState(dropDown?.opened)
    return (
        <li key={Math.round(Math.random() * Date.now())}>
            {dropDown == undefined && (
                <Link to={url} className="flex items-center p-2 text-base font-normal text-custom-gray rounded hover:bg-discord-dark">
                    {icon && (icon)}
                    <span className="ml-3">{text}</span>
                </Link>
            )}
            {dropDown != undefined && (
                <>
                    <button onClick={() => setOpened(!opened)} type='button' className="flex items-center p-2 text-base font-normal text-custom-gray rounded hover:bg-discord-dark w-full">
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
