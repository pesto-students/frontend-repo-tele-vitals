import * as React from 'react';
import type { Metadata } from 'next';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { ArrowLeft as ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr/ArrowLeft';

// import { config } from '@/config';
import { paths } from '@/paths';

// export const metadata = {
//   title: `Not found | ${config.site.name}`,
// } satisfies Metadata;

export default function NotFound(): React.JSX.Element {
  return <Box>not found</Box>;
}
