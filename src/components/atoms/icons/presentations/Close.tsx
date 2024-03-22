import { IconProps } from '../domain/models/IconProps'

const Close = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 26"
      fill="none"
    >
      <line
        x1="21.5"
        y1="1.32289"
        x2="1.49999"
        y2="24.0003"
        stroke={color}
        strokeWidth="4"
      />
      <line
        y1="-2"
        x2="29.4942"
        y2="-2"
        transform="matrix(0.678098 0.734971 -0.730607 0.682798 0 3.32258)"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  )
}

export default Close
