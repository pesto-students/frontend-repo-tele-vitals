import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';

import { config } from '@/config';

export const metadata = {
  title: `Not found | ${config.site.name}`,
} satisfies Metadata;

export default function NotFound(): React.JSX.Element {
  return <Box>not found</Box>;
}
