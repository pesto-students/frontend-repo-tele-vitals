'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/themes/index';

export default function ClientThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customization = {};
  return <ThemeProvider theme={theme(customization)}>{children}</ThemeProvider>;
}
