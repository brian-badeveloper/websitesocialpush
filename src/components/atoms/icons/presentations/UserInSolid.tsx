import { IconProps } from '../domain/models/IconProps'

const UserInSolid = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 170 170" fill="none">
    <path d="M84.9996 70.8333C100.648 70.8333 113.333 58.1481 113.333 42.5C113.333 26.8519 100.648 14.1667 84.9996 14.1667C69.3515 14.1667 56.6663 26.8519 56.6663 42.5C56.6663 58.1481 69.3515 70.8333 84.9996 70.8333Z" fill={color}/>
    <path d="M141.667 123.958C141.667 141.56 141.667 155.833 85.0004 155.833C28.3337 155.833 28.3337 141.56 28.3337 123.958C28.3337 106.356 53.7062 92.0833 85.0004 92.0833C116.295 92.0833 141.667 106.356 141.667 123.958Z" fill={color}/>
    </svg>
  )
}

export default UserInSolid