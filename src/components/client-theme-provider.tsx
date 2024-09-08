'use client';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import theme from '@/themes/index';
import initializeAxios from '@/utils/axios';

export default function ClientThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customization = {};
  initializeAxios();
  return (
    <ThemeProvider theme={theme(customization)}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </ThemeProvider>
  );
}
