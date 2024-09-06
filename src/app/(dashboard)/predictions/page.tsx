import React from 'react';
import { config } from '@/config';
import type { Metadata } from 'next';

export const metadata = {
  title: `Predictions Information | ${config.site.name}`,
} satisfies Metadata;

type Props = {};

const pagePredictions = (props: Props) => {
  return <div>pagePredictions</div>;
};

export default pagePredictions;
