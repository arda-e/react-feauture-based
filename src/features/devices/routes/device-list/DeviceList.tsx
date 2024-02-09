import React from 'react'
import { useGetDevicesQuery } from '../../device.api'

const DeviceList = () => {
  const { data, error, isLoading } = useGetDevicesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div className="flex gap-4">
      {data?.map((device) => {
        return (
          <div key={device.id}>
            {device.deviceId} - {device.deviceModel} - {device.brand} - {device.deviceStatus}
          </div>
        )
      })}
    </div>
  )
}

export default DeviceList
