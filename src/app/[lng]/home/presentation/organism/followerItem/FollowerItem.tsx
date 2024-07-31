import './followerItem.css'

import Card from '@/components/organism/card/Card'
import CardHeader from '@/components/atoms/cardHeader/CardHeader'
import CardValue from '@/components/molecules/cardValue/CardValue'
import { FollowerItemProps } from './FollowerItemProps'
import Button from '@/components/atoms/button/Button'
import ListOption from '@/components/molecules/listOption/ListOption'
import useFollowerItem from './useFollowerItem'
import { BackgroundType } from '@/models/types/BackgroundType'

const FollowerItem = ({...props}: FollowerItemProps) => {

  const { language, onAddProduct, translate } = useFollowerItem(props)

  return (
    <div className="follower-item">
      <Card
        bgStyle="color"
        border={0}
        borderBg="#9291C9"
        size="auto"
      >
        <>
          <CardHeader
            bgStyle={
              {
                1: 'primary',
                2: 'secondary',
                3: 'tertiary',
                4: 'light',
                5: 'blue',
                6: 'dark',
                default: 'Primary'
              }[props.config.priority] as BackgroundType
            }
            size={16}
            title={props.i18n[language].title}
            type="color"
            orientation="center"
          />
          <div className="card__content">
            <CardValue
              currency={props.config.currency}
              paragraph={props.i18n[language].subText}
              price={props.config.price}
              symbol={props.config.symbol}
              title={props.i18n[language].text}
            />
            <ul className="card__list">
              {
                props.i18n[language]?.options?.map((li, key) => (
                  <ListOption 
                    icon="CircleCheck" 
                    text={li} 
                    color="#000000" 
                    key={`list-${key}`}
                    centerResponsive={true}
                  />
                ))
              }
            </ul>
            <Button
              bgStyle="tertiary"
              onClick={onAddProduct}
              size="auto"
              textSize={14}
            >
              {translate.CART.CART_BTN_PRODUCT}
            </Button>
          </div>
        </>
      </Card>
    </div>
  )
}

export default FollowerItem