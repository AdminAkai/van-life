import { FC, useState } from 'react'

import { ClearFilterButton, FilterContainer } from './styledComponents'
import FilterButton from '../FilterButton'
import { FilterOptions } from './lib'

const Filter: FC = () => {
  const [filters, setFilters] = useState<string[]>([])

  const handleSetFilter = (type: string): void => {
    if (filters.includes(type)) {
      const removeFilter = filters.filter((filterType) => type !== filterType)
      setFilters(removeFilter)
    } else {
      setFilters((prev) => [...prev, type])
    }
  }

  const handleClearFilters = (): void => {
    setFilters([])
  }

  return (
    <FilterContainer>
      {FilterOptions.map(({ type, label }, index) => (
        <FilterButton
          key={`${label}-${index}`}
          type={type}
          filter={!filters.includes(type)}
          onClick={handleSetFilter}
        />
      ))}
      <ClearFilterButton onClick={handleClearFilters}>
        Clear Filters
      </ClearFilterButton>
    </FilterContainer>
  )
}

export default Filter
