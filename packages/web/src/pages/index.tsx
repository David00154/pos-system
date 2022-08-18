import { useState } from 'react'
import { TestModal } from '~/components/utils/Modals'
import { State, useGlobal } from '~/context/GlobalProvider'

const Index = () => {
  const { state: { storeName, isCheckingOut }, setState } = useGlobal()

  return (
    <div className='mx-auto relative container px-8 h-full'>
      <h1>Hello</h1>
      <TestModal opened={false}>
        <div className='p-4'><h1>Helo</h1></div>
      </TestModal>
    </div>
  )
}

export default Index