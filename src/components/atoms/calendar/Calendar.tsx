import { useRef } from 'react'

import './calendar.css'

import { CalendarProps } from './CalendarProps'
import useCalendar from './useCalendar'

const Calendar = ({
	date,
	language,
	bgStyle,
	size,
	textSize,
	disable,
}: CalendarProps) => {

	const { dateView } = useCalendar({date, language})
	
	return (
		<span
			className={`calendar ${bgStyle} ${size} ${disable ? 'disable' : ''}`}
			style={{ fontSize: `${textSize}px` }}
		>{dateView}</span>
	)
}

export default Calendar
