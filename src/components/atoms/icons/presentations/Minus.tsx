import { IconProps } from '../domain/models/IconProps'

const Minus = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 11 16" fill="none">
    <path d="M9.93548 6.45166H1.06452C0.479032 6.45166 0 7.14843 0 8.00005C0 8.85166 0.479032 9.54843 1.06452 9.54843H9.93548C10.521 9.54843 11 8.85166 11 8.00005C11 7.14843 10.521 6.45166 9.93548 6.45166Z" fill={color}/>
    </svg>
  )
}

export default Minus