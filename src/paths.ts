export const paths = {
  home: '/',
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    resetPassword: '/auth/reset-password',
  },
  'patient-dashboard': '/patient-dashboard',
  'doctor-dashboard': '/doctor-dashboard',
  predictions: '/predictions',
  appointments: '/appointments',
  vitals: '/vitals',
  medicalReports: '/medical-reports',
  account: 'profile',
  errors: { notFound: '/errors/not-found' },
} as const;
