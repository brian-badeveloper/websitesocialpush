import './packageItemsDashboard.css'

import { PackageItemsDashboardProps } from './PackageItemsDashboardProps';
import PlanItemDashboard from '../planItemDashboard/PlanItemDashboard';
import { PlanItemDashboardProps } from '../planItemDashboard/PlanItemDashboardProps';
import FollowerItemDashboard from '../followerItemDashboard/FollowerItemDashboard';
import { FollowerItemDashboardProps } from '../followerItemDashboard/FollowerItemDashboardProps';
import FollowerItemCustomDashboard from '../followerItemCustomDashboard/FollowerItemCustomDashboard';
import { FollowerItemCustomDashboardProps } from '../followerItemCustomDashboard/FollowerItemCustomDashboardProps';
import LikeItemDashboard from '../likeItemDashboard/LikeItemDashboard';
import { LikeItemDashboardProps } from '../likeItemDashboard/LikeItemDashboardProps'

const PackageItemsDashboard = ({lng, dataCards}: PackageItemsDashboardProps) => {
  return (
    <div className="package-items-dashboard">
      <div className="package-items-dashboard__row">
      {
        dataCards.map((item, key) => (
          {
            'Follower': (
              item.config?.name_social !== "Customized" ? (
                <FollowerItemDashboard item={{...item as FollowerItemDashboardProps, senior: true, stars: 3}} lng={lng} key={`package-item-follower-${key}`} />
              ) : (
                <FollowerItemCustomDashboard item={{...item as FollowerItemCustomDashboardProps, senior: true, stars: 3}} lng={lng} key={`package-item-follower-custom-${key}`} />
              )
            ),
            'Plan': (
              <PlanItemDashboard item={{...item as PlanItemDashboardProps, senior: true, stars: 2}} lng={lng} key={`package-item-plan-${key}`} />
            ),
            'Like': (
              <LikeItemDashboard item={{...item as LikeItemDashboardProps, senior: true, stars: 1}} lng={lng} key={`package-item-like-${key}`} />
            )
          }[item.type]
          )
        )
      }
      </div>
    </div>
  )
}

export default PackageItemsDashboard