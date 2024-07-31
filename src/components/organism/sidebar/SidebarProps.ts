import { LanguageProps } from "@/models/interfaces/LanguageProps"

export interface SidebarProps extends LanguageProps{
  onChange: () => void
}