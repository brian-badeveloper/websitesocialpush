export const LoginState = ['Login','OTP','Forgot','Password'] as const

export type LoginStateType = typeof LoginState[number]