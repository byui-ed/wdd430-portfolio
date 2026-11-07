import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Geist, Geist_Mono } from 'next/font/google'; 



const geistSans = Geist({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function RootLayout({ 
  children,
}: Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         <Header />
         {children}
         <Footer />
      </body>
    </html>
  );
}




