import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        {/* Must  */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Reservoir" />
        <meta name="keywords" content="nft, ethereum, protocol" />
        <link rel="shortcut icon" type="image/svg" href="/reservoir.svg" />
        <title>
          Arcana Market | NFT marketplace
        </title>
        <meta
          name="description"
          content="THE LEGIONS OF ARCANA"
        />
        <meta name="keywords" content="NFT, API, Protocol" />
        {/* Twitter */}
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        <meta
          name="twitter:image"
          content="https://www.genesisdragons.com/images/para.gif"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site:domain"
          content="https://www.genesisdragons.com/"
        />
        <meta name="twitter:url" content="https://www.genesisdragons.com/" />
        {/* should be between 30-60 characters, with a maximum of 70 */}
        <meta
          name="twitter:title"
          content="Arcana Market | NFT marketplace"
        />
        {/* should be between 55 and 200 characters long */}
        <meta
          name="twitter:description"
          content="Arcana Market is an NFT marketplace"
        />
        <meta name="twitter:site" content="@genesisdragons" />

        {/* OG - https://ogp.me/ */}
        {/* https://www.opengraph.xyz/ */}
        {/* should be between 30-60 characters, with a maximum of 90 */}
        <meta
          name="og:title"
          content="Arcana Market | NFT marketplace"
        />
        <meta property="og:type" content="website" />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="en" />
        {/* Make sure the important part of your description is within the first 110 characters, so it doesn't get cut off on mobile. */}
        <meta
          property="og:description"
          content="Arcana Market is an open source NFT marketplac"
        />
        <meta property="og:site_name" content="Arcana Market" />
        <meta property="og:url" content="https://www.genesisdragons.com/" />
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        <meta
          property="og:image"
          content="https://www.genesisdragons.com/images/para.gif"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Reservoir Market banner" />
        <body className="bg-black text-white-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
