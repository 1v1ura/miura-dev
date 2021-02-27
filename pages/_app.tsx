import { useEffect } from 'react'
import { AppProps } from 'next/app'
import '@/styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    console.log(
      '%cWelcome to Miura.dev 🎉',
      'color: green; font-size: 20px; font-weight: bold;'
    )
  }, [])

  return <Component {...pageProps} />
}
