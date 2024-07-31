import './likeItem.css'

import Card from '@/components/organism/card/Card';
import CardHeader from '@/components/atoms/cardHeader/CardHeader';
import CardValue from '@/components/molecules/cardValue/CardValue';
import { LikeItemParams } from './LikeItemProps';
import Button from '@/components/atoms/button/Button';
import ListOption from '@/components/molecules/listOption/ListOption';
import useLikeItem from './useLikeItem';
import { BackgroundType } from '@/models/types/BackgroundType';

const LikeItem = ({lng, item}: LikeItemParams) => {

  const { language, onAddProduct, translate } = useLikeItem(lng,item)

  return (
    <div className="like-item">
      <Card
        bgStyle="light"
        border={2}
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
            size={20}
            title={item.i18n[language].title}
            type="withoutColor"
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
                item.i18n[language].options.map((li, key) => (
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

export default LikeItem