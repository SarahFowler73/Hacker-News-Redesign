import styled from 'styled-components'

import { Star } from '../../common/assets/Star'
import { SmallTextStyles } from '../../common/components/Typography'
import { TransformedHitResult } from '../../common/types'
import { selectGetIsStarredItem } from '../../data/selectors'
import { toggleStarred } from '../../data/starredSlice'
import { useAppDispatch, useAppSelector } from '../../data/store'

const SaveButton = styled.button`
  background: none;
  display: inline-flex;
  gap: 2px;
  &:hover {
  }
`

const StyledLabel = styled.span(() => SmallTextStyles)

export const SaveItemButton = ({ hit }: { hit: TransformedHitResult }) => {
  const dispatch = useAppDispatch()
  const isStarred = useAppSelector(selectGetIsStarredItem(hit.id))

  const handleSaveItem = () => {
    dispatch(toggleStarred(hit))
  }

  return (
    <SaveButton aria-label="toggle save item" onClick={handleSaveItem}>
      <Star fill={isStarred ? 'orange' : 'none'} />
      <StyledLabel>{isStarred ? 'saved' : 'save'}</StyledLabel>
    </SaveButton>
  )
}
