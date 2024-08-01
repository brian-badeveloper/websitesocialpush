import { Product } from "@/context/cartReducerProps"
import { LanguageParams } from "@/models/interfaces/LanguageProps"

export interface HistoricTableItemParams extends LanguageParams {
  item: HistoricTableItemProps
}

export interface HistoricTableItemProps extends Product {}