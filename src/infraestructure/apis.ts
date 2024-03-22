import { 
  apiCountryURL,
  ipregistryKey,
  ipregistryURL,
  rootServer
} from "@/helpers/rootServer"

export const apis = {
  contact: `${rootServer}/lead/email`,
  getCountries: `${apiCountryURL}/api/get-countries`,
  getCountry: `${ipregistryURL}?key=${ipregistryKey}`,
}