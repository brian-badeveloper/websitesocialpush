import { IconProps } from '../domain/models/IconProps'

const Twitch = ({width, height, color}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.4448 7.40015V14.7048H21.855V7.40015H24.4448ZM17.4058 7.33374V14.6384H14.8159V7.33374H17.4058ZM6.44873 0.493896H30.8198V17.4939L19.2651 28.4509H14.1519L7.77686 34.4939V28.4509H0.0737305V6.60327L6.44873 0.493896ZM28.2964 16.2986V2.95093H7.77686V21.1462H13.5542V25.3962L18.0034 21.1462H23.1167L28.2964 16.2986Z" fill={color} />
    </svg>
  )
}

export default Twitch