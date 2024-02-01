import * as z from 'zod'

export interface GetPublicKeyResponse {
  type: string
  value: string
}

const LoginRequestSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
      invalid_type_error: 'Username must be a string',
    })
    .min(3, {
      message: 'Username must be at least 3 characters long',
    }),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    })
    .min(3, {
      message: 'Password must be at least 3 characters long',
    }),
})

export type LoginRequest = z.infer<typeof LoginRequestSchema>
export interface LoginResponse {
  token: string
}

export type LogoutResponse = boolean
export interface LogoutRequest {
  refreshToken: string
}
