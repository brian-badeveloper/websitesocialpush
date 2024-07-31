import { IconProps } from '../domain/models/IconProps'

const Comment = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 39 41" fill="none">
    <path d="M35.5483 31.0572L38.1796 40.7521L28.4686 38.0888C25.6632 39.6767 22.4099 40.6153 19.0902 40.5865C8.52659 40.4949 0.0778648 31.5553 0.174813 20.5138C0.271057 9.5524 8.95188 0.680571 19.4398 0.771541C30.0033 0.863167 38.4514 9.80269 38.3544 20.845C38.3211 24.6331 37.2344 28.0892 35.5483 31.0572Z" fill={color}/>
    </svg>
  )
}

export default Comment