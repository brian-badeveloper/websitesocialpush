import { 
  apiCountryURL,
  ipregistryKey,
  ipregistryURL,
  rootServer
} from "@/helpers/rootServer"

export const apis = {
  contact_lead: `${rootServer}/lead/email`,
  contact: `${rootServer}/contact`,
  register: `${rootServer}/lead`,
  plans: `${rootServer}/plan`,
  favorites: `${rootServer}/plan/favorites`,
  historic: `${rootServer}/plan/lead`,
  getCountries: `${apiCountryURL}/api/get-countries`,
  getCountry: `${ipregistryURL}?key=${ipregistryKey}`,
}