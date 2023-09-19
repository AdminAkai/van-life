import { FC } from 'react'

import { readableLabels } from './lib'
import { FilterButtonContainer } from './styledComponents'

interface IFilterButtonProps {
  type: string
}

const FilterButton: FC<IFilterButtonProps> = ({ type }) => (
  <FilterButtonContainer type={type}>
    {readableLabels[type]}
  </FilterButtonContainer>
)

export default FilterButton
