import './quote.css'

import { QuoteProps } from './QuoteProps'
import { QuoteImageFactory } from '../../atoms/QuoteImage/domain/use-cases/factoryQuoteImage'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'

const Quote = ({text, type, comment, likes, followers}: QuoteProps) => {
  return (
    <section className={`quote ${type.toLowerCase()}`}>
      <div className="container">
        <div className="quote__content">
            <div className="quote__table">
              <div className="quote__table-item">
                <IconFactory
                  width={35}
                  height={35}
                  color="#ffffff"
                  name="Comment"
                />
                {comment}
              </div>
              <div className="quote__table-item">
                <IconFactory
                  width={35}
                  height={35}
                  color="#ffffff"
                  name="Heart"
                />
                {likes}
              </div>
              <div className="quote__table-item">
                <IconFactory
                  width={35}
                  height={35}
                  color="#ffffff"
                  name="UserIn"
                />
                {followers}
              </div>
            </div>
            <div className="quote__text">
              <div className="quote__text-content">
                <div className="quote__text-icon">
                  <IconFactory
                    width={100}
                    height={100}
                    color="#ffffff"
                    name="QuoteLeft"
                  />
                </div>
                <p className="quote__paragraph">{text}</p>
                <h4 className="quote__footer">SocialPush</h4>
              </div>
            </div>
            <div className="quote__image">
              <QuoteImageFactory clStyle="quote__image-src" name={type} />
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Quote