import React from 'react'

interface DeviceCardProps {
  deviceId: number
  deviceModel: string
  brand: string
  deviceStatus: number
}

const DeviceCard = (props: DeviceCardProps) => {
  return (
    <div
      id="device-card"
      className="border-2 rounded-md bg-white "
    >
      {props.deviceId} - {props.deviceModel} - {props.brand} - {props.deviceStatus}
    </div>
  )
}

export default DeviceCard
