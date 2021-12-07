import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { common, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[400]
        },
        secondary: {
            main: common.white
        },
    }
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
