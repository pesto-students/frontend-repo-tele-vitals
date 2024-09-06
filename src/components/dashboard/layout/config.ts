import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    href: paths['patient-dashboard'],
    icon: 'dashboard',
  },
  {
    key: 'predictions',
    title: 'Predictions',
    href: paths.predictions,
    icon: 'predictions',
  },
  {
    key: 'appointments',
    title: 'Appointments',
    href: paths.appointments,
    icon: 'appointments',
  },
  { key: 'vitals', title: 'Vitals', href: paths.vitals, icon: 'vitals' },
  {
    key: 'medical-reports',
    title: 'Medical Reports',
    href: paths.medicalReports,
    icon: 'report',
  },
] satisfies NavItemConfig[];
