const inputTypes = ['number', 'email', 'password', 'text', 'url'] as const

export type InputType = typeof inputTypes[number]
