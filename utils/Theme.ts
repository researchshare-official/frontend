import { PaletteColorOptions } from '@mui/material';
import { TypeBackground } from '@mui/material/styles/createPalette';

export const primary: PaletteColorOptions  = {
    light: "#ffffff",
    main: "#ffffff",
    dark: "#cccccc",
    contrastText: "#000000"
}

export const secondary: PaletteColorOptions = {
    light: "#a975ff",
    main: "#7447d5",
    dark: "#3d19a3",
    contrastText: "#ffffff"
}

export const background: Partial<TypeBackground> = {
    default: "#eee9fa",
    paper: "#000000"
}