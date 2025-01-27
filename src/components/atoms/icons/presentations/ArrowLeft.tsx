import { IconProps } from '../domain/models/IconProps'

const ArrowLeft = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 22" fill="none">
    <path d="M21.6666 9.66667H5.43992L12.8933 2.21334L10.9999 0.333336L0.333252 11L10.9999 21.6667L12.8799 19.7867L5.43992 12.3333H21.6666V9.66667Z" fill={color} />
    </svg>
  )
}

export default ArrowLeft