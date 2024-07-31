'use client'

import './networkItemsDashboard.css'

import NetworkItemDashboard from '../networkItemDashboard/NetworkItemDashboard'
import useNetworkItemsDashboard from './useNetworkItemsDashboard'

const NetworkItemsDashboard = () => {
	const { network, networks } = useNetworkItemsDashboard()

	return (
		<div className="network-items-dashboard">
			{networks.map((item, key) => (
				<div className="network-items-dashboard__item" key={`network-${key}`}>
					<NetworkItemDashboard
						icon={item.icon}
						size={item.size}
						onClick={item.onClick}
						text={item.text}
						active={item.text === network}
					/>
				</div>
			))}
		</div>
	)
}

export default NetworkItemsDashboard
