import { ChangeEvent, useState } from 'react';

import './followerItemCustom.css'

import Card from '@/components/organism/card/Card';
import CardHeader from '@/components/atoms/cardHeader/CardHeader';
import CardValue from '@/components/molecules/cardValue/CardValue';
import { FollowerItemCustomParams } from './FollowerItemCustomProps';
import Button from '@/components/atoms/button/Button';
import Input from '@/components/atoms/input/Input';
import useFollowerItemCustom from './useFollowerItemCustom';
import { BackgroundType } from '@/models/types/BackgroundType';

const FollowerItemCustom = ({lng, item}: FollowerItemCustomParams) => {
  
  const { input, onInput, onAddProduct, translate, language } = useFollowerItemCustom(lng, '', item)
  
  return (
    <div className="follower-item-custom__item follower-item-custom__item--center">
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
              price={input !== '' ? input : 0}
              symbol={item.config.symbol}
              title={item.i18n[language].text}
            />
            <div className="card__form">              
              <Input
                name="price"
                placeholder={translate.LABEL.PRICE_TEXT}
                type="text"
                size="auto"
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onInput(e)}
              />
            </div>
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

export default FollowerItemCustom