import Appointments from '@/components/appointments/appointments';
import type { Metadata } from 'next';
import React from 'react';
import { config } from '@/config';

type Props = {};
export const metadata = {
  title: `Appointments Information | ${config.site.name}`,
} satisfies Metadata;

const pageAppointments = (props: Props) => {
  return <Appointments />;
};

export default pageAppointments;
