import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CherryBlossom from '@/components/CherryBlossom';
import BackgroundMusicPlayer from '@/components/BackgroundMusicPlayer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hikari - Discord Music Bot',
  description: 'High-quality music streaming bot for Discord with advanced features',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CherryBlossom />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {/* Background Music Player */}
        <BackgroundMusicPlayer />
      </body>
    </html>
  );
}
