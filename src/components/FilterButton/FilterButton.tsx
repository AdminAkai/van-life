import { FC } from 'react'

import { readableLabels } from './lib'
import { FilterButtonContainer } from './styledComponents'

interface IFilterButtonProps {
  type: string
  filter?: boolean
  onClick: (type: string) => void
}

const FilterButton: FC<IFilterButtonProps> = ({ type, filter, onClick }) => {
  const handleOnClick = () => {
    onClick(type)
  }

  return (
    <FilterButtonContainer type={type} filter={filter} onClick={handleOnClick}>
      {readableLabels[type]}
    </FilterButtonContainer>
  )
}

export default FilterButton
