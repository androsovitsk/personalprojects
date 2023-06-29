import React from 'react'
import Text from '../Text/Text'

interface IReadOnlyFieldProps {
  label: string
  value: string
}

const ReadOnlyField: React.FC<IReadOnlyFieldProps> = ({ label, value }) => {
  return (
    <React.Fragment>
      <Text variant={'caption'} noMargin>
        {label}
      </Text>
      <Text variant={'subtitle1'} noMargin>
        {value}
      </Text>
    </React.Fragment>
  )
}

ReadOnlyField.displayName = 'ReadOnlyField'

export default ReadOnlyField
