import './cardValue.css'

import { CardValueProps } from './CardValueProps'

const CardValue = ({
  symbol,
  price,
  currency,
  title,
  subtitle,
  paragraph
}: CardValueProps) => {
  return (
    <div className="card-value">
      <h3 className="card-value__price">
        <span className="card-value__symbol">
          {symbol}
        </span>
        {price}{" "}
        <span className="card-value__currency">
          /{currency}
        </span>
      </h3>
      {
        title && (
          <p className="card-value__title">
          {title}
          </p>
        )
      }
      {
        subtitle && (
          <p className="card-value__subtitle">
          {subtitle}
          </p>
        )
      }
      {
        paragraph && (
          <p className="card-value__paragraph">
          {paragraph}
          </p>
        )
      }
    </div>
  )
}

export default CardValue