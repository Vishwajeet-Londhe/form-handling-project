import React from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards />
        <Form />
      </div>
    </div>
  )
}

export default App
