import './likeItems.css'

import { LikeItemsProps } from './LikeItemsProps';
import LikeItem from '../likeItem/LikeItem';

const LikeItems = ({dataCards}: LikeItemsProps) => {
  return (
    <div className="like-items">
      <div className="like-items__row">
      {
        dataCards.map((item, key) => (
            <LikeItem {...item} key={`like-item-${key}`} />
        ))
      }
      </div>
    </div>
  )
}

export default LikeItems