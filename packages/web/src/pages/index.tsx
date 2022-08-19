import { useState } from 'react'
import { TestModal } from '~/components/utils/Modals'
import { State, useGlobal } from '~/context/GlobalProvider'

const Index = () => {
  const { state: { storeName, isCheckingOut }, setState } = useGlobal()

  return (
    <div className='h-full w-full'>
      <nav className="p-3 bg-white w-full border-b-2 border-b-custom-dark">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <h1 className='text-custom-dark font-bold text-xl'>Hello Test Store,</h1>
          <div className='flex items-center'></div>
        </div>
      </nav>
      <div className='mx-auto relative container px-8'>
        {/* <TestModal opened={false}>
        <div className='p-4'><h1>Helo</h1></div>
      </TestModal> */}
      </div>

    </div>
  )
}

export default Index