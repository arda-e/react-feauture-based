export interface Privilege {
  id: number
  name: string
  description: string
}

export interface Role {
  roleId: number
  name: string
  description: string
  privileges: Privilege[]
}

// !TODO:  Decide if entity interfaces should be defined under features or under a seperate folder entities.
// ? Personally, I prefer common entties to be used by multiple features defined under a seperate folder.

/*
Example: 
src
  - features
  - entities
    - user.ts
    - role.ts
    - device.ts
*/

export interface User {
  id: number
  userName: string
  fullName: string
  userMail: string
  dateOfRegistration: string
  groups: unknown[] // Define a Group interface if needed
  roles: Role[]
}

export interface AuthState {
  user: User | null
  accessToken: string | null
  publicKey: string | null
  refreshToken: string | null
}
