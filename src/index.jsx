import React from 'react'
import ReactDOM from 'react-dom/client'

// ? Styles
import './index.css'

// ? Components
import Header from './components/Header'
import Card from './components/Card'

// ? Data
import locations from "../data.js"

const cards = locations.map(location => {
  return (
    <Card
    id= {location.id}
    {...location}
    />
  )
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Header />
      <section className="cards">
        {cards}
      </section>
    </>
)
