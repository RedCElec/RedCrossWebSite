import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
 palette: {
   primary: {
     main: "#ffffff",
   },
   secondary: {
    light: '#0066ff',
    main: '#0044ff',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#ffcc00',
  },
 },
});