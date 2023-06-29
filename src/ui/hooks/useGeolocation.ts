import { useEffect, useState } from 'react'
import ILocation from '../types/ILocation'

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)
  const [location, setLocation] = useState<ILocation | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLoading(false)
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      },
      (positionError) => {
        setHasError(true)
        setIsLoading(false)
      }
    )
  }, [])

  return { isLoading, hasError, location }
}

export default useGeolocation
