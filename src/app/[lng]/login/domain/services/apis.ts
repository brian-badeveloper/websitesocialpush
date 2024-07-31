import { rootServer } from "@/helpers/rootServer"

export const apis = {
  login: `${rootServer}/lead/sign-in`,
  forgot: `${rootServer}/lead/otp`,
  validateCode: `${rootServer}/lead/otp`,
  resetPassword: `${rootServer}/lead/change-password-with-otp`,
}
