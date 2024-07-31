import { IconProps } from '../domain/models/IconProps'

const Spotify = ({width, height, color}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8203 0.925049C25.8516 0.925049 33.2891 8.36255 33.2891 17.3938C33.2891 26.4915 25.8516 33.8625 16.8203 33.8625C7.72266 33.8625 0.351562 26.4915 0.351562 17.3938C0.351562 8.36255 7.72266 0.925049 16.8203 0.925049ZM23.4609 25.1633C23.9922 25.1633 24.457 24.7649 24.457 24.1672C24.457 23.5696 24.2578 23.304 23.8594 23.0383C19.0781 20.2493 13.5664 20.1165 8.12109 21.3118C7.58984 21.4446 7.19141 21.7766 7.19141 22.4407C7.19141 22.9719 7.58984 23.5032 8.25391 23.5032C8.45312 23.5032 8.78516 23.3704 9.05078 23.304C13.832 22.3743 18.6133 22.4407 22.7969 24.9641C22.9961 25.0969 23.1953 25.1633 23.4609 25.1633ZM25.2539 20.8469C25.9844 20.8469 26.5156 20.2493 26.582 19.5188C26.582 18.9875 26.3164 18.5227 25.7852 18.2571C22.5312 16.2649 18.3477 15.2024 14.0312 15.2024C11.3086 15.2024 9.38281 15.6008 7.52344 16.1321C6.85938 16.3313 6.52734 16.7961 6.52734 17.4602C6.52734 18.1907 7.125 18.7883 7.78906 18.7883C8.12109 18.7883 8.25391 18.6555 8.58594 18.5891C14.0977 17.1282 20.2734 18.1243 24.457 20.5813C24.6562 20.6477 24.9219 20.8469 25.2539 20.8469ZM27.3125 15.8C28.1094 15.8 28.8398 15.136 28.8398 14.2063C28.8398 13.4094 28.5078 13.011 27.9766 12.7454C24.3242 10.554 19.2109 9.55786 14.3633 9.55786C11.5078 9.55786 8.91797 9.88989 6.59375 10.554C5.99609 10.7532 5.39844 11.218 5.39844 12.1477C5.39844 13.011 6.0625 13.7415 6.92578 13.7415C7.25781 13.7415 7.58984 13.6086 7.78906 13.5422C13.3008 12.0149 21.7344 12.679 26.4492 15.5344C26.7812 15.6672 26.9805 15.8 27.3125 15.8Z" fill={color} />
    </svg>
  )
}

export default Spotify