import { createTheme } from '@mui/material'

const weatherAppTheme = createTheme({
  typography: {
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
    h4: { fontWeight: 'bold' },
    h6: { fontWeight: 'bold', lineHeight: 1 },
    subtitle1: { fontWeight: 'bold' }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(2)
        })
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(1)
        })
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(2)
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(2)
        })
      }
    },
    MuiSkeleton: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(2)
        })
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: 0
        })
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(2)
        })
      }
    }
  }
})

export default weatherAppTheme
