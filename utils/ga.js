import Script from 'next/script';

/* Google Maps */
export const GoogleMapsConfig = () => (
  <script
    src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=&v=weekly`}
    async
  ></script>
);

/* Google Analytics */
export const GoogleAnalyticsConfig = () => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
      strategy="lazyOnload"
      async
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}', {
      page_path: window.location.pathname,
    });
  `}
    </Script>
  </>
);

// Log the pageview with their URL
// export const pageview = (url) => {
//     window.gtag('config', process.env.NEXT_PUBLIC_GTAG_ID, {
//         page_path: url,
//     });
// };
