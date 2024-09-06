import * as React from 'react';
import type { Metadata } from 'next';
import { config } from '@/config';
import PatientDashboard from '@/components/patient-dashboard/patient-dashboard';

export const metadata = {
  title: `Patient Dashboard | ${config.site.name}`,
} satisfies Metadata;

export default function pagePatient(): React.JSX.Element {
  return <PatientDashboard />;
}
