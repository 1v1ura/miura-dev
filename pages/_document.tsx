import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head />
        <body className="font-sans leading-relaxed">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
