import React from 'react';
import { config } from '@/config';
import type { Metadata } from 'next';

export const metadata = {
  title: `Vitals Information | ${config.site.name}`,
} satisfies Metadata;

type Props = {};

const pageVitals = (props: Props) => {
  return <div>pageVitals</div>;
};

export default pageVitals;
