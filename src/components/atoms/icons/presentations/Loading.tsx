import React from 'react'
import { IconProps } from '../domain/models/IconProps'

const Loading = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 21" fill="none">
    <path d="M10 0.0404659C11.9778 0.0404658 13.9112 0.626956 15.5557 1.72577C17.2002 2.82458 18.4819 4.38637 19.2388 6.21363C19.9957 8.04089 20.1937 10.0516 19.8079 11.9914C19.422 13.9312 18.4696 15.713 17.0711 17.1115C15.6725 18.5101 13.8907 19.4625 11.9509 19.8483C10.0111 20.2342 8.00043 20.0361 6.17317 19.2793C4.3459 18.5224 2.78412 17.2407 1.6853 15.5962C0.586489 13.9517 -3.70855e-07 12.0183 -4.32886e-07 10.0405L10 10.0405L10 0.0404659Z" fill={color} />
    </svg>
  )
}

export default Loading