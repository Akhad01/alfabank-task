import { Button } from '@mui/joy'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleFilter } from '../../store/slices/filter-slice'
import { getFilterShow } from '../../store/selectors/filter-selector'

const FilterButton = () => {
    const dispatch = useAppDispatch()
    const showLikedOnly = useAppSelector(getFilterShow)

    const handleFilterClick = () => {
        dispatch(toggleFilter())
    }

  return (
    <Button onClick={handleFilterClick}>{showLikedOnly ? 'Показать все товары' : 'Показать только залайканные'}</Button>
  )
}

export default FilterButton