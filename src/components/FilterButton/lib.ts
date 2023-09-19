export const grabColor = (type: string): string => {
  if (type === 'simple') return 'orange'
  if (type === 'rugged') return 'green'
  return 'black'
}

export enum LabelEnum {
  simple = 'Simple',
  rugged = 'Rugged',
  luxury = 'Luxury',
}

interface IReadableLabels {
  [key: string]: LabelEnum
  simple: LabelEnum.simple
  rugged: LabelEnum.rugged
  luxury: LabelEnum.luxury
}

export const readableLabels: IReadableLabels = {
  simple: LabelEnum.simple,
  rugged: LabelEnum.rugged,
  luxury: LabelEnum.luxury,
}
