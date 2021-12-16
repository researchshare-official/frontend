import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { PaletteMode, ThemeOptions } from '@mui/material';
import ColorModeContext from '../utils/ColorModeContext';
import { primary, secondary, background } from '../utils/Theme';

const globalTheme: ThemeOptions = {
    palette: {
        primary: primary,
        secondary: secondary,
        background: background,
    },
};

function MyApp({ Component, pageProps }: AppProps) {
    const [mode, setMode] = useState<PaletteMode>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                );
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
                ...globalTheme,
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default MyApp;
