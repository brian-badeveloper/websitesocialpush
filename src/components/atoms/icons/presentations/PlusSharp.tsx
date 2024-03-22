import { IconProps } from '../domain/models/IconProps'

const PlusSharp = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_275_100"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill={color} />
      </mask>
      <g mask="url(#mask0_275_100)">
        <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill={color} />
      </g>
    </svg>
  )
}

export default PlusSharp
