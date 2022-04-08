import React from "react";
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/png"
            sizes="any"
            href="/images/logo.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <meta name="msapplication-TileImage" content="/images/logo.png" />

          <meta property="og:site_name" content="Arthur Sena | Desenvolvedor" />
          <meta property="og:title" content="Arthur Sena | Desenvolvedor" />
          <meta
            property="og:description"
            content="Me chamo Arthur Sena e sou desenvolvedor de software, clique e conheça meu trabalho!"
          />

          <meta property="og:image" content="/images/share.png" />

          <meta property="og:type" content="website" />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />

          <meta property="og:url" content="https://www.arthursena.com.br" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
