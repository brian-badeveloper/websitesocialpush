import './header.css'

import { HeaderProps } from './HeaderProps'

const Header = ({title, paragraph, colorTitle, colorParagraph, orientation = 'center', children}: HeaderProps) => {
  return (
    <div className={`header ${orientation}`}>
      <h2 
        className="header__title"
        style={{ color: colorTitle }}
      >
        {children}
        {title}
      </h2>
      {
        paragraph && (
          <p 
            className="header__paragraph"
            style={{ color: colorParagraph }}
          >
          {paragraph}
          </p>
        )
      }
    </div>
  )
}

export default Header