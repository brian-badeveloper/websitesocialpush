import styles from './hamburgerButton.module.css'

import { HamburgerButtonProps } from './HamburgerButtonProps'

const HamburgerButton = ({
	status,
	show,
	color,
	onChangeStatus
}: HamburgerButtonProps) => {
	return (
		<div className={`${styles.button_navbar} ${!show ? styles.button_navbar___auto : ''} ${status ? styles.active : ''}`} onClick={onChangeStatus}>
			<span style={{ background: color }}></span>
			<span style={{ background: color }}></span> 
			<span style={{ background: color }}></span> 
		</div>
	)
}

export default HamburgerButton
