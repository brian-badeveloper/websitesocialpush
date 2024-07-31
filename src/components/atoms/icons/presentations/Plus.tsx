import { IconProps } from '../domain/models/IconProps'

const Plus = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 12" fill="none">
    <g clipPath="url(#clip0_215_1475)">
    <path d="M10.9453 4.94531H7.05469V1.05469C7.05469 0.472195 6.58249 0 6 0C5.41751 0 4.94531 0.472195 4.94531 1.05469V4.94531H1.05469C0.472195 4.94531 0 5.41751 0 6C0 6.58249 0.472195 7.05469 1.05469 7.05469H4.94531V10.9453C4.94531 11.5278 5.41751 12 6 12C6.58249 12 7.05469 11.5278 7.05469 10.9453V7.05469H10.9453C11.5278 7.05469 12 6.58249 12 6C12 5.41751 11.5278 4.94531 10.9453 4.94531Z" fill={color}/>
    </g>
    <defs>
    <clipPath id="clip0_215_1475">
    <rect width={width} height={height} fill={color}/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default Plus