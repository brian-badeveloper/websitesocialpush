import { IconProps } from '../domain/models/IconProps'

const History = ({width, height, color}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
    <g>
    <path d="M17.872 4.00233C11.0853 3.81567 5.52535 9.269 5.52535 16.0023H3.13868C2.53868 16.0023 2.24535 16.7223 2.67202 17.1357L6.39202 20.869C6.65868 21.1357 7.07202 21.1357 7.33868 20.869L11.0587 17.1357C11.472 16.7223 11.1787 16.0023 10.5787 16.0023H8.19202C8.19202 10.8023 12.432 6.60233 17.6587 6.669C22.6187 6.73567 26.792 10.909 26.8587 15.869C26.9253 21.0823 22.7253 25.3357 17.5253 25.3357C15.3787 25.3357 13.392 24.6023 11.8187 23.3623C11.2853 22.949 10.5387 22.989 10.0587 23.469C9.49868 24.029 9.53868 24.9757 10.1653 25.4557C12.192 27.0557 14.7387 28.0023 17.5253 28.0023C24.2587 28.0023 29.712 22.4423 29.5253 15.6557C29.352 9.40233 24.1253 4.17567 17.872 4.00233ZM17.192 10.669C16.6453 10.669 16.192 11.1223 16.192 11.669V16.5757C16.192 17.0423 16.4453 17.4823 16.8453 17.7223L21.0053 20.189C21.4853 20.469 22.0987 20.309 22.3787 19.8423C22.6587 19.3623 22.4987 18.749 22.032 18.469L18.192 16.189V11.6557C18.192 11.1223 17.7387 10.669 17.192 10.669Z" fill={color} />
    </g>
    </svg>
  )
}

export default History