import { IconProps } from '../domain/models/IconProps'

const Square = ({width, height, color}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1.16992" width="24" height="21.854" rx="4" stroke={color} strokeWidth="2"/>
    </svg>
  )
}

export default Square