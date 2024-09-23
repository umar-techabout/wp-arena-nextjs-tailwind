
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
import '../../app/globals.css'
import '../styles/Media.css'; 
import '../../../public/Media.css'// Adjust the path to your global styles
import Layout from '../../app/layout' // Adjust the path as needed

export default function RootLayout({ Component, pageProps }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </body>
    </html>
  );
}

