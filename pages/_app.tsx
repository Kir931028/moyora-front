import '@styles/global.css';

import React from 'react';
import Head from 'next/head';
import localFont from '@next/font/local';
import { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '@styles/theme';

import AppLayout from '@components/Layout/AppLayout';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const pretendard = localFont({
  src: [
    { path: '../public/font/Pretendard-Thin.woff2', weight: '100' },
    { path: '../public/font/Pretendard-ExtraLight.woff2', weight: '200' },
    { path: '../public/font/Pretendard-Light.woff2', weight: '300' },
    { path: '../public/font/Pretendard-Regular.woff2', weight: '400' },
    { path: '../public/font/Pretendard-Medium.woff2', weight: '500' },
    { path: '../public/font/Pretendard-SemiBold.woff2', weight: '600' },
    { path: '../public/font/Pretendard-Bold.woff2', weight: '700' },
    { path: '../public/font/Pretendard-ExtraBold.woff2', weight: '800' },
    { path: '../public/font/Pretendard-Black.woff2', weight: '900' },
  ],
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Malgun Gothic',
    'sans-serif',
  ],
});

const GlobalStyle = createGlobalStyle`
  * {
  font-family: ${pretendard.style.fontFamily};
  }
`;

const antdTheme = {
  token: {
    colorPrimary: '#FF6D3A',
    colorError: '#D82C0D',
    colorSuccess: '#2C6ECB',
    fontSize: 16,
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    <GlobalStyle />
    {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    <ConfigProvider theme={antdTheme}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>moyora - 우리학교 다시 모여라!</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimal-scale=1 user-scalable=no"
          />
        </Head>
        <AppLayout>
          <main>
            <Component {...pageProps} />
          </main>
        </AppLayout>
      </ThemeProvider>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;
