import { NetworkType } from "@/models/types/NetworkType"
import { AuthReducerProps, User, UserAll } from "./authReducerProps"
import { CartReducerProps, Product } from "./cartReducerProps"
import { NetworkLinks } from "@/models/interfaces/Network"
import { LanguagesDataType, LanguagesType } from "@/models/i18n"
import { Plan } from "@/models/interfaces/Plan"


export interface SiteContextProps {
  language: LanguagesType
  getLanguages: () => LanguagesDataType
  changeLang: (lang: LanguagesType) => void
  network: NetworkType
  onChangeNetwork: (network: NetworkType) => void
  onDetectNetwork: () => void
  onRedirectNetwork: (networkLink: NetworkLinks) => RedirectNetwork
  login: ({name, email, token}: User) => void
  logout: () => void
  getState: () => AuthReducerProps
  getUser: () => UserAll
  authValidate: () => boolean
  error: ErrorAlert
  onAlert: ({status, messages, type}: ErrorAlert) => void
  onAlertStatus: (status:boolean) => void
  cartState: CartReducerProps
  getProduct: (product:Product) => Product | undefined
  quantityCart: () => number
  addCart: (product:Product) => void
  updateCart: (product:Product) => void
  deleteCart: (product:Product) => void
  truncateCart: () => void
  getInitPlans: () => void
  getAllPlans: () => Plan[]
  getAllPlansByNetwork: (network: string) => Plan[]
  getAllPlansByNetworkAndType: (network: string, type: string) => Plan[]
  getInitPlansSold: () => void
  getPlansSold: () => Plan[]
  getInitHistoric: () => void
  getAllHistoric: () => Product[]
}

export interface SiteProviderProps {
  children: JSX.Element  
}

export interface ErrorAlert {
  status: boolean
  messages: string[]
  type: 'success' | 'error' | 'info' | 'danger' | 'warning'
}

export interface RedirectNetwork {
  current: string,
  full_route: string,
  link: string
}