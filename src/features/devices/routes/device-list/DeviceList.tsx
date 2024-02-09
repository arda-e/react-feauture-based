import React from 'react'
import { useGetDevicesQuery } from '../../device.api'
import DeviceCard from '../../components/DeviceCard/DeviceCard'

const DeviceList = () => {
  const { data, error, isLoading } = useGetDevicesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 m-8">
      {data?.map((device) => {
        return (
          <DeviceCard
            key={device.id}
            deviceId={device.id}
            deviceModel={device.deviceModel}
            deviceStatus={device.deviceStatus}
            brand={device.brand}
          />
        )
      })}
    </div>
  )
}

export default DeviceList
