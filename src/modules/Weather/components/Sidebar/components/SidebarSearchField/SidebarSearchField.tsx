import React, { useState } from 'react'
import TextField from '../../../../../../ui/components/TextField/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { Search } from '@mui/icons-material'
import useDebounce from '../../../../../../ui/hooks/useDebounce'
import { useTranslation } from 'react-i18next'
import Divider from '@mui/material/Divider'
import useGetSearchFieldLocationWeather from './hooks/useGetSearchFieldLocationWeather'

const SidebarSearchField: React.FC = () => {
  const [value, setValue] = useState<string | null>(null)

  const { t } = useTranslation('weatherModule')

  const debouncedValue = useDebounce<string>({ value })
  useGetSearchFieldLocationWeather(debouncedValue)

  return (
    <React.Fragment>
      <Divider />
      <TextField
        label={`${t('sidebar.searchField')}...`}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Search />
            </InputAdornment>
          )
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <Divider />
    </React.Fragment>
  )
}

SidebarSearchField.displayName = 'SidebarSearchField'

export default SidebarSearchField
