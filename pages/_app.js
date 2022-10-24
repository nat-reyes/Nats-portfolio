import '../styles/globals.css';
import Layout from '../components/Layout';
// import { pageview } from 'utils/ga';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
