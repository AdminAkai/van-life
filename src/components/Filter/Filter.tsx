import { FC } from 'react'

import { ClearFilterButton, FilterContainer } from './styledComponents'
import FilterButton from '../FilterButton'
import { FilterOptions } from './lib'

const Filter: FC = () => {
  return (
    <FilterContainer>
      {FilterOptions.map(({ type, label }, index) => (
        <FilterButton key={`${label}-${index}`} type={type} filter />
      ))}
      <ClearFilterButton>Clear Filters</ClearFilterButton>
    </FilterContainer>
  )
}

export default Filter
