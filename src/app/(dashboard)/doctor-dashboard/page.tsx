import * as React from 'react';
import type { Metadata } from 'next';
import { config } from '@/config';
import DoctorPage from '@/components/doctor-dashboard/doctor-page';

export const metadata = {
  title: `Doctor Dashboard | ${config.site.name}`,
} satisfies Metadata;

type Props = {};

const pageDoctorDashboard = (props: Props) => {
  return <DoctorPage />;
};

export default pageDoctorDashboard;
