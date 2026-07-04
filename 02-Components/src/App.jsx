import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar';

const App = () => {
  const user = 'Faraz';
  const age = 22;
  return (
    <>
    <Navbar />
    <Navbar />
    <Card />
    <Card />
    <Card />
    </>
  )
}

export default App
