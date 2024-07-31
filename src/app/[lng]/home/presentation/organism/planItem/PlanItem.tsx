import './planItem.css'

import Card from '@/components/organism/card/Card';
import CardHeader from '@/components/atoms/cardHeader/CardHeader';
import CardValue from '@/components/molecules/cardValue/CardValue';
import { PlanItemParams } from './PlanItemProps';
import Button from '@/components/atoms/button/Button';
import ListOption from '@/components/molecules/listOption/ListOption';
import usePlanItem from './usePlanItem';

const PlanItem = ({lng, item}: PlanItemParams) => {

  const { language, onAddProduct, translate } = usePlanItem(lng,item)

  return (
    <div className="plan-item">
      <Card
        bgStyle="color"
        border={0}
        borderBg="#9291C9"
        size="auto"
      >
        <>
          <CardHeader
            bgStyle={'primary'}
            size={20}
            title={item.i18n[language].title}
            type="color"
            orientation="center"
          />
          <div className="card__content">
            <CardValue
              currency={item.i18n[language].type_time}
              price={item.config.price}
              symbol={item.config.symbol}
              subtitle={item.i18n[language].text}
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

export default PlanItem