import Head from 'next/head';

function SEO({ title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta name="keywords" content={keywords} />
        {/*<meta*/}
        {/*    property="og:url"*/}
        {/*    content={`${process.env.NEXT_PUBLIC_SITE_URL}${url}`}*/}
        {/*    key="og:url"*/}
        {/*/>*/}
        {/*<meta property="og:title" content={title} key="og:title" />*/}
        {/*<meta*/}
        {/*    property="og:description"*/}
        {/*    content={description}*/}
        {/*    key="og:description"*/}
        {/*/>*/}
        {/*<meta*/}
        {/*    property="og:image"*/}
        {/*    content={imageSrc(imageShare)}*/}
        {/*    key="og:image"*/}
        {/*/>*/}
        {/*<link*/}
        {/*    rel="canonical"*/}
        {/*    href={`${process.env.NEXT_PUBLIC_SITE_URL}${url}`}*/}
        {/*/>*/}

        {/*{preventIndexing && (*/}
        {/*    <>*/}
        {/*        <meta name="robots" content="noindex"></meta>*/}
        {/*        <meta name="googlebot" content="noindex"></meta>*/}
        {/*    </>*/}
        {/*)}*/}
      </Head>
    </>
  );
}

export default SEO;
