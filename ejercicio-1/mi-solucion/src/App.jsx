import { useState } from 'react'
import './App.css'

const menuTextClasses = {
  brand: 'menu-text-brand',
  link: 'menu-text-link',
}

const menuItemsFirstColumn = [
  { icon: '🎬', label: 'CineReact', href: '#', textStyle: 'brand' },
]

const menuItemsSecondColumn = [
  { label: 'Inicio', href: '#', textStyle: 'link' },
  { label: 'Estrenos', href: '#', textStyle: 'link' },
  { label: 'Géneros', href: '#', textStyle: 'link' },
  { label: 'Contacto', href: '#', textStyle: 'link' },
]

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='app-container'>
        <div className='app-header'>
          <nav className="menu">
            <ul>
              {menuItemsFirstColumn.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={menuTextClasses[item.textStyle] ?? 'menu-text-link'}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              {menuItemsSecondColumn.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={menuTextClasses[item.textStyle] ?? 'menu-text-link'}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </a>
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
