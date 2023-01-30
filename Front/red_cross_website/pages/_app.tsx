import '@/styles/globals.css'
import { theme } from "../styles/theme";
import createEmotionCache from "../utils/createEmotionCache";
import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { SessionProvider } from "next-auth/react"

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <SessionProvider session={pageProps.session}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
    </SessionProvider>

  )
}

export default MyApp;
