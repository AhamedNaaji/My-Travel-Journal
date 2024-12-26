import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Entry from '../components/entry'
import Header from '../components/Header'
import data from './data'





function App() {

    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
  
  return (
    <>
    <Header/>
    <main className='container'>
        {entryElements}
    </main>
    </>
  )
}

export default App

