import { IconProps } from '../domain/models/IconProps'

const SquareCheck = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 19" fill="none">
    <rect width="20" height="19" rx="3" fill={color} />
    <rect x="2.86426" y="2.59082" width="15.2727" height="13.8182" rx="3" fill="white" fillOpacity="0.01"/>
    <path d="M14.796 6.90918L9.06871 12.091L6.20508 9.50023" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default SquareCheck