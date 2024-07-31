export const LoginActionType = {
  login: '[Auth] Login',
  logout: '[Auth] Logout'
}

const loginTypes = [LoginActionType.login, LoginActionType.logout] as const

export type LoginType = typeof loginTypes[number]