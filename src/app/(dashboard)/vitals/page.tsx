import React from 'react';
import { config } from '@/config';
import type { Metadata } from 'next';
import Vitals from '@/components/vitals/vitals';

export const metadata = {
  title: `Vitals Information | ${config.site.name}`,
} satisfies Metadata;

type Props = {};

const pageVitals = (props: Props) => {
  return <Vitals />;
};

export default pageVitals;
