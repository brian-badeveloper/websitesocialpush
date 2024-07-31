import './followerItem.css'

import Card from '@/components/organism/card/Card'
import CardHeader from '@/components/atoms/cardHeader/CardHeader'
import CardValue from '@/components/molecules/cardValue/CardValue'
import { FollowerItemParams } from './FollowerItemProps'
import Button from '@/components/atoms/button/Button'
import ListOption from '@/components/molecules/listOption/ListOption'
import useFollowerItem from './useFollowerItem'
import { BackgroundType } from '@/models/types/BackgroundType'

const FollowerItem = ({lng, item}: FollowerItemParams) => {

  const { language, onAddProduct, translate} = useFollowerItem(lng,item)

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
              }[item.config.priority] as BackgroundType
            }
            size={16}
            title={item.i18n[language].title}
            type="color"
            orientation="center"
          />
          <div className="card__content">
            <CardValue
              currency={item.config.currency}
              paragraph={item.i18n[language].subText}
              price={item.config.price}
              symbol={item.config.symbol}
              title={item.i18n[language].text}
            />
            <ul className="card__list">
              {
                item.i18n[language]?.options?.map((li, key) => (
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