export type area = 'frontend' | 'backend' | 'career'

export type buttonModeType = 'flat' | 'outline'

export type FiltersType = Record<area, boolean>

export type ValidatedDataMap<T, K extends keyof T> = {
  [P in K]: {
    value: T[P]
    isValid?: boolean
  }
}
