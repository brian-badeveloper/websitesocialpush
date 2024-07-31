import './followerItemDashboard.css'

import Card from '@/components/organism/card/Card'
import CardHeader from '@/components/atoms/cardHeader/CardHeader'
import CardValue from '@/components/molecules/cardValue/CardValue'
import { FollowerItemDashboardParams } from './FollowerItemDashboardProps'
import Button from '@/components/atoms/button/Button'
import ListOption from '@/components/molecules/listOption/ListOption'
import useFollowerItemDashboard from './useFollowerItemDashboard'
import { BackgroundType } from '@/models/types/BackgroundType'
import CardAccordion from '@/components/molecules/cardAccordion/CardAccordion'

const FollowerItemDashboard = ({lng, item}: FollowerItemDashboardParams) => {

  const { language, onAddProduct, translate } = useFollowerItemDashboard(lng, item)

  return (
    <div className="follower-item-dashboard">
      <Card
        bgStyle="color"
        border={0}
        borderBg="#9291C9"
        size="auto"
        senior={item.senior}
        stars={item.stars}
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
            network={item.config.name_social}
            networkText={item.config.name_social}
          />
          <div className="card__content">
            <CardValue
              currency={item.config.currency}
              paragraph={''}
              price={item.config.price}
              symbol={item.config.symbol}
              title={''}
            />
            <Button
              bgStyle="tertiary"
              onClick={onAddProduct}
              size="auto"
              textSize={14}
            >
              {translate.CART.CART_BTN_PRODUCT}
            </Button>
            <CardAccordion
              text={translate.DASHBOARD.HOME_MORE_INFO}
              textClose={translate.DASHBOARD.HOME_MORE_INFO_CLOSE}
              color="var(--tertiary)"
              orientation="center"
              margin="top"
            >
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
            </CardAccordion>
          </div>
        </>
      </Card>
    </div>
  )
}

export default FollowerItemDashboard