import { IconProps } from '../domain/models/IconProps'

const Facebook = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15 16" fill="none">
    <g clipPath="url(#clip0_215_309)">
    <path d="M12.8027 0.5H2.19727C0.985794 0.5 0 1.48579 0 2.69727V13.3027C0 14.5142 0.985794 15.5 2.19727 15.5H6.62109V10.1973H4.86328V7.56055H6.62109V5.77344C6.62109 4.31947 7.80384 3.13672 9.25781 3.13672H11.9238V5.77344H9.25781V7.56055H11.9238L11.4844 10.1973H9.25781V15.5H12.8027C14.0142 15.5 15 14.5142 15 13.3027V2.69727C15 1.48579 14.0142 0.5 12.8027 0.5Z" fill={color}/>
    </g>
    <defs>
    <clipPath id="clip0_215_309">
    <rect width={width} height={height} fill={color} transform="translate(0 0.5)"/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default Facebook