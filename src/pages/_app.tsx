import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/global-styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
