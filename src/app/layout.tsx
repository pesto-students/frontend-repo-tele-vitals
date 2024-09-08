import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserProvider } from '@/contexts/user-context';
import ClientThemeProvider from '@/components/client-theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tele Vitals',
  description:
    'A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.',
  icons: {
    icon: '/assets/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
