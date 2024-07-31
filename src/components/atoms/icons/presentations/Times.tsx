import { IconProps } from '../domain/models/IconProps'

const Times = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <mask id="mask0_215_1492" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
    <rect width="24" height="24" fill={color}/>
    </mask>
    <g mask="url(#mask0_215_1492)">
    <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill={color}/>
    </g>
    </svg>
  )
}

export default Times