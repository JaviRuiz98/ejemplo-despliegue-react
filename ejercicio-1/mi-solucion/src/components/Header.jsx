import './Header.css'
import MenuColumn from './MenuColumn'
import { menuItemsFirstColumn, menuItemsSecondColumn } from '../data/menuItems'

function Header() {
  return (
    <div className="app-header">
      <nav className="menu" aria-label="Principal">
        <MenuColumn items={menuItemsFirstColumn} className="menu-column-brand" />
        <MenuColumn items={menuItemsSecondColumn} />
      </nav>
    </div>
  )
}

export default Header
