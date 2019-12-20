export interface PoolSpaInfo {
  name: string
  circuitId: number
  interfaceId: number
  waterTemp: number
  active: boolean
  airTemp: number
  tempScale: string
  heater: {
    modeCode: number
    mode: string
    active: false
    activeCode: number
    activeType: string
    setpoint: {
      current: number
      min: number
      max: number
    }
  }
}
