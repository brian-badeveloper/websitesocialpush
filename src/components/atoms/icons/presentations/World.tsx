import { IconProps } from '../domain/models/IconProps'

const World = ({ height, width, color }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 49" fill="none">
      <mask id="mask0_252_13" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="49">
      <path d="M0 0H49.6666V49H0V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_252_13)">
      <path d="M48.2115 24.5C48.2115 37.1853 37.6912 47.5645 24.8333 47.5645C11.9754 47.5645 1.45508 37.1853 1.45508 24.5C1.45508 11.8147 11.9754 1.43555 24.8333 1.43555C37.6912 1.43555 48.2115 11.8147 48.2115 24.5Z" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M24.834 47.5645V1.43555" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M36.4746 24.5C36.4746 37.1853 31.2629 47.5645 24.834 47.5645C18.4051 47.5645 13.1934 37.1853 13.1934 24.5C13.1934 11.8147 18.4051 1.43555 24.834 1.43555C31.2629 1.43555 36.4746 11.8147 36.4746 24.5Z" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M48.2115 24.5H1.45508" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M44.0853 11.5801H5.58203" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M44.0853 37.4199H5.58203" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
      </g>
    </svg>
  )
}

export default World