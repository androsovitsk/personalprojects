import React from 'react'
import CardContent from '@mui/material/CardContent'
import Skeleton from '../../../../../../../../../../ui/components/Skeleton/Skeleton'
import Card from '@mui/material/Card'

const LocationCardSkeleton: React.FC = () => {
  return (
    <Card variant={'outlined'}>
      <CardContent>
        <Skeleton variant='rectangular' height={'1rem'} />
        <Skeleton variant='rectangular' height={'1rem'} />
        <Skeleton
          variant='rectangular'
          height={'1rem'}
          width={'66%'}
          noMargin
        />
      </CardContent>
    </Card>
  )
}

LocationCardSkeleton.displayName = 'LocationCardSkeleton'

export default LocationCardSkeleton
