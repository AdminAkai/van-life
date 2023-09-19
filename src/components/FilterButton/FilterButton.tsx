import { FC } from 'react'

import { readableLabels } from './lib'
import { FilterButtonContainer } from './styledComponents'

interface IFilterButtonProps {
  type: string
  filter?: boolean
}

const FilterButton: FC<IFilterButtonProps> = ({ type, filter }) => (
  <FilterButtonContainer type={type} filter={filter}>
    {readableLabels[type]}
  </FilterButtonContainer>
)

export default FilterButton
