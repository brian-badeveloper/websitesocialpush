import { IconProps } from '../domain/models/IconProps'

const ChevronDown = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <mask id="mask0_215_337" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
    <rect width={width} height={height} fill={color} />
    </mask>
    <g mask="url(#mask0_215_337)">
    <path d="M12 15.375L6 9.37498L7.4 7.97498L12 12.575L16.6 7.97498L18 9.37498L12 15.375Z" fill={color} />
    </g>
    </svg>
  )
}

export default ChevronDown