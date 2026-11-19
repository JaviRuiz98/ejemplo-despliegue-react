import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const menuItemsFirstColumn = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Contacto', href: '#' }
  ]

  const menuItemsSecondColumn = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Contacto', href: '#' }
  ]

  return (
    <>
      <div className='app-container'>
        <div className='app-header'>
          <nav className="menu">
            <ul>
              {menuItemsFirstColumn.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <ul>
              {menuItemsSecondColumn.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default App
