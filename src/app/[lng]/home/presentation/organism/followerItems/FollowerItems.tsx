import './followerItems.css'

import { FollowerItemsProps } from './FollowerItemsProps';
import FollowerItem from '../followerItem/FollowerItem';
import FollowerItemCustom from '../followerItemCustom/FollowerItemCustom';
import useFollowerItems from './useFollowerItems';

const FollowerItems = ({dataCards, show}: FollowerItemsProps) => {
  
  const { customProps } = useFollowerItems()

  return (
    <div className="follower-items">
      <div className="follower-items__row">
      {
        dataCards.map((item, key) => (
            <FollowerItem {...item} key={`follower-item-${key}`} />
        ))
      }
      {
        show && (
          <FollowerItemCustom
            {...customProps}
          />
        )
      }
      </div>
    </div>
  )
}

export default FollowerItems