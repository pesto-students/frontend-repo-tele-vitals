import React from 'react';
import { config } from '@/config';
import type { Metadata } from 'next';
import Predictions from '@/components/predictions/predictions';

export const metadata = {
  title: `Predictions Information | ${config.site.name}`,
} satisfies Metadata;

type Props = {};

const pagePredictions = (props: Props) => {
  return <Predictions />;
};

export default pagePredictions;
