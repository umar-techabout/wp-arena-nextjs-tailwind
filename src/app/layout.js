import Head from 'next/head';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer'; 
import ServicesBar from '@/components/top-services-bar/ServicesBar';
import './globals.css'; 
import '../../public/Media.css'
import Patners from '@/components/patners/Patners';
export const metadata = {
  title: 'Wp-Arena',
  description: 'WPArena is a premium online resource site of WordPress and is focused on providing excellent WordPress Tutorials, Guides, Tips, and Collections.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header />
        {/* <ServicesBar /> */}
        <main>{children}</main>
        <Patners />
        <Footer />
      </body>
    </html>
  );
}
