import { IconProps } from '../domain/models/IconProps'

const CloseIntro = ({ width, height, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 56 53"
      fill="none"
    >
      <ellipse
        cx="28"
        cy="26.5"
        rx="28"
        ry="26.5"
        fill={color}
        fillOpacity="0.8"
      />
    </svg>
  )
}

export default CloseIntro
