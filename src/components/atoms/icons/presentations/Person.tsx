import { IconProps } from '../domain/models/IconProps'

const Person = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
    <g>
    <path d="M16 16C18.9467 16 21.3333 13.6134 21.3333 10.6667C21.3333 7.72004 18.9467 5.33337 16 5.33337C13.0533 5.33337 10.6667 7.72004 10.6667 10.6667C10.6667 13.6134 13.0533 16 16 16ZM16 18.6667C12.44 18.6667 5.33334 20.4534 5.33334 24V25.3334C5.33334 26.0667 5.93334 26.6667 6.66668 26.6667H25.3333C26.0667 26.6667 26.6667 26.0667 26.6667 25.3334V24C26.6667 20.4534 19.56 18.6667 16 18.6667Z" fill={color}/>
    </g>
    </svg>
  )
}

export default Person