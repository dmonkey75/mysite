import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { purple, blue, green } from '@material-ui/core/colors';
import { Main, Header, Footer } from './layouts'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Routes } from './routes';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9de2b2',
            main: '#70D793',
            dark: '#006f2d',
            contrastText: '#fff'
        },
        secondary: purple,
    }
});

const App: React.FC<{}> = () => {

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main>
            <Header />
            <Routes />
            <Footer />
        </Main>
    </ThemeProvider >
}

export default App;