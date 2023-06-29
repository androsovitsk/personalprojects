interface IRainData {
  /** Rain volume for the last 1 hour, measured in mm */
  '1h'?: number
  /** Rain volume for the last 3 hours, measured in mm */
  '3h': number
}

export default IRainData
