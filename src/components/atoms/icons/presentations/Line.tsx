import { IconProps } from '../domain/models/IconProps'

const Line = ({ width, height, color }: IconProps) => {
  return (
    <svg
      id="Layer_1"
      enableBackground="new 0 0 24 24"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path
            d="m19 13h-14c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  )
}

export default Line
