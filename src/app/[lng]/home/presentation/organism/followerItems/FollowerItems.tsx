import './followerItems.css'

import { FollowerItemsProps } from './FollowerItemsProps';
import FollowerItem from '../followerItem/FollowerItem';
import FollowerItemCustom from '../followerItemCustom/FollowerItemCustom';
import useFollowerItems from './useFollowerItems';

const FollowerItems = ({lng, dataCards, show}: FollowerItemsProps) => {
  
  const { customProps } = useFollowerItems()

  return (
    <div className="follower-items">
      <div className="follower-items__row">
      {
        dataCards.map((item, key) => (
            <FollowerItem item={item} lng={lng} key={`follower-item-${key}`} />
        ))
      }
      {
        show && (
          <FollowerItemCustom
            item={customProps}
            lng={lng}
          />
        )
      }
      </div>
    </div>
  )
}

export default FollowerItems