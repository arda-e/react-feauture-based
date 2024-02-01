// Define the type for your user, token, and error
export enum Roles {
  'admin',
  'user',
}

export interface User {
  id: number
  username: string
  roles: Roles[]
}

export interface AuthState {
  user: User | null
  token: string | null
}
