export enum Roles {
  'admin',
  'user',
}

// TODO: Implement real user interface for the user object
export interface User {
  id: number
  username: string
  roles: Roles[]
}

export interface AuthState {
  user: User | null
  token: string | null
}
