import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
    
     <Card user="aman"  age={18} img="https://images.unsplash.com/photo-1715094229883-e0d7b4f47516?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <Card  user="Sarthak" age={21} img="https://images.unsplash.com/photo-1676762144029-4cb24e2eb6a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     
     
    </div>
  )
}

export default App
