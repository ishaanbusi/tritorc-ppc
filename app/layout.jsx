import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tritorc - Precision Bolting Solutions Worldwide',
  description: 'Engineering-grade hydraulic torque tools for critical applications worldwide. Trusted by Fortune 500 companies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
