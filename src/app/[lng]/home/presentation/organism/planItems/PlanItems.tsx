import './planItems.css'

import { PlanItemsProps } from './PlanItemsProps';
import PlanItem from '../planItem/PlanItem';

const LikeItems = ({lng, dataCards}: PlanItemsProps) => {
  return (
    <div className="plan-items">
      <div className="plan-items__row">
      {
        dataCards.map((item, key) => (
            <PlanItem item={item} lng={lng} key={`plan-item-${key}`} />
        ))
      }
      </div>
    </div>
  )
}

export default LikeItems