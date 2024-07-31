export interface CardAccordionProps {
  text?: string
  textClose?: string
  orientation?: 'left' | 'center' | 'right'
  color?: string
  margin?: 'top-bottom' | 'top' | 'bottom'
  children?: JSX.Element
}