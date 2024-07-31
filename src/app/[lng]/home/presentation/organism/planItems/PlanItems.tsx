import './planItems.css'

import { PlanItemsProps } from './PlanItemsProps';
import PlanItem from '../planItem/PlanItem';

const LikeItems = ({dataCards}: PlanItemsProps) => {
  return (
    <div className="plan-items">
      <div className="plan-items__row">
      {
        dataCards.map((item, key) => (
            <PlanItem {...item} key={`plan-item-${key}`} />
        ))
      }
      </div>
    </div>
  )
}

export default LikeItems