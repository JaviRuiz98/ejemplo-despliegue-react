import { menuTextClasses } from '../data/menuItems'

function MenuColumn({ items, className }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className={menuTextClasses[item.textStyle] ?? 'menu-text-link'}>
            {item.icon && <span>{item.icon}</span>}
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MenuColumn
