import styled, { css, useTheme } from 'styled-components'

import { Star } from '../../common/assets/Star'
import { SmallTextStyles } from '../../common/components/Typography'
import { TransformedHitResult } from '../../common/types'
import { selectGetIsStarredItem } from '../../data/selectors'
import { toggleStarred } from '../../data/starredSlice'
import { useAppDispatch, useAppSelector } from '../../data/store'

const SaveButton = styled.button(
  () => css`
    ${SmallTextStyles}
    background: none;
    display: inline-flex;
    gap: 4px;
    &:hover {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.accent2};
    }
  `,
)

export const SaveItemButton = ({ hit }: { hit: TransformedHitResult }) => {
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const isStarred = useAppSelector(selectGetIsStarredItem(hit.id))

  const handleSaveItem = () => {
    dispatch(toggleStarred(hit))
  }

  return (
    <SaveButton aria-label="toggle save item" onClick={handleSaveItem}>
      {/* as-casting here since styled componets doesn't type your theme 
          unless you do module augmentation. For this little toy project, as-casting
          seems fine
       */}
      <Star
        fill={
          isStarred
            ? (theme as { colors: { accent: string } }).colors.accent
            : 'none'
        }
      />
      <span>{isStarred ? 'saved' : 'save'}</span>
    </SaveButton>
  )
}
