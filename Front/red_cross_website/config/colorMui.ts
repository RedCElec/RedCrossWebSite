import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fffff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default theme;