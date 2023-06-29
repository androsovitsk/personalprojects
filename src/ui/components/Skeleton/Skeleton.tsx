import React from 'react'
import MUISkeleton from '@mui/material/Skeleton'
import { SkeletonProps } from '@mui/material'

interface ISkeletonProps extends SkeletonProps {
  noMargin?: boolean
}

const Skeleton: React.FC<ISkeletonProps> = ({
  noMargin = false,
  children,
  ...props
}) => {
  return (
    <MUISkeleton {...(noMargin && { sx: { marginBottom: 0 } })} {...props}>
      {children}
    </MUISkeleton>
  )
}

Skeleton.displayName = 'Skeleton'

export default Skeleton
