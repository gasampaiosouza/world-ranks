import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  title: 'World Ranks - devChallenges',
  description: 'World Ranks project from devChallenges',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${beVietnamPro.className} h-full bg-[#1B1D1F]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
