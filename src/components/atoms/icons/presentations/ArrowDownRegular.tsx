import { IconProps } from '../domain/models/IconProps'

const ArrowDownRegular = ({ width, height, color }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z" fill={color} />
    </svg>
  )
}

export default ArrowDownRegular
