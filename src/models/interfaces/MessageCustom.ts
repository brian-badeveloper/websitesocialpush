export interface MessageCustomProps {
  message: string
  params: MessageCustomParams[]
}

export interface MessageCustomParams {
  replace: string
  to: string | number | boolean
}