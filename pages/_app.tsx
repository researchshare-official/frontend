import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import userContext from '../utils/store';
import { useMemo, useState } from 'react';
import { PaletteMode, ThemeOptions } from '@mui/material';
import ColorModeContext from '../utils/ColorModeContext';
import { primary, secondary, background } from '../utils/Theme';

const globalTheme = createTheme({
    palette: {
        primary: primary,
        secondary: secondary,
        background: background,
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = useState<any>(null);

    return (
        <userContext.Provider value={{ user, setUser }}>
            <ThemeProvider theme={globalTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </userContext.Provider>
    );
}

export default MyApp;
