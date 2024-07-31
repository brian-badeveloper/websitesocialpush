export interface FaqsProps {
  title: string
  questions: Question[]
}

export interface Question {
  title: string
  text: string
}