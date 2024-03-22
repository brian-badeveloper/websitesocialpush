import { apiCountryURL, ipregistryKey, ipregistryURL, rootServer } from "@/helpers/rootServer"

export const apis = {
  getCountries: `${apiCountryURL}/api/get-countries`,
  getCountry: `${ipregistryURL}?key=${ipregistryKey}`,
}
