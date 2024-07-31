import { LanguageProps } from "@/models/interfaces/LanguageProps"

export interface DashboardTemplateProps extends LanguageProps {
  children?: JSX.Element | string
}