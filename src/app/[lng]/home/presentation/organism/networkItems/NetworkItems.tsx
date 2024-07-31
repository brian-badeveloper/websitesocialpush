'use client'

import './networkItems.css'

import useNetworkItems from './useNetworkItems'
import NetworkItem from '../networkItem/NetworkItem' 

const NetworkItems = () => {
	const { network, onChangeNetwork, networks } = useNetworkItems()

	return (
		<div className="network-items">
			{networks.map((item, key) => (
				<div className="network-items__item" key={`network-${key}`}>
					<NetworkItem
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

export default NetworkItems
