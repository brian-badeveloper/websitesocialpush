import { createContext } from 'react'
import { RedirectNetwork, SiteContextProps } from './SiteProps';
import { AuthReducerProps, UserAll } from './authReducerProps';
import { CartReducerProps } from './cartReducerProps';
import  { LanguagesDataType, languages } from '@/models/i18n';

export const SiteContext = createContext<SiteContextProps>({
  language: 'es',
  getLanguages: ():LanguagesDataType => (languages['es']),
  changeLang: () => {},
  network: 'Instagram',
  onChangeNetwork: () => {},
  onDetectNetwork: () => {},
  onRedirectNetwork: ():RedirectNetwork => ({
    current: '',
    full_route: '',
    link: ''
  }),
  login: () => {},
  logout: () => {},
  getState: ():AuthReducerProps => ({
    logged: false,
    user: undefined
  }),
  getUser: ():UserAll => ({
    id: '',
    name: '',
    email: '',
    token: ''
  }),
  authValidate: () => false,
  error: {
    messages: [],
    status: false,
    type: 'danger'
  },
  onAlert: () => {},
  onAlertStatus: () => {},
  cartState: {
    products: [],
    subtotal: 0,
    total: 0
  },
  getProduct: () => undefined,
  quantityCart: () => 0,
  addCart: () => {},
  updateCart: () => {},
  deleteCart: () => {},
  truncateCart: () => {},
  getInitPlans: () => {},
  getAllPlans: () => [],
  getAllPlansByNetwork: () => [],
  getAllPlansByNetworkAndType: () => [],
  getInitPlansSold: () => {},
  getPlansSold: () => [],
  getInitHistoric: () => {},
  getAllHistoric: () => [],
});