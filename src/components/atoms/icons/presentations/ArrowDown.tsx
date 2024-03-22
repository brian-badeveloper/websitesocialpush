import { IconProps } from '../domain/models/IconProps'

const ArrowDown = ({ width, height, color }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 16" fill="none">
      <g clipPath="url(#clip0_458_15)">
      <path d="M13.3246 3.61633H0.675296C0.0767111 3.61633 -0.228228 4.44242 0.200946 4.93291L6.52562 12.1612C6.78538 12.458 7.21455 12.458 7.47443 12.1612L13.7991 4.93291C14.2282 4.44242 13.9232 3.61633 13.3246 3.61633Z" fill={color} />
      </g>
      <defs>
      <clipPath id="clip0_458_15">
      <rect width="14" height="16" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowDown
