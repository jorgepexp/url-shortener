import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// const sharedTheme: Theme = {
//   theme: {
//     colors,
//   },
// };

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      secondaryLight: '$purple100', //  $blue600 on dark mode
      primary: '$red300',
      secondaryDark: '$purple900',
      primaryShadow: '$purple200',
      background: '$blue400',
      white: '$white900',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      secondaryLight: '$purple100', //  $blue600 on dark mode
      homeBackground: '$blue900',
      secondaryDark: '$purple900',
      primaryShadow: '$purple200',
      background: '$red200',
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      atrribute='class'
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
