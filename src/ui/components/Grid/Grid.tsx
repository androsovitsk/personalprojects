import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2'
import { Grid2Props } from '@mui/material/Unstable_Grid2'

const Grid: React.FC<Grid2Props> = ({ children, ...props }) => {
  return <Grid2 {...props}>{children}</Grid2>
}

Grid.displayName = 'Grid'

export default Grid
