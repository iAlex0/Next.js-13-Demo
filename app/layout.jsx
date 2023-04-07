import Header from './components/Header';
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "iAlex0 Media",
  description: "Web Development, Web Design, and more.",
  keywords:
    "Web Development, Web Design, HTML, CSS, JavaScript, React, TypeScript, Node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className='container'>{children}</main>
        </body>
    </html>
  );
}
