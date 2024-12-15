import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MouseTrail from '@/components/effects/MouseTrail';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechForge Solutions | Modern Software Agency',
  description: 'Leading software development agency specializing in cutting-edge solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <MouseTrail />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}