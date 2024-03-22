import { IconProps } from '../domain/models/IconProps'

const ArrowRightRegular = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
    <path d="M5.70874 13H16.8787L11.9987 17.88C11.6087 18.27 11.6087 18.91 11.9987 19.3C12.3887 19.69 13.0187 19.69 13.4087 19.3L19.9987 12.71C20.3887 12.32 20.3887 11.69 19.9987 11.3L13.4187 4.69997C13.0287 4.30997 12.3987 4.30997 12.0087 4.69997C11.6187 5.08997 11.6187 5.71997 12.0087 6.10997L16.8787 11H5.70874C5.15874 11 4.70874 11.45 4.70874 12C4.70874 12.55 5.15874 13 5.70874 13Z" fill={color} />
    </svg>
  )
}

export default ArrowRightRegular