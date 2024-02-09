export interface Device {
  id: number
  groups: Group[] //TODO: check if it's the same as auth.group
  deviceId: string
  deviceModel: string
  brand: string
  os: string
  oSVersion: string
  screenSize: string
  screenResolution: string
  googleService: boolean
  macAddress: string
  node: Node
  marketName: string
  specificName: string
  categories: any[] // TODO: fix
  deviceStatus: number
  status: DeviceStatus
  users: any[] //TODO: Fix
  offlineReservedInfo: null | any // Assuming it can be any type or null //TODO: Fix
  reservableGroups: any[] // Assuming it can be an array of any type //TODO: Fix
  bookable: boolean
  favorite: boolean
}

export interface Group {
  id: number
  name: string
  description: string
  active: boolean
  concurrentAccessLimit: number
  bookable: boolean
  notActiveAfter: null | string // Assuming it can be null or a string representing a date
}

export interface Node {
  id: string
  scheme: string
  ip: string
  name: string
  location: null | any // Assuming it can be any type or null //TODO: Fix
  port: number
  profile: string
  state: number
}

export interface DeviceStatus {
  Automation: boolean
  Development: boolean
  Manual: boolean
  Reserved: boolean
}
