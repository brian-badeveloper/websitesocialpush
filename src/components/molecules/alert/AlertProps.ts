export interface AlertProps {
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
  onStatus: (status:boolean) => void
  fixed: boolean
}