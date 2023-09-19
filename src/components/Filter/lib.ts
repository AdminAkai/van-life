interface IFilterOption {
  label: string
  type: string
}

export const FilterOptions: IFilterOption[] = [
  {
    label: 'Simple',
    type: 'simple',
  },
  {
    label: 'Luxury',
    type: 'luxury',
  },
  { label: 'Rugged', type: 'rugged' },
]
