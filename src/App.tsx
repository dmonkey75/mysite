import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Main, Header, Footer } from './layouts'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Routes } from './routes';

const Montserrat = {
    fontFamily: 'Montserrat',
};

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#70D793',
        }
    },
    // palette: { 
    //     primary: {
    //         light: '#dadada',
    //         main: '#3c3c3c',
    //         dark: '#1c1c1c',
    //         contrastText: '#fff'
    //     },
    //     secondary: {
    //         light: '#eeeeee',
    //         main: '#e0e0e0',
    //         dark: '#9e9e9e',
    //         contrastText: '#000000'
    //     },
    // },
    typography: {
        fontFamily: [
            'Poppins',
            'Montez',
        ].join(','),
        h2: {
            fontFamily: 'Poppins',
            //color: '#5A5959',
        },
        h3: {
            //color: '#5A5959',
        },
        subtitle1: {
            fontFamily: 'Poppins',
            //color: '#5A5959',
        },
        h4: {
            fontFamily: 'Poppins',
            //color: '#5A5959',
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                //'@font-face': [Montserrat],
                //'@font-color': '#333333',
                body: {
                    //backgroundColor: '#eeeeee',
                    // background: 'radial-gradient(black 5%, transparent 10%) 0 0, ' + 
                    //             // 'radial-gradient(black 15%, transparent 16%) 8px 8px, ' + 
                    //             // 'radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, ' +
                    //              'radial-gradient(rgba(255,255,255,.1) 5%, transparent 20%) 8px 9px',
                    backgroundColor: '#282828',
                    // backgroundSize: '4px 4px',
                }
            },
        },
    },
});

theme = responsiveFontSizes(theme);

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