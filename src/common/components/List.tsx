import styled from 'styled-components'

import { ColumnLayout } from './LayoutHelpers'

export const StyledOrderedList = styled(ColumnLayout).attrs({ as: 'ol' })`
  margin: 0;
  gap: 1.625rem;
`
