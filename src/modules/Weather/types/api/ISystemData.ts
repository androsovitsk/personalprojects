interface ISystemData {
  /** Internal parameter */
  type: number
  /** Internal parameter */
  id: number
  /** Internal parameter */
  message?: string
  /** Country code */
  country: string
  /** Sunrise time, unix, UTC */
  sunrise: number
  /** Sunset time, unix, UTC */
  sunset: number
}

export default ISystemData
